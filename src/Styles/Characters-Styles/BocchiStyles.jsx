import React from 'react'
import styled from 'styled-components'

const BocchiStyles = styled.div`
    height: 100vh;
    width: 100%;
    padding: 5rem 3rem;
    background: #141414;
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

export default BocchiStyles