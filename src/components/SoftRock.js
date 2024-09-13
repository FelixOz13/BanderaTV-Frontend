import Navbar from './Navbar'
import { useState } from 'react'
import CardData37 from '../data/CardData37'
import ButtonTreeCategories from './ButtonTreeCategories'
import Card from './Card'


function SoftRock() {
  const [searchQuery, setSearchQuery] = useState('')

  const generateRandomId = () => {
    return Math.random().toString(36).substring(2, 10)
  }

  const dataWithIds = CardData37.map((item) => ({
    ...item,
    id: generateRandomId(),
  }))

  const filteredData = dataWithIds.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const sortedData = [...filteredData].sort((b, a) => {
    if (a.title.toLowerCase().includes(searchQuery.toLowerCase())) return -1
    if (b.title.toLowerCase().includes(searchQuery.toLowerCase())) return 1
    return 0
  })

  const cards = sortedData
    .reverse()
    .map((item) => <Card key={item.id} item={item} />)


  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  }

  


  return (
    <div>
      <Navbar />
      <h1 className="title2"> Soft Rock</h1>
      <h4 className="headertext">Escoje la Musica que te Gusta?</h4>

      <ButtonTreeCategories />

      <img className="indianaut" src="./images/astronaut.png" alt="" />
      <img className="indianaut2" src="./images/rockguitarist.jpg" alt="" />
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

export default SoftRock
