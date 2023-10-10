import React from 'react'
import Song1Styles from '../../Styles/Song-Styles/Song1Styles'
import album1 from '../../assets/Album Cover/Seishun_Complex_Single_Cover_29 (1).png'

function Song1() {
  return (
    <Song1Styles>
        <div className="Container">
          <img src={album1} alt="" />
          <h2>Seisyun Complex</h2>
          <audio  controls>
            <source src="src\assets\Audio\seisyun complex.mp3" type="audio/mpeg" />
          </audio>
        </div>
    </Song1Styles>
  )
}

export default Song1