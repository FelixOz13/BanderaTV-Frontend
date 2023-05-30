import React, { useState } from 'react'
import { FaShare } from 'react-icons/fa'

const ShareDialog = ({ imageUrl, item }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleShare = () => {
    const shareUrl = `${window.location.origin}`
    const message = `Te Invitamos a disfrutar de  Bandera Musical`

    // Use the sharing functionality of the specific social media platform
    // For example, you can use different libraries for sharing on Facebook, Twitter, etc.
    // Here, we're using a simple window.open() to simulate sharing

    // Example for Facebook sharing
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl,
    )}`
    window.open(facebookUrl)

    // Example for Twitter sharing
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      shareUrl,
    )}&text=${encodeURIComponent(message)}`
    window.open(twitterUrl)

    // Close the dialog after sharing
    setIsDialogOpen(false)
  }

  return (
    <div>
      <div className="share-dialog">
        <img src={imageUrl} />

        <a className="sharebutton1" onClick={handleShare}>
          <FaShare />
        </a>
      </div>
    </div>
  )
}

export default ShareDialog
