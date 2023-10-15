import React from 'react'

function Song1({ name, cover, song, AlbumBgStyle }) {
  
  const StyledContainer = AlbumBgStyle;

  return (
    <StyledContainer>
        <div className="Container">
          <img src={cover} alt="album1" />
          <h2>{name}</h2>
          <audio  controls>
            <source src={song} type="audio/mpeg" />
          </audio>
        </div>
    </StyledContainer>
  )
}

export default Song1