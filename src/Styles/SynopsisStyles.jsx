import React from 'react'
import styled from 'styled-components'

const SynopsisStyles = styled.div`
    height: 100vh; 
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem 4rem;
    background-image: url("src/assets/Site-community-image.png");
    background-size: cover;
    background-attachment: fixed;
    position: relative;

    .synopsis-Content{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem 4rem;
        height: 100%;
        width: 90%;
        background: #1f1f1f;
    }

    img{
        height: 30rem;
        width: 100%;
    }

    .Swiper{
        width: 25rem;
    }

    @media (max-width: 700px) {

    }
`

export default SynopsisStyles