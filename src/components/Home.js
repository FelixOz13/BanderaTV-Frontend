import React from 'react'
import Navbar from "./Navbar"
import BandsData from "../data/BandsData"
import SponsorContainer from "./SponsorContainer"
import ButtonTreeCategories from "./ButtonTreeCategories";
import Card from "./Card"



function Home() {

   const cards = BandsData.map(item => {
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
      <h4 className="headertext"> Hola Paisano, Bienvenido a Bandera Musical!!!, Escoje el tipo de musica que mas te gusta`???</h4>
      <ButtonTreeCategories/>
      <div className="hero">
        <h4 className="headertext"> Tal vez prefieras un Arista en Especial`???</h4>
        <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
        <img className="indianaut" src="./images/indianaut.png" alt="" />
        <div>
          <section className="cards-list">
               {cards}
        </section>
        </div>
      
        <SponsorContainer/>
       
        </div>
       
       </div>
      
  )
}


export default Home