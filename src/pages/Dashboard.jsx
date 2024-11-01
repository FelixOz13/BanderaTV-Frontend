import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import CommentBox from '../CommentsComponents/CommentBox'


function Dashboard() {
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('./login')
      return
    }
  })

  return (
    <div>
      <video
        className="player-wrapper-3"
        width="100%"
        height="100%"
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
      >
        <source src="./videos/MexMusicNet.mp4" type="video/mp4" />
      </video>
      <img className="indianaut" src="./images/indianaut.png" alt="" />
      <img className="indianaut2" src="./images/indianaut.png" alt="" />
      <CommentBox />
    </div>
  )
}

export default Dashboard
