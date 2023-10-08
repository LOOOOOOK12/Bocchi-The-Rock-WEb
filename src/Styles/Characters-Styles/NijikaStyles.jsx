import React from 'react'
import styled from 'styled-components'

const NijikaStyles = styled.div`
    height: 100%;
    width: 100%;
    background: #141414;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .Profile{
        position: relative;
        height: 90%;
        border-radius: 53% 47% 35% 65% / 50% 28% 72% 50% ;
        background: #ffff70;
    }

    .Text{
        
        margin: 3rem;
    }

    img{ 
        height: 100%;
    }

    @media (max-width: 700px) {
        
    }

`
export default NijikaStyles