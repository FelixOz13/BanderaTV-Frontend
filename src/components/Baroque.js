import React from 'react'
import ButtonTreeCategories from "./ButtonTreeCategories";
import CardData22 from '../data/CardData22'
import Card from './Card'
import Navbar from './Navbar'


function Baroque() {
   const cards22 = CardData22.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
                
                
                           
                        
            />
        )
    })  
  return (
    <div>
          <Navbar/>
          <h1 className="title2">Baroque y Musica Classica </h1>
      <h4 className="headertext">Escoje la Musica que te Gusta? ? </h4> 
      
           <ButtonTreeCategories/>
      
      <img className="indianaut" src="./images/violin.png" alt="" />
          <img className="indianaut2" src="./images/piano.png" alt="" />
          <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
            <div>
            <section className="cards-list">
               {cards22}
            </section>
            </div>
        </div>
  )
}

export default Baroque