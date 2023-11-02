import React from 'react'

function Song1({ name, cover, alt, song, AlbumBgStyle }) {
  
  const StyledContainer = AlbumBgStyle;

  return (
    <StyledContainer>
        <div className="Container">
          <img src={cover} alt={alt} />
          <h2>{name}</h2>
          <audio  controls>
            <source src={song} type="audio/mpeg" />
          </audio>
        </div>
    </StyledContainer>
  )
}

export default Song1