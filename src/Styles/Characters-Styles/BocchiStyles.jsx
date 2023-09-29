import React from 'react'
import styled from 'styled-components'

const BocchiStyles = styled.div`
    height: 100vh;
    background: #323232;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
   

    .Shape{
        position: relative;
        height: 100%;
        border-radius: 46% 54% 46% 54% / 68% 48% 52% 32%   ;
        background: pink;
    }

    .Text{
        position: relative;
    }

    img{ 
        position: relative;
        height: 100%;
    }

    
`

export default BocchiStyles