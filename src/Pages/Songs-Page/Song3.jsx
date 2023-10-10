import React from 'react'
import Song3Styles from '../../Styles/Song-Styles/Song3Styles'
import album3 from '../../assets/Album Cover/Wasurete_Yaranai_Digital_Cover_29.png'

function Song3() {
  return (
    <Song3Styles>
      <div className="Container">
          <img src={album3} alt="" />
          <h2>Wasurete Yaranai</h2>
          <audio  controls>
            <source src="src\assets\Audio\Never forget.mp3" type="audio/mpeg" />
          </audio>
      </div>
    </Song3Styles>
  )
}

export default Song3