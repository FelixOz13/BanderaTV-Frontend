import React from 'react'
import ButtonTreeCategories from './ButtonTreeCategories'
import Navbar from './Navbar/Navbar'
import Particle from './Particle'


function Categories() {
  return (
    <div>
    <Navbar />
    <Particle id="particles"/>
    <h1 className="title2">Bienvenido</h1>
    <h4 className="headertext">Escoje la Musica que te Gusta?</h4>
    <ButtonTreeCategories/>
    <img className="indianaut" src="./images/aguiladorada.jpeg" alt="" />
    <img className="indianaut2" src="./images/aguiladorada.jpeg" alt="" />
    <img className="indianaut2" src="./images/moonaut.png" alt="" />
      <img className="indianaut" src="./images/astronaut.png" alt="" />
      <img className="indianaut" src="./images/indianaut.png" alt="" />
      <img className="indianaut" src="./images/rockguitarist.jpg" alt="" />
    </div>
  )
}

export default Categories