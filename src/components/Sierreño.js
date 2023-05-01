import React from 'react'
import ButtonTreeCategories from "./ButtonTreeCategories";
import CardData from '../data/CardData'
import Card from './Card'
import Navbar from './Navbar'


function Sierreño() {
   const cards = CardData.map(item => {
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
          <h1 className="title2">Sierreños con Corridos </h1>
      <h4 className="headertext">Escoje la Musica que te Gusta? ? </h4> 
      
           <ButtonTreeCategories/>
      
      <img className="indianaut" src="./images/acordeon.png" alt="" />
          <img className="indianaut2" src="./images/guitarrita2.png" alt="" />
          <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
            <div>
            <section className="cards-list">
               {cards}
            </section>
            </div>
        </div>
  )
}

export default Sierreño