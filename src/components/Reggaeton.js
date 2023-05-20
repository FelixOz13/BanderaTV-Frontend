import { useState } from 'react'
import CardData11 from '../data/CardData11'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import ButtonTreeCategories from './ButtonTreeCategories'

function Reaggaeton() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredData = CardData11.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const sortedData = [...filteredData].sort((a, b) => {
    if (a.title.toLowerCase().includes(searchQuery.toLowerCase())) return -1
    if (b.title.toLowerCase().includes(searchQuery.toLowerCase())) return 1
    return 0
  })

  const cards = sortedData.map((item) => <Card key={item.id} item={item} />)

  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <Navbar />
      <h1 className="title2">Reggaeton pa Rumbear</h1>
      <h4 className="headertext">Escoje la Musica que te Gusta?</h4>

      <ButtonTreeCategories />

      <img className="indianaut" src="./images/hangloose.jpg" alt="" />
      <img className="indianaut2" src="./images/hangloose.jpg" alt="" />
      <img className="indianaut2" src="./images/astronaut.png" alt="" />
      <img className="indianaut" src="./images/astronaut.png" alt="" />
      <img className="indianaut" src="./images/indianaut.png" alt="" />
      <img className="indianaut2" src="./images/indianaut.png" alt="" />
      <img className="indianaut2" src="./images/astronaut.png" alt="" />

      <div className="search-bar">
        <input
          className="searchbar"
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Busca por Nombre del Artista Aqui...🔍︎🔍︎🔍︎🔍︎"
        />
      </div>
      <h1 className="slidertext">←←Desliza para Navegar→→</h1>
      <section className="cards-list">{cards}</section>
    </div>
  )
}

export default Reaggaeton
