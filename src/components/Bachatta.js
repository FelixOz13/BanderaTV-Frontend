import React from 'react'
import ButtonTreeCategories from './ButtonTreeCategories'
import CardData27 from '../data/CardData27'
import Card from './Card'
import Navbar from './Navbar'

function Bachatta() {
  const cards = CardData27.map((item) => {
    return <Card key={item.id} item={item} />
  })
  return (
    <div>
      <Navbar />
      <h1 className="title2">Bachatta Suavecita </h1>
      <h4 className="headertext">Escoje la Musica que te Gusta? ? </h4>

      <ButtonTreeCategories />

      <img className="indianaut" src="./images/acordeon.png" alt="" />
      <img className="indianaut2" src="./images/guitarrita2.png" alt="" />
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
      <div>
        <section className="cards-list">{cards}</section>
      </div>
    </div>
  )
}

export default Bachatta
