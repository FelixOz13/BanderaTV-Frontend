import "./intro.css"
import SponsorContainer from "./SponsorContainer"
import Clients from "./Clients"
import ButtonTreeCategories from "./ButtonTreeCategories";
import Comments from "../Comments/Comments";
import Navbar from "./Navbar"
import ReactPlayer from "react-player";
import { VimeoPlayerProps } from "react-player/vimeo";
import { BsFillPlayCircleFill } from 'react-icons/bs';






function BanderaNews() {
  return (
    <div className="hero">
    <div>
       <Navbar />
      
      <div>
        <div className="notranslate">
        <h1 className="title2"> Noticias y Reportajes Musicales</h1>
          </div>
         
        <h4 className="headertext">!!!Se Presenta Ricardo Hernandez con las Noticias y Reportajes Musicales del Momento!!! </h4>
        
         <ButtonTreeCategories/>
        </div>
        
      
       <div className='player-wrapper-5'>
          <ReactPlayer
            controls
            autoplay={true}
            light={'../images/MusicNews2.jpeg'}
            playIcon={<BsFillPlayCircleFill/>}
            className='react-player'
            url='https://youtu.be/hRXER-VEuks'
            //https://vimeo.com/791697599"
            width='95%'
            height='80%'
          />
          
         </div>
      
      <img className="indianaut" src="./images/astronaut.png" alt="" />
      <img className="indianaut" src="./images/astronaut.png" alt="" />
        <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
          />
      <SponsorContainer />
      <Clients/>
    </div>
 </div>
     )
}

export default BanderaNews