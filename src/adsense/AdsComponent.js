import React, { Component } from 'react'

class AdsComponent extends Component {
  componentDidMount() {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }

  render() {
    return (
      <div>
        <ins
          className="adsbygoogle"
          style={{ display: 'inline-block', width: '128px', height: '90px' }}
          data-ad-client="ca-pub-8200185917592188"
          data-ad-slot="42837282224"
        ></ins>
      </div>
    )
  }
}

export default AdsComponent
