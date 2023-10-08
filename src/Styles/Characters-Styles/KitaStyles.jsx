import React from 'react'
import styled from 'styled-components'

const KitaStyles = styled.div`
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
        border-radius: 53% 47% 59% 41% / 59% 22% 78% 41%;
        background: #ff3737;
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
export default KitaStyles