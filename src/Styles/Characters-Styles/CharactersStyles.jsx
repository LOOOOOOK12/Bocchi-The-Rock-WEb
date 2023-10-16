import React from 'react'
import styled from 'styled-components'

const CharactersStyles = styled.div`
    height: 100%;
    width: 100%;
    background: #1d1d1d;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .Shape{
        height: 90%;
        border-radius: 46% 54% 46% 54% / 68% 48% 52% 32%   ;
        background: #ffa1b1;
    }

    .Text{
        display: flex;
        flex-direction: column;
        margin: 0 1.5rem;
    }

    img{ 
        height: 100%;
    }

    @media (max-width: 700px) {
        
    }

`
export default CharactersStyles