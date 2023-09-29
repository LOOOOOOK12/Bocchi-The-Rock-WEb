import React from 'react'
import styled from 'styled-components'

const RyoStyles = styled.div`
    height: 100vh;
    background: #323232;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .Profile{
        position: relative;
        height: 100%;
        border-radius: 70% 30% 70% 30% / 30% 48% 52% 70%   ;
        background: blue;
    }
    
    img{
        height: 100%;
    }
`

export default RyoStyles