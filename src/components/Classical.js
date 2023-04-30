import React from 'react'
import ButtonTreeCategories from "./ButtonTreeCategories";
import CardData20 from '../data/CardData20'
import Card from './Card'


function Classical() {
   const cards20 = CardData20.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
                
                
                           
                        
            />
        )
    })  
  return (
    <div>
          
          <h1 className="title2">Epoca de Oro</h1>
      <h4 className="headertext">Escoje la Musica que te Gusta? ? </h4> 
      
           <ButtonTreeCategories/>
      
      <img className="indianaut" src="./images/aguiladorada.jpeg" alt="" />
          <img className="indianaut2" src="./images/aguiladorada.jpeg" alt="" />
          <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
            <div>
            <section className="cards-list">
               {cards20}
            </section>
            </div>
        </div>
  )
}

export default Classical