import React from 'react'

function CharactersPage({CharName, description, image, bg}) {
  
  const StyledBGContainer = bg;

  return (
    <StyledBGContainer>
        <div className="Shape">
          <img src={image} alt="Hitori Bocchi" /> 
        </div>
        <div className='Text'>
          <h2>{CharName}</h2>
          <p>{description}</p>
        </div>
    </StyledBGContainer>
  )
}

export default CharactersPage
