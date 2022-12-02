import { Link } from 'react-router-dom'


function ButtonTreeChannels(props) {
  return (
    <div>
    <div className="channelcontainer">
        <Link className="btn" to={props.item.bandera}>
           <img src={`../images/${props.item.coverImg}`} className="channels" alt="" media="(max-width: 400px)" />
            <h6 className="channelcardtitle">{props.item.title}</h6>
            
      </Link> 
      </div>
      </div>
  )
}

export default ButtonTreeChannels