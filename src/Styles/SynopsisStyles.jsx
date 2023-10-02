import React from 'react'
import styled from 'styled-components'

const SynopsisStyles = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem 4rem;
    background: #222222;
    gap: 3rem;

    .Swiper{
        height: 85%;
        width: 25rem;
    }

    img{
        height: 100%;
        width: 100%;
    }

    .Text-1{
        width: 50%;
        line-height: 1.5rem;
    }

    @media (max-width: 700px) {
            display: flex;
            flex-direction: column;
        }
`

export default SynopsisStyles