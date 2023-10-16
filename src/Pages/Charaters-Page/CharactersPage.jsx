import React from 'react'

function CharactersPage({charName, desc, image, bg}) {
  
  const StyledBGContainer = bg;

  return (
    <StyledBGContainer>
        <div className="Shape">
          <img src={image} alt="Hitori Bocchi" /> 
        </div>
        <div className='Text'>
          <h2>{charName}</h2>
          <p>{desc}</p>
        </div>
    </StyledBGContainer>
  )
}

export default CharactersPage
