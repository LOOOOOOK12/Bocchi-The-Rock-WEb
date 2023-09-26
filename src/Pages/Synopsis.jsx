import React from 'react'
import SynopsisStyles from '../Styles/SynopsisStyles'
import poster from '../assets/wallpaperflare.com_wallpaper.jpg'

function Synopsis() {
  return (
    <SynopsisStyles id="Synopsis">
      <div className="Text-1">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis dignissimos aliquid quisquam soluta ratione possimus perspiciatis sapiente </p>
      </div>
        <div className='posters-Carousel'>
          <img src={poster} alt="poster" className='Poster-1'/>
        </div>
        <div className='Text-2'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis dignissimos aliquid quisquam soluta ratione possimus perspiciatis sapiente 
        </div>
    </SynopsisStyles>
  )
}

export default Synopsis