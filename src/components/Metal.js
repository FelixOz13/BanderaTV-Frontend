import { useState } from 'react'
import ButtonTreeCategories from './ButtonTreeCategories'
import CardData21 from '../data/CardData21'
import Card from './Card'
import Navbar from './Navbar'

function Metal() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredData = CardData21.filter((item) =>
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
      <h1 className="title2">Rock Metal</h1>
      <h4 className="headertext">Escoje la Musica que te Gusta?</h4>

      <ButtonTreeCategories />

      <img className="indianaut" src="./images/hangloose.jpg" alt="" />
      <img className="indianaut2" src="./images/hangloose.jpg" alt="" />
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

export default Metal
