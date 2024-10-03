import { useState } from 'react'
import CardData15 from '../data/CardData15'
import Card from './Card'
import Navbar from './Navbar/Navbar';
import { Link } from 'react-router-dom';
import Particle from './Particle';


function Romantica() {
  const [searchQuery, setSearchQuery] = useState('')

  const generateRandomId = () => {
    return Math.random().toString(36).substring(2, 10)
  }

  const dataWithIds = CardData15.map((item) => ({
    ...item,
    id: generateRandomId(),
  }))

  const filteredData = dataWithIds.filter((item) =>
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
    <Particle id="particles"/>
      <Navbar />
      <h1 className="title2">Romanticas para Enamorar</h1>
     
      <h1 className="slidertext">←←Desliza para Navegar→→</h1>
      <div className="search-bar">
        <input
          className="searchbar"
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Busca por Nombre del Artista Aqui...🔍︎🔍︎🔍︎🔍︎"
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Link to='/categories'>
       <button style={{ fontSize: "1rem", width: '200px', fontFamily: 'Henny Penny', background: 'goldenrod', color: 'black', borderRadius: '10px', marginTop: '20px' }}>
           Escoje el Tipo de Musica
       </button>
      </Link>
      </div>
      <h1 className="slidertext">←←Desliza para Navegar→→</h1>
      <section className="cards-list">{cards}</section>
    </div>
  )
}

export default Romantica
