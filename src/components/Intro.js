import "./intro.css"
import SponsorContainer from "./SponsorContainer"
import ButtonTreeCategories from "./ButtonTreeCategories";
import Comments from "../Comments/Comments";
import Navbar from "./Navbar"





function Intro() {
  return (
    <div className="hero">
    <div>
       <Navbar />
      
      <div>
        <div className="notranslate">
        <h1 className="title2">Bandera Musical</h1>
          </div>
         
        <h4 className="headertext"> Hola Paisano, Bienvenido a Bandera Musical!, Escoje el tipo de musica que mas te gusta`???</h4>
        
         <ButtonTreeCategories/>
        </div>
        <img className="indianaut" src="./images/indianaut.png" alt="" />
        <img className="santanaut" src="./images/sley.jpg" alt="" />
        <img className="indianaut" src="./images/indianaut.png" alt="" />
        
        
      <video
          className="player-wrapper-3"
          width="100%"
          height="100%"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}>
         <source src="./images/Banderamusicalgreenspace.mp4" type="video/mp4"/>
        </video>
        <img className="indianaut" src="./images/indianaut.png" alt="" />
        <img className="indianaut2" src="./images/indianaut.png" alt="" />
        <img className="santanaut" src="./images/sley.jpg" alt="" />
      </div>
        <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
          />
   <SponsorContainer/>
    </div>

        
        
      
   
   
          
       
  
      
      
  )
}

export default Intro