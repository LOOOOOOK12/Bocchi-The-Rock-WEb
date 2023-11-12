import React from 'react'
import BandStyles from '../Styles/BandStyles'
import BG from '../assets/Video/BG.mp4'

function Band() {
    return (
        <BandStyles>
            <video autoPlay loop muted playsInline className='bg-Video'>
                <source src={BG} type="video/mp4" />
            </video>
            <h1>Meet The Band!!</h1>
            
        </BandStyles>
    )
}

export default Band