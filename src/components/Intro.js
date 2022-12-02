import "./intro.css"
import SponsorContainer from "./SponsorContainer"
import ButtonTreeCategories from "./ButtonTreeCategories";
import Navbar from "./Navbar"





function Intro() {
  return (
    <div>
       <div className="hero">
      <Navbar />
      
      <div>
        <div className="notranslate">
        <h1 className="title2">Bandera Musical</h1>
          </div>
         
        <h4 className="headertext"> Hola Paisano, Bienvenido a Bandera Musical!, Escoje el tipo de musica que mas te gusta`???</h4>
        
         <ButtonTreeCategories/>
        </div>
        
      <img className="indianaut" src="./images/indianaut.png" alt=""/>
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
        <img className="indianaut" src="./images/indianaut.png" alt=""/>
      </div>
        
   
        
        
         
     
                        
            
        <SponsorContainer/>
    </div>
  
      
      
  )
}

export default Intro