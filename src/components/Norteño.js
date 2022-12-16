import React from 'react'
import ButtonTreeCategories from "./ButtonTreeCategories";
import CardData12 from '../data/CardData12'
import Card from './Card'
import Navbar from './Navbar'

function Norteño() {
   const cards12 = CardData12.map(item => {
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
          <h1 className="title2">Musica Norteña</h1>
      <h4 className="headertext">Escoje tu categoria? ? </h4> 
      
           <ButtonTreeCategories/>
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
      <img className="indianaut" src="./images/aguiladorada.jpeg" alt="" />
      <img className="indianaut2" src="./images/aguiladorada.jpeg" alt="" />
            <img className="santanaut" src="./images/sley.jpg" alt="" />
            <div>
            <section className="cards-list">
               {cards12}
            </section>
            </div>
        </div>
  )
}

export default Norteño