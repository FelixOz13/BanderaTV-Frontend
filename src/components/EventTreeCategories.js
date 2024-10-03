import { Link } from 'react-router-dom'
import Particle from './Particle'
import Navbar from './Navbar/Navbar'




function EventTreeCategories() {
  return (
    <div>
    <Navbar/>
    <Particle id='particles'/>
    <h1 className="title2">Guadalajara y Zapopan</h1>
    <h1 className="title2">Escoje el Foro o sala de Concierto cual deseas atender</h1>
    <div className="sponsorcontainer">
      <Link className="btn" to="/teatrodiana">
        <img
          src="../images/TeatroDiana.png"
          className="sponsor"
          alt=""
          media="(max-width: 400px)"
        />
      </Link>

      <Link className="btn" to="/ctres">
        <img
          src="../images/Ctres.jpg"
          className="sponsor"
          alt=""
          media="(max-width: 400px)"
        />
      </Link>

      <Link className="btn" to="/auditoriotelmex">
        <img
          src="../images/telmex.jpg"
          className="sponsor"
          alt=""
          media="(max-width: 400px)"
        />
      </Link>
      <Link className="btn" to="/estadioakron">
        <img
          src="../images/akron.jpg"
          className="sponsor"
          alt=""
          media="(max-width: 400px)"
        />
      </Link>
      <Link className="btn" to="/tresdemarzo">
        <img
          src="../images/tresdemarzo.jpg"
          className="sponsor"
          alt=""
          media="(max-width: 400px)"
        />
      </Link>
      <img className="indianaut" src="./images/aguiladorada.jpeg" alt="" />
      <img className="indianaut2" src="./images/aguiladorada.jpeg" alt="" />
      <img className="indianaut2" src="./images/moonaut.png" alt="" />
        <img className="indianaut" src="./images/astronaut.png" alt="" />
        <img className="indianaut" src="./images/indianaut.png" alt="" />
        <img className="indianaut" src="./images/rockguitarist.jpg" alt="" />
    </div>
    </div>
  
  )
}

export default EventTreeCategories