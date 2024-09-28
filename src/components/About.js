import React from 'react';
import Navbar from './Navbar';


const About = () => {
  return (
    <div>
    <Navbar/>
    <div style={styles.container}>
      <a href="https://banderamusical.com/" target="_blank" rel="noopener noreferrer">
        <img
          className="logo"
          src="../images/icon.png"
          alt="Icon"
          width="300px"
          height="auto"
          style={styles.image}
        />
      </a>
      <h1 style={{ fontSize: "4rem", fontFamily: "Iceland", color: "green", margin: '25px' }}>Acerca de Bandera Musical</h1>
      <p style={{ fontSize: "2rem", fontFamily: "Iceland", color: "goldenrod", margin: '25px' }}>
        Bandera Musical es una empresa apasionada dedicada a la promoción de grupos musicales y la venta de mercancía exclusiva para sus fieles seguidores.
        Fundada en 2021 en la vibrante Ciudad de Guadalajara, Jalisco, por Felix Ozuna, Bandera Musical se ha convertido en un punto de encuentro para los amantes de la música y la cultura alternativa en México.
      </p>

      <h1 style={{ fontSize: "4rem", fontFamily: "Iceland", color: "green", margin: '25px' }}>Nuestra Misión</h1>
      <p style={{ fontSize: "2rem", fontFamily: "Iceland", color: "goldenrod", margin: '25px' }}>
        En Bandera Musical, nuestra misión es conectar a los fans con sus artistas favoritos a través de una amplia gama de productos y experiencias.
        Desde posters y camisetas hasta artefactos coleccionables como Cartitas de Colección y Figuras de Acción, ofrecemos artículos únicos que capturan la esencia y el espíritu de la música que amamos.
      </p>

      <h1 style={{ fontSize: "4rem", fontFamily: "Iceland", color: "green", margin: '25px' }}>Nuestra Plataforma Digital</h1>
      <p style={{ fontSize: "2rem", fontFamily: "Iceland", color: "goldenrod", margin: '25px' }}>
        Además de nuestra presencia física en el Tianguis Cultural de Guadalajara y el Tianguis de la Av. Chapultepec,
        Bandera Musical cuenta con una vibrante plataforma digital en <a href="https://banderamusical.com/" target="_blank" rel="noopener noreferrer"> https://banderamusical.com</a>
        </p><br/><p style={{ fontSize: "2rem", fontFamily: "Iceland", color: "goldenrod", margin: '25px' }}> Aquí, los fans pueden disfrutar de contenido exclusivo, videos musicales y seguir de cerca las últimas novedades de sus artistas preferidos.
        No te pierdas nuestro programa transmitido todos los sábados y domingos, donde exploramos la escena musical y compartimos historias fascinantes.
      </p>

      <h1 style={{ fontSize: "4rem", fontFamily: "Iceland", color: "green", margin: '25px' }}>Nuestro Compromiso</h1>
      <p style={{ fontSize: "2rem", fontFamily: "Iceland", color: "goldenrod", margin: '25px' }}>
        Somos parte activa de la comunidad cultural de Guadalajara, participando en eventos locales y apoyando a artistas emergentes.
        A través de nuestra tienda en línea, facilitamos a nuestros clientes la adquisición de nuestros productos desde cualquier lugar del mundo, manteniendo siempre nuestra pasión por la música y la cultura alternativa.
      </p>

      <h1 style={{ fontSize: "4rem", fontFamily: "Iceland", color: "green", margin: '25px' }}>Inspiración y Concepto</h1>
      <p style={{ fontSize: "2rem", fontFamily: "Iceland", color: "goldenrod", margin: '25px' }}>
        Inspirados por el espíritu de programas icónicos como Wayne's World y la vibrante energía de MTV en sus inicios,
        así como la diversidad de productos de tiendas como Hot Topic, Bandera Musical se posiciona como un espacio único donde la música, la moda y la cultura se entrelazan de manera innovadora y emocionante.
        Únete a la comunidad de Bandera Musical y descubre un mundo de música, arte y colecciones que resuenan con tu espíritu rebelde y tu amor por la cultura alternativa.
      </p>
      
     </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    padding: '20px',
    
  },
  image: {
    borderRadius: '80px',
    // Additional styles for the image can be added here
  },
};

export default About;
