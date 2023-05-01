import CardData14 from '../data/CardData14'
import Card from './Card'
import Navbar from './Navbar'

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
       <Navbar />
      <h1 className="title2">Musica Chill y Ambental</h1>
      <h4 className="headertext">Escoje la Musica que te Gusta? ? </h4>
      
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