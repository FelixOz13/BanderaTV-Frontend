import CardData16 from '../data/CardData16'
import Card from './Card'
import Navbar from './Navbar'

import ButtonTreeCategories from "./ButtonTreeCategories";


 const cards16 = CardData16.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 })

function Local() {
  return (
    <div>
      <Navbar/>
      <h1 className="title2">Grupos y Musicos Locales</h1>
      <h4 className="headertext">Escoje la Musica que te Gusta? ? </h4>
      
      <ButtonTreeCategories/>
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
      <img className="indianaut" src="./images/indianaut.png" alt=""/>
            <section className="cards-list">
               {cards16}
            </section>
            
        </div>
  )
}

export default Local