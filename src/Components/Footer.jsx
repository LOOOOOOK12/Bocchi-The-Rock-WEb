import React from 'react'
import FooterStyles from '../Styles/FooterStyles'
import FooterLogo from '../assets/Bocchi_the_Rock 21_English_Logo.png'
import { LinkIcons } from '../Constants/LinkIncons'


function Footer() {
  return (
    <FooterStyles>
      <div className='Container-1'>
        <div className='left-Container'>
          <a href="#Home"><img src={FooterLogo} /></a>
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
        <div className='Links'>
          {LinkIcons.map((LinkIcons,idx)=>(
              <a key={idx} href={LinkIcons.link} target = "_blank">
                <img src={LinkIcons.Logo} alt={LinkIcons.alt} />
              </a>
            
          ))}
        </div>
          <p className='Credits'>Made with 
            <span style={{ color: 'pink', marginRight:'3px'}} >♥</span>
            <span style={{ color: 'red', marginRight:'3px' }} >♥</span>
            <span style={{ color: 'blue', marginRight:'3px' }} >♥</span>
            <span style={{ color: 'yellow', marginRight:'3px' }} >♥</span>
            by Luke Symon Alamil</p>
      </div>
    </FooterStyles>
  )
}

export default Footer