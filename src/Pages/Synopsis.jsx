import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SynopsisStyles from '../Styles/SynopsisStyles'
import Poster1 from "../assets/Posters/Bocchi_the_Rock 21_Anime_Main_Key_Visual.png"
import Poster2 from "../assets/Posters/Blu-ray_ 26_DVD_Volume_5.png"
import Poster3 from "../assets/Posters/Blu-ray_ 26_DVD_Volume_6.png"
import Poster4 from "../assets/Posters/Bocchi_the_Rock 21_Theater_Compilation_Key_Visual.png"


function Synopsis() {
  return (
      <SynopsisStyles id="Synopsis">
        <Swiper 
          className='Swiper'
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          >
          <SwiperSlide><img src={Poster1} alt="BTR Key Visuals-1" /></SwiperSlide>
          <SwiperSlide><img src={Poster2} alt="BTR Key Visuals-2" /></SwiperSlide>
          <SwiperSlide><img src={Poster3} alt="BTR Key Visuals-3" /></SwiperSlide>
          <SwiperSlide><img src={Poster4} alt="BTR Key Visuals-4" /></SwiperSlide>
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