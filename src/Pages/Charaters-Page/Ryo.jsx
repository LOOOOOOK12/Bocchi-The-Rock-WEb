import React from 'react'
import RyoPicture from "../../assets/Characters/Ryo_Yamada_Character_Design_2.png"
import RyoStyles from '../../Styles/Characters-Styles/RyoStyles'

function Ryo() {
  return (
    <RyoStyles>
        <div className='Profile'>
          <img src={RyoPicture} alt="Ryo Yamada" />
        </div>
        <div className='Text'>
          <h2>Ryo Yamada</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </RyoStyles>
  )
}

export default Ryo