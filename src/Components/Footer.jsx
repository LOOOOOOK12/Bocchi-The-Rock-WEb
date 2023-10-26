import React from 'react'
import FooterStyles from '../Styles/FooterStyles'
import FooterLogo from '../assets/Bocchi_the_Rock 21_English_Logo.png'

function Footer() {
  return (
    <FooterStyles>
      <div className='Container-1'>
        <div className='left-Container'>
          <img src={FooterLogo} />
        </div>
        <div className='right-Container'>
          <a href="#Home">Home</a>
          <a href="#Synopsis">Synopsis</a>
          <a href="#Characters">Characters</a>
          <a href="#Songs">Songs</a>
        </div>
      </div>
      <hr />
      <div className='Container-2'>
          <p>Made with Love by Luke Symon Alamil</p>
      </div>
    </FooterStyles>
  )
}

export default Footer