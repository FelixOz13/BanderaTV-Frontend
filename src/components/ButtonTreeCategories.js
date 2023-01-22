import { Link } from 'react-router-dom'


function ButtonTreeCategories() {
  return (
    <div>
      <Link className="btn" to="/home">
        <img src="../images/homelogo.png" className="sponsor" alt="" media="(max-width: 400px)" />
      </Link> 

      <Link className="btn" to="/mariachi">
        <img src="../images/regimex1.png" className="sponsor" alt="" media="(max-width: 400px)" />
      </Link>

      <Link className="btn" to="/banda">
        <img src="../images/bandalogo.png" className="sponsor" alt="" media="(max-width: 400px)" />
      </Link>
      
      <Link className="btn" to="/norteño">
        <img src="../images/norteño.png" className="sponsor" alt="" media="(max-width: 400px)" />
      </Link> 

      <Link className="btn" to="/cumbias">
        <img src="../images/cumbialogo.png" className="sponsor" alt="" media="(max-width: 400px)" />
      </Link> 

      <Link className="btn" to="/rockesp">
        <img src="../images/rockesp.jpeg" className="sponsor" alt="" media="(max-width: 400px)" />
      </Link> 

      <Link className="btn " to="/raptrap">
        <img src="../images/rap3.jpg" className="sponsor" alt="" media="(max-width: 400px)" />
      </Link> 
      <Link className="btn " to="/reggaeton">
        <img src="../images/reggaetonlogo.png" className="sponsor" alt="" media="(max-width: 400px)" />
      </Link> 

      <Link className="btn" to="/reggae">
        <img src="../images/reggaelogo.jpg" className="sponsor" alt="" media="(max-width: 400px)" />
      </Link>

      <Link className="btn" to="/alternative">
        <img src="../images/alternativelogo.png" className="sponsor" alt="" media="(max-width: 400px)" />
      </Link>

      <Link className="btn" to="/pop">
        <img src="../images/pop.jpeg" className="sponsor" alt="" media="(max-width: 400px)" />
      </Link>

      <Link className="btn" to="/classicrock">
        <img src="../images/classicrock.jpeg" className="sponsor" alt="" media="(max-width: 400px)" />
      </Link> 

      <Link className="btn" to="/clubmusic">
        <img src="../images/clubmusiclogo.jpeg" className="sponsor" alt="" media="(max-width: 400px)" />
      </Link> 
      <Link className="btn" to="/banderanews">
        <img src="../images/MusicNews.png" className="sponsor" alt="" media="(max-width: 400px)" />
      </Link> 
    </div>
  )
}

export default ButtonTreeCategories