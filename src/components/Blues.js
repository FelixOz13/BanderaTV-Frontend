import CardData18 from '../data/CardData18'
import Card from './Card'
import Navbar from './Navbar'

import ButtonTreeCategories from "./ButtonTreeCategories";


 const cards18 = CardData18.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 })

function Blues() {
  return (
    <div>
      <Navbar/>
      <h1 className="title2">Blues Classicos</h1>
      <h4 className="headertext">Escoje la Musica que te Gusta? ? </h4>
      
      <ButtonTreeCategories/>
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
      <img className="indianaut" src="./images/harmonica.jpg" alt="" />
      <img className="indianaut2" src="./images/harmonica.jpg" alt=""/>
            <section className="cards-list">
               {cards18}
            </section>
            
        </div>
  )
}

export default Blues