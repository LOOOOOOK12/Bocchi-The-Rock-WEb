import React from 'react'
import NijikaPicture from "../../assets/Nijika_Ijichi_Character_Design_2.png"
import NijikaStyles from '../../Styles/Characters-Styles/NijikaStyles'

function Nijika() {
  return (
    <NijikaStyles>
        <div className='Profile'>
          <img src={NijikaPicture} alt="Nijika Ichiji" />
        </div>
        <div className='Text'> 
            <h1>Nijika Ichiji</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </NijikaStyles>
  )
}

export default Nijika