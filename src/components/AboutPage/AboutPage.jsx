import './AboutPage.css'
import TextAnim from '../Animation/PrintsTextAnim'
import Footer from '../footer/footer'


const AboutPage = () => {


    return(
        <div className="about_page" >

       
 
        <div className="container_about text_before_after">

            <h1>Біз жайлы</h1>
          
          
            </div>
   
            <div className="text_anim_style ">
            <TextAnim  width={46} text_main={"Қазақстан халықаралық міндеттемелеріне және адам құқықтары мен заң үстемдігі саласындағы әмбебап қағидаттарға бейілдігін сақтайды."} />
            
            
        <div className="Content_container">
   
       <TextAnim  width={10} text_main={"(Қасым-Жомарт Тоқаев)"} />
       <div className="castom_text_design">
       <div className="container_about_text_design">
         <h1 className="text_about_pages">Құқық қорғау біздің басты міндетіміз</h1>
       </div>
     </div>
        </div>
            <div className="text_container">
  
            <h4 className="text_about_us">Lawlapp-тың миссиясы - клиенттердің құқықтық қызметтерге қол жетімді мүмкіндік беру. </h4>

        </div>







        
        <div className="text_container">
        <h4 className="text_about_us">Біздің мақсатымыз – адамдарға уақытты, күш-жігерді және қаржылық ресурстарды ысырап етпей, қажетті заң көмегін алуға көмектесу.</h4>
        </div> 
        </div>
    

        <h4 className="text_brain">"Біз өз құқығымыз үшін күресуіміз керек."</h4>
 
        <div className="day-night-circle">
        
        <div className="sun"></div>
        <div className="moon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="stars">
        
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
       
        <div className="water"></div>
   
        </div>
        <div className="paddings"/>
     
        <Footer/>

        </div>
    )
}



export default AboutPage;