import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import SynopsisStyles from '../Styles/SynopsisStyles'
import { posters }  from '../Constants/Posters'

function Synopsis() {
  return (
      <SynopsisStyles id="Synopsis">
        <Swiper 
          className='Swiper'
          modules={[Autoplay]}
          autoplay = {{
            disableOnInteraction:false,
            delay: 3000
          }}
          loop
          >
            {posters.map((posters, idx) => (
            <SwiperSlide key={idx}>
              <img src={posters.poster} alt={posters.alt}/>
            </SwiperSlide>
          ))}  
        </Swiper>       
        <div className="Text-1">
          <p>Bocchi the Rock! is a band comedy 4-koma manga series written and illustrated by Aki Hamazi. 
            The manga series serialized in Manga Time Kirara MAX by Houbunsha since February 2018 issue and 
            collected five volumes in tankōbon format as of November 2022, and has an official translation 
            by Yen Press, which will debut on October 17, 2023.
          </p>
        </div>
      </SynopsisStyles>
  )
}

export default Synopsis