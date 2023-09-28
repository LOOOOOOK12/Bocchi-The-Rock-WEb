import React from 'react'
import RyoPicture from "../../assets/Ryo_Yamada_Character_Design_2.png"
import RyoStyles from '../../Styles/Characters-Styles/RyoStyles'

function Ryo() {
  return (
    <RyoStyles>
        <div className='Profile'>
          <img src={RyoPicture} alt="" />
        </div>
        <div>
            <h1>Ryo Yamada</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </RyoStyles>
  )
}

export default Ryo