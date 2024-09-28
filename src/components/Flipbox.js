import { Link } from 'react-router-dom'
import ShareDialog from './shareDialog'


function Flipbox() {
  return (
    <div>
      <div className="navbar">
        <Link to="/intro">
          <img
            className="navbar-logo"
            src="../images/mobileregi6.jpg"
            alt=""
          ></img>
        </Link>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img
                className="flag-logo3"
                src="../images/icon.png"
                alt="Mexico"
                style={{color:'white'}}
              />
            </div>

            <div className="flip-box-back">
            <Link to= '/about'>
              <img
                className="flag-logo4"
                src="../images/aguiladorada.jpeg"
                alt="Mexico"
                style={{color:'green'}}
              />
              </Link>
            </div>
          </div>
        </div>
        <ShareDialog />
        
      </div>
    </div>
  )
}

export default Flipbox
