import React from 'react'
import Song2Styles from '../../Styles/Song-Styles/Song2Styles'
import album2 from '../../assets/Album Cover/Ano_Band_Digital_Cover_29.png'

function Song2() {
  return (
    <Song2Styles>
      <div className="Container">
          <img src={album2} alt="" />
          <h2>Ano Band</h2>
          <audio  controls>
            <source src="src\assets\Audio\That band.mp3" type="audio/mpeg" />
          </audio>
      </div>
    </Song2Styles>
  )
}

export default Song2