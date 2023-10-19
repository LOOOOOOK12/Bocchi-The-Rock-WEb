import React from 'react'
import FooterStyles from '../Styles/FooterStyles'

function Footer() {
  return (
    <FooterStyles>
      <div className='Container-1'>
        <div className='left-Container'>
          <h2>Bocchi the Rock Website</h2>
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