import React from 'react'
import styled from 'styled-components'

const BocchiStyles = styled.div`
    height: 100vh;
    width: 100%;
    background: #141414;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .Shape{
        height: 100%;
        border-radius: 46% 54% 46% 54% / 68% 48% 52% 32%   ;
        background: #ffa1b1;
    }

    .Text{
        
        margin: 3rem;
    }

    img{ 
        height: 100%;
    }

    
`

export default BocchiStyles