import ReactPlayer from 'react-player/lazy'
import Clients from './Clients'
import LikeButtons from './LikeButtons'
import BanderaMedia from './BanderaMedia'
import StarRating from './StarRating'
import { GiBlackFlag } from 'react-icons/gi';
import { FaFacebook } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaDeezer } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';
import { FaTiktok } from 'react-icons/fa';
import { FaSoundcloud } from 'react-icons/fa';
import { SiTidal } from 'react-icons/si';
import { FaNapster } from 'react-icons/fa';
import Comments from "../Comments/Comments";
import { BsFillPlayCircleFill } from 'react-icons/bs';



function Card(props) {
 
   let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "No Mas Boletos"
    }
    else if (props.item.openSpots > 0) {
        badgeText = "Boletos Disponibles"
        
   }
  

  return (
    
            <div className="card">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={`../images/${props.item.coverImg}`} className="card--image" alt="card" />
                <div className="notranslate">
          <h1 className="card--title">{props.item.title}</h1>
           <p className="category">{props.item.category}</p>
        </div>
      <StarRating/>
        <img src={`../images/${props.item.locationImg}`} className="locationImg" alt="location" />
                <p className="description">{props.item.description}</p>
               <div>
               
                   
                        <ReactPlayer
                            className ="video"    
                            width="280px"
                            height="180px"
                            light
                            controls url={props.item.videourl}
                            playIcon=<BsFillPlayCircleFill/>
            />
            </div> 
      <LikeButtons />
      <div>
        <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
          />
          </div>
      <div className="slidertextdiv">
            <h1 className="slidertext">Presiona un Link para visitar la red social del artista</h1>
        </div>
        <div className='third-party-icons'>
       <a target="_blank" rel="noreferrer" href={props.item.websiteurl} className='icons-bandera' id="third-party-grid">
          <GiBlackFlag /></a>
        
       <a target="_blank" rel="noreferrer" href={props.item.facebook} className='icons-fb' id="third-party-grid"><FaFacebook/></a>
                         
        <a target="_blank" rel="noreferrer" href={props.item.youtube} className='icons-YT' id="third-party-grid"><FaYoutube /></a>
                         
        <a target="_blank" rel="noreferrer" href={props.item.instagram} className='icons-instagram' id="third-party-grid"><FaInstagramSquare /></a>
                         
        <a target="_blank" rel="noreferrer" href={props.item.twitter} className='icons-twitter' id="third-party-grid"><FaTwitterSquare /></a>
          
        <a target="_blank" rel="noreferrer" href={props.item.tiktok} className='icons-tiktok' id="third-party-grid" ><FaTiktok /></a>
        
        <a target="_blank" rel="noreferrer" href={props.item.spotify} className='icons-spotify' id="third-party-grid"><FaSpotify /></a>
                      
        <a target="_blank" rel="noreferrer" href={props.item.deezer} className='icons-deezer' id="third-party-grid" ><FaDeezer /></a>
                  
        <a target="_blank" rel="noreferrer" href={props.item.apple} className='icons-itunes' id="third-party-grid"><SiApplemusic />
        </a>
                  
        <a target="_blank" rel="noreferrer" href={props.item.soundcloud} className='icons-soundcloud' id="third-party-grid"><FaSoundcloud />
        </a>        
        <a target="_blank" rel="noreferrer" href={props.item.tidal} className='icons-tidal' id="third-party-grid"><SiTidal />
        </a>
                  
        <a target="_blank" rel="noreferrer" href={props.item.napster} className='icons-napster' id="third-party-grid"><FaNapster />
        </a>
        <a href= {props.item.wiki} target="_blank" rel="noreferrer">
          <img src="../images/wiki.jpg" className="sponsor" alt="" media="(max-width: 400px)" /></a>
       <a href="https://www.informador.mx/" target="_blank" rel="noreferrer">
          <img src="../images/informador.jpg" className="sponsor" alt="" media="(max-width: 400px)" /></a>
        
        <a href="https://www.mtvla.com/" target="_blank" rel="noreferrer">
          <img src="../images/mtv.jpg" className="sponsor" alt="" media="(max-width: 400px)" />
        </a>
        <a href="https://www.estadioakron.mx/" target="_blank" rel="noreferrer">
          <img src="../images/akron.jpg" className="sponsor" alt="" media="(max-width: 400px)" />
        </a>
        
      </div>
      <div>
        <Clients /> 
        </div>
      
      
        <div>
       
        
        <BanderaMedia/>
      </div>
     
      </div>  
    
      
     
      
        
      
        
       
  )
}

export default Card