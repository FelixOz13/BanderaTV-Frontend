import React from 'react'

function Spinner() {
  return (
    <div className="spinner">
      <img
        src="./images/spinner.gif"
        alt="Loading..."
        style={{ maxWidth: '375px', maxHeight: '160px' }}
      />
    </div>
  )
}

export default Spinner
