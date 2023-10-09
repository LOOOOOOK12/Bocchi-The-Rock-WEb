import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import SongStyles from '../Styles/SongsStyles'
import Song1 from './Songs-Page/Song1';
import Song2 from './Songs-Page/Song2';
import Song3 from './Songs-Page/Song3';
import Song4 from './Songs-Page/Song4';
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
          <Song1/>
        </SwiperSlide>
        <SwiperSlide className = "slides">
          <Song2/>
        </SwiperSlide>
        <SwiperSlide className = "slides">
          <Song3/>
        </SwiperSlide>
        <SwiperSlide className = "slides">
          <Song4/>
        </SwiperSlide>
      </Swiper>
    </SongStyles>
  )
}

export default Songs