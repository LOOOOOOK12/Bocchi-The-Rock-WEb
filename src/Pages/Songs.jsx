import React, { useState, useEffect } from 'react';
import SongStyles from '../Styles/SongsStyles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import Song1 from './Songs-Page/Song1';
import { songs } from '../Constants/Songs';

function Songs() {
  const [pause, setPause] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide index

  // Add an event handler to track swiper slide change
  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  // Use useEffect to listen for changes in the current slide index
  useEffect(() => {
    // Check if 'pause' state is true and take appropriate action to pause the music
    if (pause) {
      // Add code here to pause the music (e.g., call a function to pause the music player)
      musicPlayer.pause();
    }
  }, [currentSlide, pause]);

  return (
    <SongStyles id="Songs">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay = {{
          disableOnInteraction:false,
          delay: 3000
        }}
        loop
        onSlideChange={handleSlideChange} // Add slide change event handler
        id="Container"
      >
        {songs.map((song, idx) => (
          <SwiperSlide key={idx}>
            <Song1
              name={song.SongName}
              cover={song.albumCover}
              song={song.song}
              AlbumBgStyle={song.albumBackGround}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SongStyles>
  );
}

export default Songs;
