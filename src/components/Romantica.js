import CardData15 from '../data/CardData15'
import Card from './Card'

import ButtonTreeCategories from "./ButtonTreeCategories";


 const cards15 = CardData15.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 })

function Romantica() {
  return (
    <div>
      
      <h1 className="title2">Musica Romantica</h1>
      <h4 className="headertext">Escoje la Musica que te Gusta? ? </h4>
      
      <ButtonTreeCategories/>
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
      <img className="indianaut" src="./images/indianaut.png" alt=""/>
            <section className="cards-list">
               {cards15}
            </section>
            
        </div>
  )
}

export default Romantica