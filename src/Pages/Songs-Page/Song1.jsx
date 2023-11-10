import React, { useRef, useState } from 'react';

function Song1({ name, cover, alt, song, AlbumBgStyle, lyrics }) {
  const StyledContainer = AlbumBgStyle;

  

  return (
    <StyledContainer>
      <div className="Container">
        <div className='img-Container'>
          <img src={cover} alt={alt} />
        </div>
        <a href={lyrics} target="_blank"><h2>{name}</h2></a>
          <audio controls>
          <source src={song} type="audio/mpeg" />
        </audio>
      </div>
    </StyledContainer>
  );
}

export default Song1;

