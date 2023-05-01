import CardData17 from '../data/CardData17'
import Card from './Card'
import Navbar from './Navbar'
import ButtonTreeCategories from "./ButtonTreeCategories";


 const cards17 = CardData17.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 })

function Events() {
  return (
    <div>
      <Navbar/>
      <h1 className="title2">Eventos en Mexico</h1>
      <h4 className="headertext">Escoje la Musica que te Gusta? ? </h4>
      
      <ButtonTreeCategories/>
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
      <img className="indianaut" src="./images/tickets.jpg" alt="" />
      <img className="indianaut2" src="./images/ticket.jpg" alt=""/>
            <section className="cards-list">
               {cards17}
            </section>
            
        </div>
  )
}

export default Events