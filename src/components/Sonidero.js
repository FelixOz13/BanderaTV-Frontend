import React from 'react'
import ButtonTreeCategories from "./ButtonTreeCategories";
import CardData26 from '../data/CardData26'
import Card from './Card'
import Navbar from './Navbar'


function Sonidero() {
   const cards26 = CardData26.map(item => {
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
          <h1 className="title2">Sonideros para Bailar </h1>
      <h4 className="headertext">Escoje la Musica que te Gusta? ? </h4> 
      
           <ButtonTreeCategories/>
      
      <img className="indianaut" src="./images/acordeon.png" alt="" />
          <img className="indianaut2" src="./images/guitarrita2.png" alt="" />
          <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
            <div>
            <section className="cards-list">
               {cards26}
            </section>
            </div>
        </div>
  )
}

export default Sonidero