import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules'
import CharactersStyles from '../Styles/CharactersStyles'
import Bocchi from './Charaters-Page/Bocchi';
import Kita from './Charaters-Page/Kita';
import Ryo from './Charaters-Page/Ryo';
import Nijika from './Charaters-Page/Nijika';
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
function Characters() {

  return (
    <CharactersStyles id='Characters'>
      <Swiper
        modules={[ EffectFade, Autoplay]}
        effect={'fade'}
        loop
        autoplay
        id = "Container"
    >
      <SwiperSlide><Bocchi/></SwiperSlide>
      <SwiperSlide><Kita/></SwiperSlide>
      <SwiperSlide><Ryo/></SwiperSlide>
      <SwiperSlide><Nijika/></SwiperSlide>
    </Swiper>
    </CharactersStyles>
  )
}

export default Characters