import React from 'react'
import FooterStyles from '../Styles/FooterStyles'

function Footer() {
  return (
    <FooterStyles>
        <div className='left-Container'>
          <h2>Bocchi the Rock Website</h2>
        </div>
        <div className='right-Container'>
          <a href="#Home">Home</a>
          <a href="#Synopsis">Synopsis</a>
          <a href="#Characters">Characters</a>
          <a href="#Songs">Songs</a>
        </div>
    </FooterStyles>
  )
}

export default Footer