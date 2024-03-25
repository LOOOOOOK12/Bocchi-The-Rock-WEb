import SongStyles from '../Styles/SongsStyles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import Song1 from './Songs-Page/Song1';
import { songs } from '../Constants/Songs';

function Songs() {

  return (
    <div className='h-[120vh] flex items-center justify-center' id="Songs">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay = {{
          disableOnInteraction:false,
          delay: 5000
        }}
        loop
        className='h-full w-full'
      >
        {songs.map((song, idx) => (
          <SwiperSlide key={idx}>
            <Song1
              name={song.SongName}
              cover={song.albumCover}
              song={song.song}
              albumBackGround={song.albumBackGround}
              lyrics={song.lyrics}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Songs;
