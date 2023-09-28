import React from 'react'
import styled from 'styled-components'

const HomeStyles = styled.div`
    height: 100vh; 
    background-image: linear-gradient(rgba(0, 0, 0, 0.7),rgba(0,0,0,0.7)),url("src/assets/wallpaperflare.com_wallpaper (1).jpg");
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        height: 13rem;
        transform: rotate(-13deg);
    }

    @media (max-width: 700px) {
        img{
            height: 20rem;
        }
    }

    @media (max-width: 500px) {
        img{
            height: 16rem;
        }
    }

`

export default HomeStyles