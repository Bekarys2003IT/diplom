
import Footer from '../footer/footer'
import './ContactPage.css'
import TextAnim from '../Animation/PrintsTextAnim'
import url from '../backend-server-url'


const ContactPage = () => {

    
    return(
        <div >
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="container_about text_before_after">

            <h1>Контакты</h1>
          
          
            </div>
        <TextAnim  width={37} text_main={"Біздің контактілеріміз әрқашан желіде"} />
        <div className="banka">

        <a href={url.social.linkedin} className="fa fa-linkedin" id="SocialNetwork"></a>
        <a href={url.social.vk} className="fa fa-vk vk" id="SocialNetwork"></a>
        <a href={url.social.github} className="fa fa-github-square github" id="SocialNetwork"></a>
        <a  href={url.social.instagram} className="fa fa-instagram" id="SocialNetwork"></a>
      </div>
      <div className="container_about text_before_after">

      <h1>Наш gmail</h1>
    
    
      </div>
      <div className="container_about padding_contact">
      <h3 style={{textAlign: 'center'}} >{url.gmail}</h3>
      
      
      </div>
    <div className="footer_contact">
      
        <Footer/>
        </div>
        </div>
    )
}



export default ContactPage;