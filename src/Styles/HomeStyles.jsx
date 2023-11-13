import React from 'react'
import styled from 'styled-components'

const HomeStyles = styled.div`
    height: 100vh; 
    background-image: linear-gradient(rgba(0, 0, 0, 0.8),rgba(0,0,0,0.8)),url("src/assets/wallpaperflare.com_wallpaper (1).jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        height: 10rem;
    }

    @media (max-width: 700px) {
        img{
            height: 8rem;
        }
    }

    @media (max-width: 500px) {
        img{
            height: 5rem;
        }
    }

`

export default HomeStyles