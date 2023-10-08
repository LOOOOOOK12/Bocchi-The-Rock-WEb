import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import SongStyles from '../Styles/SongsStyles'
import Pic from '../assets/Posters/Blu-ray_ 26_DVD_Volume_5.png'
import Album1 from '../assets/Album Cover/Seishun_Complex_Single_Cover_29 (1).png'
import 'swiper/css/autoplay'
import 'swiper/css';


function Songs() {

  return (
    <SongStyles id='Songs'>
      <Swiper
        modules={[Autoplay]}
        autoplay
        loop
        id='Container'
      >
        <SwiperSlide className = "slides" >
          <img src={Album1} alt="" className='Pic1'/>
        </SwiperSlide>
        <SwiperSlide className = "slides">
          <img src={Pic} alt="" className='Pic1'/>
        </SwiperSlide>
        <SwiperSlide className = "slides">
          <img src={Pic} alt="" className='Pic1'/>
        </SwiperSlide>
      </Swiper>
    </SongStyles>
  )
}

export default Songs