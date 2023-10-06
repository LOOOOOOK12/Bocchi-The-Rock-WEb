import React from 'react'
import styled from 'styled-components'

const RyoStyles = styled.div`
    height: 100vh;
    padding: 5rem 3rem;
    background: #141414;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .Profile{
        position: relative;
        height: 90%;
        border-radius: 70% 30% 70% 30% / 30% 48% 52% 70%   ;
        background: #4f4fff;
    }
    
    .Text{   
        margin: 0 1.5rem;
    }

    img{ 
        height: 100%;
    }

    @media (max-width: 700px) {
        
    }
`

export default RyoStyles