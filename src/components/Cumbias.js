import CardData9 from '../data/CardData9'
import ButtonTreeCategories from "./ButtonTreeCategories";
import Card from './Card'
import Navbar from './Navbar'


 const cards9 = CardData9.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
      />
        )
 }) 
    
 
function Cumbias() {
  return (
    
      
        <div>
      <Navbar />
      <h1 className="title2">Cumbia pa Bailar</h1>
      <h4 className="headertext">Escoje la Musica que te Gusta? ? </h4>
      
      
       <ButtonTreeCategories/>
      <h1 className="slidertext">←←Desliza para Navegar→→</h1>
      <img className="indianaut2" src="./images/flyingsungod.jpg" alt="" />
      <img className="indianaut" src="./images/flyingsungod.jpg" alt="" />
     
     
            <section className="cards-list">
               {cards9}
            </section>
            
        </div>
    
  )
}

export default Cumbias