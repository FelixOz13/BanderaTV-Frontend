import { GiMusicalNotes } from 'react-icons/gi'

function EveryNoise() {
  return (
    <div className="socios">
      <h5>"Socios en Colaboración"</h5>
      <h6>Enlaces</h6>
      <a className="everynoisebutton" href="https://everynoise.com/">
        <h6>
          <GiMusicalNotes />
          Every Noise Music Station
          <GiMusicalNotes />
        </h6>
      </a>
      <a href="https://gigmeout.io/en/" target="_blank" rel="noreferrer">
        <img
          src="../images/gigmeout.jpg"
          className="gigmeoutbutton"
          alt=""
          media="(max-width: 400px)"
        />
      </a>
    </div>
  )
}

export default EveryNoise
