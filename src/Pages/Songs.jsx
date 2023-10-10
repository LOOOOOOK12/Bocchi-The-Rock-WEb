import React from 'react'
import SongStyles from '../Styles/SongsStyles'
import Song1 from './Songs-Page/Song1';
import Song2 from './Songs-Page/Song2';
import Song3 from './Songs-Page/Song3';
import Song4 from './Songs-Page/Song4';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'


function Songs() {

  return (
    <SongStyles id='Songs'>
      <Swiper
        modules={[Autoplay,EffectFade]}
        effect={'fade'}
        crossFade = 'true'
        autoplay
        loop
        id='Container'
      >
        <SwiperSlide>
          <Song1/>
        </SwiperSlide>
        <SwiperSlide>
          <Song2/>
        </SwiperSlide>
        <SwiperSlide>
          <Song3/>
        </SwiperSlide>
        <SwiperSlide>
          <Song4/>
        </SwiperSlide>
      </Swiper>
    </SongStyles>
  )
}

export default Songs