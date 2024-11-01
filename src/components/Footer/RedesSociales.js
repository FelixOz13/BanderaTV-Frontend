import React from 'react'
import {
  FaWhatsappSquare,
  FaFacebook,
  FaYoutube,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaTiktok,
  FaEnvelope
} from 'react-icons/fa'
import { GiBlackFlag } from 'react-icons/gi'
import './Footer.css'

const RedesSociales = () => {
  return (
    <div className="redes-container">

      <ul className="redes-list">
        <li>
          <div className="third-party-icons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=523324949195"
              className="third-party-grid"
            >
              <FaWhatsappSquare />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100087385321347"
              className="third-party-grid"
            >
              <FaFacebook />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UC8XAwIHJzLAnq3-s04WCzhw"
              className="third-party-grid"
            >
              <FaYoutube />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/banderamusical/"
              className="third-party-grid"
            >
              <FaInstagramSquare />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/BanderaMusical"
              className="third-party-grid"
            >
              <FaTwitterSquare />
            </a>
           
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/bandera-musical/"
              className="third-party-grid"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.tiktok.com/@bandera_musical"
              className="third-party-grid"
            >
              <FaTiktok />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://banderamusical.com/"
              className="third-party-grid"
            >
              <GiBlackFlag />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:contacto@banderamusical.com"
              className="third-party-grid"
            >
              <FaEnvelope />
            </a>
          </div>
        </li>
        <li>
        <h1 className="footer-title" style={{fontFamily:"Iceland", color:"White"}}> Bandera TV</h1>
        </li>
        {/*<li>
          <img
            src="../images/mobileregistered.png"
            alt="Mobile Registered"
            className="footer-banner"
          />
        </li>*/}
      </ul>
    </div>
  )
}

export default RedesSociales
