import BandChannel from "./BandChannels/BandChannel"
import BandsData from "./data/BandsData"


export default function App() {
  const channel = BandsData.map(item => {
    return (
      <BandChannel
        key={item.id}
        item={item}
       />
    )
  })
    
  

return (
       
        <div>
             <Navbar/>
            <section className="channel-component">
               {channel}
            </section>
            
        </div>
    )
}
