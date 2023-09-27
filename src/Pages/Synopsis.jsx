import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import pic from "../assets/wallpaperflare.com_wallpaper.jpg"
import SynopsisStyles from '../Styles/SynopsisStyles'
import poster from '../assets/wallpaperflare.com_wallpaper.jpg'

function Synopsis() {
  return (
    <SynopsisStyles id="Synopsis">
      <div className="Text-1">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis dignissimos aliquid quisquam soluta ratione possimus perspiciatis sapiente </p>
      </div>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide><img src={pic} alt="" /></SwiperSlide>
            <SwiperSlide><img src={pic} alt="" /></SwiperSlide>
            <SwiperSlide><img src={pic} alt="" /></SwiperSlide>
            <SwiperSlide><img src={pic} alt="" /></SwiperSlide>
          </Swiper>
        <div className='Text-2'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis dignissimos aliquid quisquam soluta ratione possimus perspiciatis sapiente 
        </div>
    </SynopsisStyles>
  )
}

export default Synopsis