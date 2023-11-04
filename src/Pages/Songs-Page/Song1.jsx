import React, { useRef, useState } from 'react';

function Song1({ name, cover, alt, song, AlbumBgStyle, lyrics }) {
  const StyledContainer = AlbumBgStyle;

  // Create a ref to hold the audio element
  const audioRef = useRef(null);

  // State to track which audio is currently playing
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to stop the currently playing audio
  const stopCurrentAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  // Function to handle the play event on the audio element
  const handlePlay = () => {
    // Stop the currently playing audio if another audio is played
    stopCurrentAudio();
    setIsPlaying(true);
  };

  return (
    <StyledContainer>
      <div className="Container">
        <div className='img-Container'>
          <img src={cover} alt={alt} />
        </div>
        <a href={lyrics} target="_blank"><h2>{name}</h2></a>
          <audio controls ref={audioRef} onPlay={handlePlay}>
          <source src={song} type="audio/mpeg" />
        </audio>
      </div>
    </StyledContainer>
  );
}

export default Song1;

