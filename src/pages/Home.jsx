import Card from '../components/Card'
import CardData from '../data/CardData'
import '../index.css'


function Home() {
  const cards = CardData.map((item) => <Card key={item.id} item={item} />)

  return (
    <section>
      <div>
        <h3 className="dezlisante">←←Desliza para ver Galeria→→</h3>
      </div>
      <div className="scroll-container">
        <div className="scroll-item">
          <section className="cards-list">{cards}</section>
        </div>
      </div>
     
     
    </section>
  )
}

export default Home
