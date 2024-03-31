import React, {useEffect, useState} from 'react';
import {Button, Input, List, Avatar, Space} from 'antd';
import {SendOutlined} from '@ant-design/icons';

import {Card} from 'antd';
import {OpenAI} from "openai";
import {marked} from "../../utils/messageParser";

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_API_KEY,
    dangerouslyAllowBrowser: true,
});
const providedMessage = {
    role: "system", // This would be translated to "assistant" in your structure
    content: "you know all the laws of Kazakhstan and you are an assistant on such issues.answer mostly in Russian."

};

const Lawyer = () => {
    const [messages, setMessages] = useState([
        {text: "Сәлеметсіз бе мен Бекарыстың жеке ботымын ", fromUser: false},
        {text: "...", fromUser: true},
    ]);


    const [newMessage, setNewMessage] = useState('');
    const [writing, setWriting] = useState(false);
    const [inputValue, setInputValue] = useState('');


    useEffect(() => {
            if (writing) return
            if (newMessage.length === 0) return

            setMessages(prev => [...prev, {text: newMessage, fromUser: false}])
            setNewMessage("")
        }
        , [writing])
    const handleMessageSend = async () => {
        if (inputValue.trim() !== '') {
            // Обновляем состояние messages и сразу используем обновленное значение
            setMessages(prev => {
                const updatedMessages = [...prev, {text: inputValue, fromUser: true}];

                const userMessages = updatedMessages.map(message => ({
                    role: message.fromUser ? "user" : "assistant",
                    content: [{type: "text", text: typeof message.text === "string" ? message.text : ""}]
                }));
                userMessages.unshift({
                    role: "system", // Translating "system" to "assistant"
                    content: [{type: "text", text: providedMessage.content}] // Ensuring the content fits the expected structure
                });

                // Вызовите OpenAI API с обновленными userMessages
                (async () => {
                    setInputValue('');
                    setWriting(true);

                    const response = await openai.chat.completions.create({
                        model: "gpt-4-turbo-preview",
                        messages: userMessages,
                        stream: true,
                    });

                    for await (const chunk of response) {
                        setNewMessage(prev => `${prev}${chunk.choices[0]?.delta?.content || ""}`);
                        if (chunk.choices[0]?.finish_reason === "stop") {
                            setWriting(false);
                        }
                    }
                })();

                return updatedMessages;
            });
        }
    };


    return (
        <div className="chat-container">

            <div className="chat-body">
                <Card title="Көмекші" className="chat-card">
                    <div className="flex flex-col flex-grow" style={{
                        marginTop: 16,
                    }}>

                        <div className="chat-messages" style={{
                            borderRadius: '8px',
                            backgroundColor: '#ffffff',
                        }}>
                            <List
                                itemLayout="horizontal"
                                dataSource={messages}
                                renderItem={message => (
                                    <List.Item style={{textAlign: message.fromUser ? 'right' : 'left'}}>
                                        <List.Item.Meta
                                            avatar={<Avatar icon={message.fromUser ?
                                                <Avatar/> :
                                                <SendOutlined/>}/>}
                                            title={message.fromUser ? 'Қолданушы' : 'БОТ'}
                                            description={<div
                                                dangerouslySetInnerHTML={{__html: marked(message.text)}}/>}
                                        />
                                    </List.Item>
                                )}
                            />
                            {writing && (<List.Item style={{textAlign: 'left'}}>
                                <List.Item.Meta
                                    avatar={<Avatar icon={<SendOutlined/>}/>}
                                    title={'Bot'}
                                    description={<div dangerouslySetInnerHTML={{__html: marked(newMessage)}}/>}
                                />
                            </List.Item>)}
                            <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center'}}>
                                <Input
                                    value={inputValue}
                                    onChange={e => setInputValue(e.target.value)}
                                    onPressEnter={handleMessageSend}
                                    placeholder="Сұрағыңызды жазыңыз..."
                                    disabled={writing}
                                    style={{flex: 1, marginRight: '10px'}}
                                />
                                <Button disabled={writing} type="accent" onClick={handleMessageSend}>Жіберу</Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

        </div>
    )
        ;
};

export default Lawyer;


