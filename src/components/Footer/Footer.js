import React from 'react'
import Telefono from './Telefono'
import RedesSociales from './RedesSociales'
import Domicilio from './Domicilio'
import './Footer.css';



const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
        
          <div className="columns">
          <Domicilio/>
          <div className="column-item">
          <Telefono/>
          </div>
          <div className="column-item">
          <RedesSociales/>
          </div>
          </div>
          </div>
      </footer>
    </>
  )
}

export default Footer
