import './intro.css'
import ButtonTreeCategories from './ButtonTreeCategories'
import Comments from '../Comments/Comments'
import Navbar from './Navbar/Navbar';




function Intro() {
  return (
    <div className="hero">
      <div>
        <Navbar />

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

        <img
          className="player-wrapper-3"
          src="./videos/MexMusicNet.gif"
          alt="Mex Music"
          style={{ width: '100%', height: '100%' }}
        />
        <img className="indianaut" src="./images/indianaut.png" alt="" />
        <img className="indianaut2" src="./images/indianaut.png" alt="" />
      </div>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
      {/* <SponsorContainer />
  <Clients />*/}
    </div>
  )
}

export default Intro
