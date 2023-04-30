import CardData14 from '../data/CardData14'
import Card from './Card'

import ButtonTreeCategories from "./ButtonTreeCategories";


 const cards14 = CardData14.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 })

function Chill() {
  return (
    <div>
      
      <h1 className="title2">Rock Alternativo</h1>
      <h4 className="headertext">Escoje tu categoria? ? </h4>
      
      <ButtonTreeCategories/>
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
      <img className="indianaut" src="./images/indianaut.png" alt=""/>
            <section className="cards-list">
               {cards14}
            </section>
            
        </div>
  )
}

export default Chill