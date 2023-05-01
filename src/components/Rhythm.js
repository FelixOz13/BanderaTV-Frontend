import React from 'react'
import ButtonTreeCategories from "./ButtonTreeCategories";
import BandsData from '../data/BandsData'
import Card from './Card'
import Navbar from './Navbar'


function Rhythm() {
   const bands = BandsData.map(item => {
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
          <h1 className="title2">Rhythm and Blues </h1>
      <h4 className="headertext">Escoje la Musica que te Gusta? ? </h4> 
      
           <ButtonTreeCategories/>
      
      <img className="indianaut" src="./images/singin.png" alt="" />
          <img className="indianaut2" src="./images/singin.png" alt="" />
          <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
            <div>
            <section className="cards-list">
               {bands}
            </section>
            </div>
        </div>
  )
}

export default Rhythm