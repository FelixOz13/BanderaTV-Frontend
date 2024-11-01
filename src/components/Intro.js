import './intro.css'
import CommentBox from '../CommentsComponents/CommentBox'
import Navbar from './Navbar/Navbar';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import MarqueeSlider from './MarqueeSlider'
import Footer from './Footer/Footer'


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
      <div>
        <Navbar />
        <h1 className="title2">
        Bienvenido {user && user.username}
        
      </h1>
      
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
