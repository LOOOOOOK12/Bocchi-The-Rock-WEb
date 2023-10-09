import React from 'react'
import Song1Styles from '../../Styles/Song-Styles/Song1Styles'
import album1 from '../../assets/Album Cover/Seishun_Complex_Single_Cover_29 (1).png'

function Song1() {
  return (
    <Song1Styles>
      <div className="Container">
        <img src={album1} alt="" />
      </div>
    </Song1Styles>
  )
}

export default Song1