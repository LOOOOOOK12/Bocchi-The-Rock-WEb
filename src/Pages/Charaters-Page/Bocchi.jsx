import React from 'react'
import BocchiPicture from "../../assets/Characters/Hitori_Gotoh_Character_Design_2.png"
import BocchiStyles from '../../Styles/Characters-Styles/BocchiStyles'

function Bocchi() {
  return (
    <BocchiStyles>
        <div className="Shape">
          <img src={BocchiPicture} alt="Hitori Bocchi" /> 
        </div>
        <div className='Text'>
          <h2>Hitori Gotoh</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        
    </BocchiStyles>
  )
}

export default Bocchi