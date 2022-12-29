import React from 'react'
import ButtonTreeCategories from "./ButtonTreeCategories";
import CardData13 from '../data/CardData13'
import Card from './Card'
import Navbar from './Navbar'


function Banda() {
   const cards13 = CardData13.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
                
                
                           
                        
            />
        )
    })
  return (
    <div>
          <Navbar />
          <h1 className="title2">Banda Instrumental</h1>
      <h4 className="headertext">Escoje tu categoria? ? </h4> 
     
           <ButtonTreeCategories/>
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
          <img className="indianaut" src="./images/aguiladorada.jpeg" alt="" />
           <img className="indianaut2" src="./images/aguiladorada.jpeg" alt="" />
            <div>
            <section className="cards-list">
               {cards13}
            </section>
            </div>
        </div>
  )
}

export default Banda