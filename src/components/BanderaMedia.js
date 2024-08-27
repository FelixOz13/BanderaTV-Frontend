import { FaFacebook } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { GiBlackFlag } from 'react-icons/gi'
import { FaEnvelope } from 'react-icons/fa'
import { FaWhatsappSquare } from 'react-icons/fa'
import '../App.css'

function BanderaMedia() {
  return (
    <div style={{ marginTop: '45px' }}>
      <h6 className="contact" style={{color:"goldenrod"}}>
        Contactos de <br></br> Bandera Musical
      </h6>

      <div className="bandera">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=523324949195"
          className="bandera"
        >
          <FaWhatsappSquare />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=100087385321347"
          className="bandera"
        >
          <FaFacebook />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UC8XAwIHJzLAnq3-s04WCzhw"
          className="bandera"
        >
          <FaYoutube />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/banderamusical/"
          className="bandera"
        >
          <FaInstagramSquare />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/BanderaMusical"
          className="bandera"
        >
          <FaTwitterSquare />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/company/bandera-musical/"
          className="bandera"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.tiktok.com/@bandera_musical"
          className="bandera"
        >
          <FaTiktok />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://banderamusical.com/"
          className="bandera"
        >
          <GiBlackFlag />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:contacto@banderamusical.com"
          className="bandera"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  )
}

export default BanderaMedia
