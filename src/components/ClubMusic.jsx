import CardData8 from '../data/CardData8'
import Card from './Card'
import Navbar from "./Navbar"
import ButtonTreeCategories from "./ButtonTreeCategories";


const cards8 = CardData8.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 }
    )

function Clubmusic() {
  
    return (
   <div>
            <Navbar />
            <h1 className="title2">Musica Electronica</h1>
            <h4 className="headertext">Escoje tu categoria? ? </h4>
            
            
         <ButtonTreeCategories/>
            <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
            <img className="indianaut" src="./images/indianaut.png" alt=""/>
            <section className="cards-list">
               {cards8}
            </section>
            
        </div>
  )
}

export default Clubmusic