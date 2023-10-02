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
    /* background-image: url("src/assets/Site-community-image.png");
    background-size: cover;
    background-attachment: fixed; */
    

    img{
        height: 30rem;
        width: 100%;
    }

    .Swiper{
        width: 20rem;
    }

    .Text-1{
        line-height: 1.3rem;
    }

    @media (max-width: 700px) {
        #Synopsis{
            display: flex;
            flex-direction: column;
        }
    }
`

export default SynopsisStyles