import React from 'react'

const Characters = ({charName, desc, image, CharBg}) => {

  const StyledChar = CharBg;

  return (
    <StyledChar>
        <div className="Shape">
          <img src={image} alt="Hitori Bocchi" /> 
        </div>
        <div className='Text'>
          <h2>{charName}</h2>
          <p>{desc}</p>
        </div>
    </StyledChar>
  )
}

export default Characters