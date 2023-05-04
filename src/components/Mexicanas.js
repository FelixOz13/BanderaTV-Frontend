import CardData25 from '../data/CardData25'
import ButtonTreeCategories from "./ButtonTreeCategories";
import Card from './Card'
import Navbar from './Navbar'


 const cards25 = CardData25.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
      />
        )
 }) 
    
 
function Mexicanas() {
  return (
    
      
        <div>
      <Navbar />
      <h1 className="title2">Cantantes Exitosas</h1>
      <h4 className="headertext">Escoje la Musica que te Gusta? ? </h4>
      
      
       <ButtonTreeCategories/>
      <h1 className="slidertext">←←Desliza para Navegar→→</h1>
      <img className="indianaut2" src="./images/flyingsungod.jpg" alt="" />
      <img className="indianaut" src="./images/flyingsungod.jpg" alt="" />
     
     
            <section className="cards-list">
               {cards25}
            </section>
            
        </div>
    
  )
}

export default Mexicanas