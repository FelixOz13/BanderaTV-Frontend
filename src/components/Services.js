import React from 'react';
import './Servicios.css'; // Import the CSS file
import Navbar from './Navbar/Navbar';

function Services() {
  return (
    <div>
    <Navbar/>
    <div style={styles.container}>
    <a href="https://banderamusical.com/" target="_blank" rel="noopener noreferrer">
        <img
          className="logo"
          src="../images/icon.png"
          alt="Icon"
          width="200px"
          height="auto"
          style={styles.image}
        />
      </a>
      </div>
    <div className="servicios-container">
      <h2 className="servicios-title">Servicios de Bandera Musical</h2>
      <ul className="servicios-list">
        <li className="servicios-item">
          <strong>1. Promoción Musical:</strong> Ofrecemos una plataforma para la promoción de artistas y bandas, así como noticias musicales sobre eventos.
        </li>
        <li className="servicios-item">
          <strong>2. Venta de Boletos:</strong> Facilitamos la compra de boletos para conciertos y eventos musicales de forma segura y conveniente.
        </li>
        <li className="servicios-item">
          <strong>3. Venta de Mercancía Oficial:</strong> Disponemos de una variedad de productos oficiales de grupos musicales, desde camisetas hasta discos.
        </li>
        <li className="servicios-item">
          <strong>4. Venta de Publicidad:</strong> Ofrecemos espacios publicitarios en nuestro blog para productos y establecimientos, ayudando a aumentar su visibilidad.
        </li>
        <li className="servicios-item">
          <strong>5. Creación y Publicación de Videos Comerciales:</strong> Proporcionamos servicios de producción y publicación de videos comerciales para promocionar eventos y productos musicales.
        </li>
      </ul>
    </div>
    </div>
    
  );
}
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '10vh',
    padding: '20px',
    
  },
  image: {
    borderRadius: '50px',
    // Additional styles for the image can be added here
  },
};

export default Services;
