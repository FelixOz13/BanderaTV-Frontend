import React from 'react'
import { FaShare } from 'react-icons/fa'

const ShareDialog = ({ item }) => {
 

  const handleShare = () => {
    const shareUrl = `${window.location.origin}`
    const message = `Te Invitamos a disfrutar de Bandera Musical`

    const imageUrl = `${window.location.origin}/flyingsungod.jpg`
    const shareContent = `${message}\n\n${imageUrl}`

    if (navigator.share) {
      navigator
        .share({ title: document.title, text: shareContent, url: shareUrl })
        .then(() => console.log('Share successful'))
        .catch((error) => console.error('Error sharing:', error))
    } else {
      console.warn('Web Share API not supported')
    }
  }

  return (
    <div>
      <div className="share-dialog">
        <button className="sharebutton1" onClick={handleShare}>
          <FaShare />
        </button>
      </div>
    </div>
  )
}

export default ShareDialog
