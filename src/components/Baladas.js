import BandsData2 from '../data/BandsData2'
import Card from './Card'
import Navbar from './Navbar'
import ButtonTreeCategories from './ButtonTreeCategories'

const bands2 = BandsData2.map((item) => {
  return <Card key={item.id} item={item} />
})

function Baladas() {
  return (
    <div>
      <Navbar />
      <h1 className="title2">Salsa para Bailar </h1>
      <h4 className="headertext">Escoje la Musica que te Gusta? ? </h4>

      <ButtonTreeCategories />
      <h1 className="slidertext">←←Desliza para Navegar→→</h1>
      <img className="indianaut" src="./images/indianaut.png" alt="" />
      <img className="indianaut2" src="./images/indianaut.png" alt="" />
      <section className="cards-list">{bands2}</section>
    </div>
  )
}

export default Baladas
