import Navbar from "./Navbar"
import SponsorContainer from "./SponsorContainer"
import BandsData from '../data/BandsData'
import ButtonTreeCategories from "./ButtonTreeCategories";
import Card from "./Card"



const cards = BandsData.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 }
    )

function Artists() {
  return (
    <div>
      <Navbar/>
      <h4 className="headertext">Escoje tu categoria? ? </h4>
      
      <ButtonTreeCategories />
      <h1 className="slidertext">←←Desliza para Navegar→→</h1>
      <img className="indianaut" src="./images/indianaut.png" alt="" />
      <img className="indianaut2" src="./images/indianaut.png" alt=""/>
      <section className="cards-list">
               {cards}
        </section>
     <SponsorContainer/>
    </div>
  )
}

export default Artists