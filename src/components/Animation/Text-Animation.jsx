
import './animation.css';
import TextAnim from './PrintsTextAnim' 


const Textanim = () => {

    

  return (
    <div className="Text">
    <h1 className="text-animated">
            Соңғы жаңалықтар
            
    </h1>
    <TextAnim width={26} text_main={"Жаңалықтардан хабардар болыңыз"}/>

    </div>
  );
}

export default Textanim;