import CardData3 from '../data/CardData3'
import Card from '../components/Card'
import Navbar from "../components/Navbar"
import ButtonTreeCategories from "./ButtonTreeCategories";



  const cards3 = CardData3.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 }
    )
function RapTrap() {
  return (
    <div>
      <Navbar />
      <h1 className="title2">Rap  Trap y Hip-Hop</h1>
      <h4 className="headertext">Escoje tu categoria? ? </h4>
      
      <ButtonTreeCategories />
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
      <img className="indianaut" src="./images/indianaut.png" alt="" />
      <img className="indianaut2" src="./images/indianaut.png" alt="" />
      
            <section className="cards-list">
               {cards3}
            </section>
            
        </div>
  )
}

export default RapTrap