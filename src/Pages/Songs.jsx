import React from 'react'
import SongStyles from '../Styles/SongsStyles'
import Pic from '../assets/Posters/Blu-ray_ 26_DVD_Volume_5.png'
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();

function Songs() {

  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <SongStyles id='Songs'>
      <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      navigation="true"
      pagination="true"
      autoplay = "true"
      data-swiper-autoplay="1000"
      id='Container'
      >
        <swiper-slide className = "slides" >
          <img src={Pic} alt="" className='Pic1'/>
        </swiper-slide>
        <swiper-slide className = "slides">
          <img src={Pic} alt="" className='Pic1'/>
        </swiper-slide>
        <swiper-slide className = "slides">
          <img src={Pic} alt="" className='Pic1'/>
        </swiper-slide>
      </swiper-container>
    </SongStyles>
  )
}

export default Songs