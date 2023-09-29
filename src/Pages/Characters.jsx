import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CharactersStyles from '../Styles/CharactersStyles'
import Bocchi from './Charaters-Page/Bocchi';
import Kita from './Charaters-Page/Kita';
import Ryo from './Charaters-Page/Ryo';
import Nijika from './Charaters-Page/Nijika';


function Characters() {
  return (
    <CharactersStyles id='Characters'>
      <Swiper
        slidesPerView={1}
      >
        <SwiperSlide className='Bocchi'><Bocchi/></SwiperSlide>
        <SwiperSlide className='Kita'><Kita/></SwiperSlide>
        <SwiperSlide className='Ryo'><Ryo/></SwiperSlide>
        <SwiperSlide className='Nijika'><Nijika/></SwiperSlide>
      </Swiper>
    </CharactersStyles>
  )
}

export default Characters