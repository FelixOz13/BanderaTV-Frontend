import "./intro.css"
import SponsorContainer from "./SponsorContainer"
import Clients from "./Clients"
import ButtonTreeCategories from "./ButtonTreeCategories";
import Comments from "../Comments/Comments";
import Navbar from "./Navbar"
import ReactPlayer from "react-player";






function BanderaNews() {
  return (
    <div className="hero">
    <div>
       <Navbar />
      
      <div>
        <div className="notranslate">
        <h1 className="title2">Bandera Noticias y Reportajes Musicales</h1>
          </div>
         
        <h4 className="headertext">!!!Se Presenta Ricardo Hernandez con las Noticias y Reportajes Musicales del Momento!!! </h4>
        
         <ButtonTreeCategories/>
        </div>
        
       
        
     <ReactPlayer
          className="player-wrapper-5"
          width="100%"
          autoPlay={true}
          
          url="https://vimeo.com/791697599"
          
           
        />
        
      </div>
      
        <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
          />
      <SponsorContainer />
      <Clients/>
    </div>

     )
}

export default BanderaNews