import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import pic from "../assets/wallpaperflare.com_wallpaper.jpg"
import SynopsisStyles from '../Styles/SynopsisStyles'
import Poster1 from "../assets/Posters/Bocchi_the_Rock 21_Anime_Main_Key_Visual.png"
import Poster2 from "../assets/Posters/Blu-ray_ 26_DVD_Volume_5.png"
import Poster3 from "../assets/Posters/Blu-ray_ 26_DVD_Volume_6.png"
import Poster4 from "../assets/Posters/Bocchi_the_Rock 21_Theater_Compilation_Key_Visual.png"


function Synopsis() {
  return (
      <SynopsisStyles id="Synopsis">
        <div className='synopsis-Content'>
          <div className="Swiper">
            <Swiper 
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide><img src={Poster1} alt="BTR Key Visuals" /></SwiperSlide>
                <SwiperSlide><img src={Poster2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Poster3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Poster4} alt="" /></SwiperSlide>
            </Swiper>
          </div>
          <div className="Text-1">
            <p>Bocchi the Rock! is a band comedy 4-koma manga series written and illustrated by Aki Hamazi. 
              The manga series serialized in Manga Time Kirara MAX by Houbunsha since February 2018 issue and 
              collected five volumes in tankōbon format as of November 2022, and has an official translation 
              by Yen Press, which will debut on October 17, 2023.</p>
          </div>
        </div>
      </SynopsisStyles>
  )
}

export default Synopsis