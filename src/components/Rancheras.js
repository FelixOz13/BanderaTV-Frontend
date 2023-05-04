import React from 'react'
import ButtonTreeCategories from "./ButtonTreeCategories";
import CardData24 from '../data/CardData24'
import Card from './Card'
import Navbar from './Navbar'


function Rancheras() {
   const cards24 = CardData24.map(item => {
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
          <h1 className="title2">Rancheras Mexicanas</h1>
      <h4 className="headertext">Escoje la Musica que te Gusta? ? </h4> 
      
           <ButtonTreeCategories/>
      
      <img className="indianaut" src="./images/hangloose.jpg" alt="" />
          <img className="indianaut2" src="./images/hangloose.jpg" alt="" />
          <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
            <div>
            <section className="cards-list">
               {cards24}
            </section>
            </div>
        </div>
  )
}

export default Rancheras