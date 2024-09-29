import React from 'react';
import './bibliography.css'; // Import the CSS file
import Navbar from './Navbar/Navbar';


function Bibliography() {
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
    <div className="bibliography-container">
      <h2 className="bibliography-title">Bibliografia</h2>
      <h4 className="bibliography-props">Quisiera expresar mi más sincero agradecimiento a todas las personas y comunidades que han colaborado y contribuido en la creación y mantenimiento de los sitios web mencionados en esta bibliografía. Su dedicación y esfuerzo han sido fundamentales para el desarrollo de "Bandera Musical", proporcionando valiosos recursos, información y plataformas que han enriquecido este proyecto. Gracias a Wikipedia, YouTube, Facebook, Instagram, Spotify, Tidal, Apple Music, TikTok, SoundCloud, Deezer, Amazon Music, ChatGPT y Google, por su compromiso con la difusión cultural y musical. Su trabajo ha permitido que este proyecto sea posible y exitoso</h4>
      <ul className="bibliography-list">
        <li className="bibliography-item">
          Wikipedia. <a className="bibliography-link" href="https://www.wikipedia.org/" target="_blank" rel="noopener noreferrer">Wikipedia</a>.
        </li>
        <li className="bibliography-item">
          YouTube. <a className="bibliography-link" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a>.
        </li>
        <li className="bibliography-item">
          Facebook. <a className="bibliography-link" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>.
        </li>
        <li className="bibliography-item">
          Instagram. <a className="bibliography-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>.
        </li>
        <li className="bibliography-item">
          Spotify. <a className="bibliography-link" href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer">Spotify</a>.
        </li>
        <li className="bibliography-item">
          Tidal. <a className="bibliography-link" href="https://tidal.com/" target="_blank" rel="noopener noreferrer">Tidal</a>.
        </li>
        <li className="bibliography-item">
          Apple Music. <a className="bibliography-link" href="https://music.apple.com/" target="_blank" rel="noopener noreferrer">Apple Music</a>.
        </li>
        <li className="bibliography-item">
          TikTok. <a className="bibliography-link" href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">TikTok</a>.
        </li>
        <li className="bibliography-item">
          SoundCloud. <a className="bibliography-link" href="https://soundcloud.com/" target="_blank" rel="noopener noreferrer">SoundCloud</a>.
        </li>
        <li className="bibliography-item">
          Deezer. <a className="bibliography-link" href="https://www.deezer.com/" target="_blank" rel="noopener noreferrer">Deezer</a>.
        </li>
        <li className="bibliography-item">
          Amazon Music. <a className="bibliography-link" href="https://music.amazon.com/" target="_blank" rel="noopener noreferrer">Amazon Music</a>.
        </li>
        <li className="bibliography-item">
          ChatGPT. <a className="bibliography-link" href="https://www.openai.com/chatgpt" target="_blank" rel="noopener noreferrer">ChatGPT</a>.
        </li>
        <li className="bibliography-item">
          Google. <a className="bibliography-link" href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Google</a>.
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

export default Bibliography;
