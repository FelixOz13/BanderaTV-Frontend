import Navbar from './Navbar'
import { useState } from 'react'
import SponsorContainer from './SponsorContainer'
import BandsData2 from '../data/BandsData2'
import ButtonTreeCategories from './ButtonTreeCategories'
import Card from './Card'

function Baladas() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredData = BandsData2.filter((item) =>
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
      <h1 className="title2">Salsa Para Bailar</h1>
      <h4 className="headertext">Escoje la Musica que te Gusta?</h4>

      <ButtonTreeCategories />

      <img className="indianaut" src="./images/bachattaart.jpg" alt="" />
      <img className="indianaut2" src="./images/bachattaart2.jpg" alt="" />
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

export default Baladas
