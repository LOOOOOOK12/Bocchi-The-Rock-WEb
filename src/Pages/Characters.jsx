import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import CharactersPage from "./Charaters-Page/CharactersPage"
import {characterProfiles} from "../Pages/Songs-Page/Characters"

import CharactersStyles from '../Styles/CharactersStyles'
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'

function Characters() {
  return (
    <CharactersStyles id='Characters'>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect={'fade'}
        loop
        autoplay
        id = "Container"
      >

        {characterProfiles.map((profiles, idx) => (
          <SwiperSlide key={idx}>
            <CharactersPage
              CharName={profiles.CharName} 
              image ={profiles.image} 
              description={profiles.description}
              bg={profiles.bg}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </CharactersStyles>
  )
}

export default Characters