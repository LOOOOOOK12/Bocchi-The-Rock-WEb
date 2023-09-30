import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import pic from "../assets/wallpaperflare.com_wallpaper.jpg"
import SynopsisStyles from '../Styles/SynopsisStyles'
import Poster1 from "../assets/Bocchi_the_Rock 21_Anime_Main_Key_Visual.png"

function Synopsis() {
  return (
      <SynopsisStyles id="Synopsis">
        <div className='synopsis-Content'>
          <div className="Text-1">
            <p>Bocchi the Rock! is a band comedy 4-koma manga series written and illustrated by Aki Hamazi. 
              The manga series serialized in Manga Time Kirara MAX by Houbunsha since February 2018 issue and 
              collected five volumes in tankōbon format as of November 2022, and has an official translation 
              by Yen Press, which will debut on October 17, 2023.</p>
          </div>
          <div className="Swiper">
            <Swiper 
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide><img src={Poster1} alt="BTR Key Visuals" /></SwiperSlide>
                <SwiperSlide><img src={pic} alt="" /></SwiperSlide>
                <SwiperSlide><img src={pic} alt="" /></SwiperSlide>
                <SwiperSlide><img src={pic} alt="" /></SwiperSlide>
            </Swiper>
          </div>
            <div className='Text-2'>
            In this story, Hitori Gotoh is a high school girl who's starting to learn to play the guitar because she 
            dreams of being in a band, but she's so shy that she hasn't made a single friend. However, her dream 
            might come true after she meets Nijika Ijichi, a girl who plays drums and is looking for a new guitarist 
            for her band.
            </div>
        </div>
      </SynopsisStyles>
  )
}

export default Synopsis