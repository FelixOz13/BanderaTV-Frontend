import React from 'react'
import ButtonTreeCategories from "./ButtonTreeCategories";
import CardData2 from '../data/CardData2'
import Card from './Card'
import Navbar from './Navbar'



export default function Mariachi() {
    const cards2 = CardData2.map(item => {
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
            <h1 className="title2">Musica Regional Mexicana</h1>
            <h4 className="headertext">Escoje tu categoria? ? </h4> 
            
           <ButtonTreeCategories/>
            <h1 className="slidertext">←←Desliza para Navegar→→</h1>
            <img className="indianaut" src="./images/aguiladorada.jpeg" alt="" />
            <img className="indianaut2" src="./images/aguiladorada.jpeg" alt="" />
            
            <div>
            <section className="cards-list">
               {cards2}
            </section>
            </div>
        </div>
    )
}
        