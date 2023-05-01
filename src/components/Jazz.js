import CardData19 from '../data/CardData19'
import Card from './Card'
import Navbar from './Navbar'

import ButtonTreeCategories from "./ButtonTreeCategories";


 const cards19 = CardData19.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 })

function Jazz() {
  return (
    <div>
      <Navbar/>
      <h1 className="title2">Jazz Classico</h1>
      <h4 className="headertext">Escoje la Musica que te Gusta? ?</h4>
      
      <ButtonTreeCategories/>
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
      <img className="indianaut" src="./images/jazzyjeff.jpg" alt=""/>
            <section className="cards-list">
               {cards19}
            </section>
            
        </div>
  )
}

export default Jazz