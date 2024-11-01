import './intro.css'
import CommentBox from '../CommentsComponents/CommentBox'
import Navbar from './Navbar/Navbar';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import MarqueeSlider from './MarqueeSlider'
import Footer from './Footer/Footer'
=======
import Particle from './Particle';
>>>>>>> 8de4ec8f562bc6272f731b73e6994c561704d092


const items = [
  {
    link: 'https://cerveceriachapultepec.com/',
    image: './images/chapulogo.jpg'
  },
  {
    link: 'https://www.ocesa.com.mx/',
    image: './images/ocesa.png'
  },
  {
    link: 'https://cuervotradicional.com.mx/',
    image: './images/tradicional.jpg'
  },
  {
    link: 'https://estadioakron.mx/',
    image: './images/akron.jpg'
  },{
    link: 'https://www.teatrodiana.com/',
    image: './images/TeatroDiana.png'
  },
  // Add more items as needed
];



function Intro() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('./login')
      return
    }
  })
  return (
    <div className="hero">
    <Particle id="particles"/>
      <div>
        <Navbar />
<<<<<<< HEAD
        <h1 className="title2">
        Bienvenido {user && user.username}
        
      </h1>
      
=======
        
        <h1 className="title2">Bienvenido</h1>
        <div>
          <h4 className="headertext">
            {' '}
            Escoje el tipo de musica que mas te gusta`???
          </h4>

          <ButtonTreeCategories />
          
        </div>
        <img className="indianaut" src="./images/indianaut.png" alt="" />

        <img className="indianaut" src="./images/indianaut.png" alt="" />

>>>>>>> 8de4ec8f562bc6272f731b73e6994c561704d092
        <img
          className="player-wrapper-3"
          src="./videos/banderatv.gif"
          alt="Mex Music"
          style={{ width: '100%', height: '100%' }}
        />
       
        <MarqueeSlider items={items} />
        <img className="indianaut" src="./images/indianaut.png" alt="" />
        <img className="indianaut2" src="./images/indianaut.png" alt="" />
        <img className="indianaut" src="./images/indianaut.png" alt="" />

        <img className="indianaut" src="./images/indianaut.png" alt="" />
      </div>
      <CommentBox  />
      {/* <SponsorContainer />
  <Clients />*/}
  <Footer/>
    </div>
  )
}

export default Intro
