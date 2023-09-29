import React from 'react'
import styled from 'styled-components'

const SynopsisStyles = styled.div`
    height: 100vh; 
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem 4rem;
    background: red;
    position: relative;

    .synopsis-Content{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem 4rem;
        height: 100%;
        width: 90%;
        background: black;
    }

    img{
        height: 25rem;
        width: 100%;
    }

    .Swiper{
        width: 20rem;
    }
`

export default SynopsisStyles