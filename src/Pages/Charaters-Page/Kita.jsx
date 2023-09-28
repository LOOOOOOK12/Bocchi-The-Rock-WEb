import React from 'react'
import KitaPicture from "../../assets/Ikuyo_Kita_Character_Design_2.png"
import KitaStyles from '../../Styles/Characters-Styles/KitaStyles'

function Kita() {
  return (
    <KitaStyles>
        <img src={KitaPicture} alt="" />
        <div>
        <h1>Kita Ikuyo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </KitaStyles>
  )
}

export default Kita