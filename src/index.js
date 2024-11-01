import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ReactGA from "react-ga4";

// Pages and Components
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Bibliography from './components/Bibliography';
import CardDisplay from './features/cards/CardDisplay';
import Intro from './components/Intro';
import BandDetail from './components/BandDetail';

// Category Components
import ClassicRock from './features/cards/Categories/ClassicRock.js';
import Jazz from './features/cards/Categories/Jazz';
import Pop from './features/cards/Categories/Pop';
import Metal from './features/cards/Categories/Metal';
import RockEsp from './features/cards/Categories/RockEsp';
import Classica from './features/cards/Categories/Classica';
import Country from './features/cards/Categories/Country';
import Mariachi from './features/cards/Categories/Mariachi';
import Banda from './features/cards/Categories/Banda';
import Norteño from './features/cards/Categories/Norteño';
import Reggaeton from './features/cards/Categories/Reggaeton';
import Cumbias from './features/cards/Categories/Cumbias';
import RapTrap from './features/cards/Categories/RapTrap';
import Alternativo from './features/cards/Categories/Alternativo';
import Reggae from './features/cards/Categories/Reggae';
import Electronica from './features/cards/Categories/Electronica';
import Chill from './features/cards/Categories/Chill';
import Romantica from './features/cards/Categories/Romantica';
import Blues from './features/cards/Categories/Blues';
import Boleros from './features/cards/Categories/Boleros';
import Sierreño from './features/cards/Categories/Sierreño';
import Rhythm from './features/cards/Categories/Rhythm';
import HipHop from './features/cards/Categories/HipHop';
import Rancheras from './features/cards/Categories/Rancheras';
import Sonidero from './features/cards/Categories/Sonidero';
import Salsa from './features/cards/Categories/Salsa';
import Bachatta from './features/cards/Categories/Bachatta';
import Solistas from './features/cards/Categories/Solistas';
import Funk from './features/cards/Categories/Funk';
import Trova from './features/cards/Categories/Trova';
import Punk from './features/cards/Categories/Punk';
import SoftRock from './features/cards/Categories/SoftRock';
import Oldies from './features/cards/Categories/Oldies';

ReactGA.initialize("G-MM8CRMGQ36");

const isMobile = /Android/i.test(navigator.userAgent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/myapps" element={<Navigate replace to="/home" />} />
        <Route path="/card-display" element={<CardDisplay />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bibliography" element={<Bibliography />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/Bandera/:id" element={<BandDetail />} />
        <Route path="/classicrock" element={<ClassicRock />} />
        <Route path="/rockesp" element={<RockEsp />} />
        <Route path="/jazz" element={<Jazz />} />
        <Route path="/pop" element={<Pop />} />
        <Route path="/metal" element={<Metal />} />
        <Route path="/classica" element={<Classica />} />
        <Route path="/country" element={<Country />} />
        <Route path="/mariachi" element={<Mariachi />} />
        <Route path="/banda" element={<Banda />} />
        <Route path="/norteño" element={<Norteño />} />
        <Route path="/reggaeton" element={<Reggaeton />} />
        <Route path="/cumbias" element={<Cumbias />} />
        <Route path="/raptrap" element={<RapTrap />} />
        <Route path="/alternativo" element={<Alternativo />} />
        <Route path="/reggae" element={<Reggae />} />
        <Route path="/electronica" element={<Electronica />} />
        <Route path="/chill" element={<Chill />} />
        <Route path="/romantica" element={<Romantica />} />
        <Route path="/blues" element={<Blues />} />
        <Route path="/Boleros" element={<Boleros />} />
        <Route path="/Sierreño" element={<Sierreño />} />
        <Route path="/Rhythm&Blues" element={<Rhythm />} />
        <Route path="/HipHop" element={<HipHop />} />
        <Route path="/Rancheras" element={<Rancheras />} />
        <Route path="/Sonidero" element={<Sonidero />} />
        <Route path="/salsa" element={<Salsa />} />
        <Route path="/bachatta" element={<Bachatta />} />
        <Route path="/solistas" element={<Solistas />} />
        <Route path="/funk" element={<Funk />} />
        <Route path="/trova" element={<Trova />} />
        <Route path="/punk" element={<Punk />} />
        <Route path="/softrock" element={<SoftRock />} />
        <Route path="/oldies" element={<Oldies />} />
      </Routes>

      {isMobile && (
        <div className="headertext">
          <p>Descarga nuestra App Movil para una mejor Experiencia!</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.banderamusical.site"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Descarga nuestra app movil en Google Play"
          >
            <img
              src="images/google-play-badge.png"
              alt="Descarga nuestra app movil en Google Play"
            />
          </a>
        </div>
      )}
    </Router>
  </Provider>
);
