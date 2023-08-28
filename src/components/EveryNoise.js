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
      <a className="gigmeoutbutton" href="https://gigmeout.io/en/">
        <h6>
          <GiMusicalNotes />
          Gigmeout Social Media for Local Musicians
          <GiMusicalNotes />
        </h6>
      </a>
    </div>
  )
}

export default EveryNoise
