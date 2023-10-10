import React from 'react'
import Song4Styles from '../../Styles/Song-Styles/Song4Styles'
import album4 from '../../assets/Album Cover/Seiza_ni_Naretara_Digital_Cover_29.png'

function Song4() {
  return (
    <Song4Styles>
      <div className="Container">
          <img src={album4} alt="" />
          <h2>Seiza ni Naretara</h2>
          <audio  controls>
            <source src="src\assets\Audio\If I could be a constellation.mp3" type="audio/mpeg" />
          </audio>
      </div>
    </Song4Styles>
  )
}

export default Song4