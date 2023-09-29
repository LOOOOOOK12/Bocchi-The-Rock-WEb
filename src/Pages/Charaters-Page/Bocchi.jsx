import React from 'react'
import BocchiPicture from "../../assets/Hitori_Gotoh_Character_Design_2.png"
import BocchiStyles from '../../Styles/Characters-Styles/BocchiStyles'

function Bocchi() {
  return (
    <BocchiStyles>
        <div className="Shape">
          <img src={BocchiPicture} alt="" /> 
        </div>
        <div className='Text'>
            <h1>Hitori Gotoh</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        
    </BocchiStyles>
  )
}

export default Bocchi