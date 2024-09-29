import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Hits from './components/Hits'
import About from './components/About'
import Intro from './components/Intro'
import Country from './components/Country'
import Mariachi from './components/Mariachi'
import Cumbias from './components/Cumbias'
import RockEsp from './components/RockEsp'
import RapTrap from './components/RapTrap'
import ClassicRock from './components/ClassicRock'
import Metal from './components/Metal'
import Alternative from './components/Alternative'
import Banda from './components/Banda'
import Norteño from './components/Norteño'
import Reggae from './components/Reggae'
import Reggaeton from './components/Reggaeton'
import ClubMusic from './components/ClubMusic'
import Pop from './components/Pop'
import Chill from './components/Chill'
import Romantica from './components/Romantica'
import Local from './components/Local'
import Blues from './components/Blues'
import Clasicas from './components/Clasicas'
import Jazz from './components/Jazz'
import Sierreño from './components/Sierreño'
import Rhythm from './components/Rhythm'
import Baroque from './components/Baroque'
import HipHop from './components/HipHop'
import Rancheras from './components/Rancheras'
import Femeninas from './components/Femeninas'
import Sonidero from './components/Sonidero'
import Salsa from './components/Salsa'
import Bachatta from './components/Bachatta'
import Solistas from './components/Solistas'
import Funk from './components/Funk'
import Trova from './components/Trova'
import Punk from './components/Punk'
import SoftRock from './components/SoftRock'
import Oldies from './components/Oldies'
import BandDetail from './components/BandDetail'



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
const isMobile = /Android/i.test(navigator.userAgent)
//iPhone|iPad|iPod|
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/myapps" element={<Navigate replace to="/home" />} />
        <Route path="/hits" element={<Hits />} />
        <Route path="/about" element={<About />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/country" element={<Country />} />
        <Route path="/mariachi" element={<Mariachi />} />
        <Route path="/banda" element={<Banda />} />
        <Route path="/norteño" element={<Norteño />} />
        <Route path="/reggaeton" element={<Reggaeton />} />
        <Route path="/cumbias" element={<Cumbias />} />
        <Route path="/rockesp" element={<RockEsp />} />
        <Route path="/raptrap" element={<RapTrap />} />
        <Route path="/classicrock" element={<ClassicRock />} />
        <Route path="/pop" element={<Pop />} />
        <Route path="/alternative" element={<Alternative />} />
        <Route path="/reggae" element={<Reggae />} />
        <Route path="/clubmusic" element={<ClubMusic />} />
        <Route path="/chill" element={<Chill />} />
        <Route path="/romantica" element={<Romantica />} />
        <Route path="/local" element={<Local />} />
        <Route path="/blues" element={<Blues />} />
        <Route path="/EpocadeOro" element={<Clasicas />} />
        <Route path="/jazz" element={<Jazz />} />
        <Route path="/Metal" element={<Metal />} />
        <Route path="/Sierreño" element={<Sierreño />} />
        <Route path="/Rhythm&Blues" element={<Rhythm />} />
        <Route path="/Baroque" element={<Baroque />} />
        <Route path="/HipHop" element={<HipHop />} />
        <Route path="/Rancheras" element={<Rancheras />} />
        <Route path="/femeninas" element={<Femeninas />} />
        <Route path="/Sonidero" element={<Sonidero />} />
        <Route path="/salsa" element={<Salsa />} />
        <Route path="/bachatta" element={<Bachatta />} />
        <Route path="/solistas" element={<Solistas />} />
        <Route path="/funk" element={<Funk />} />
        <Route path="/trova" element={<Trova />} />
        <Route path="/punk" element={<Punk />} />
        <Route path="/softrock" element={<SoftRock />} />
        <Route path="/oldies" element={<Oldies />} />
        <Route path="/Bandera/:title" element={<BandDetail />} />
      </Routes>
    </Router>
    <div>

{isMobile && (
  <div className="headertext">
    <p>Descarga nuestra App Movil para una mejor Experiencia!</p>
    <a
      href="https://play.google.com/store/apps/details?id=com.banderamusical.site"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="images/google-play-badge.png"
        alt="Descarga nuestra app movil en Google Play"
      />
    </a>
  </div>
)}

  </div>
  </div>
)
