import React from 'react'
import styled from 'styled-components'

const SynopsisStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 5rem 3rem;
    background: #222222;
    gap: 2.5rem;

    .Swiper{
        height: 38rem;
        width: 25rem;
    }

    img{
        height: 100%;
        width: 100%;
    }

    .Text-1{
        color: #e1e1e1;
        display: flex;
        text-align: left;
        width: 33rem;
        margin-right: 4rem;
        line-height: 1.9rem;
        font-size: 1.2rem;
    }

    @media (max-width: 700px) {
            display: flex;
            flex-direction: column;

        .Swiper{
            height:30rem;
            width: 20rem;
        }

        img{
            height: 100%;
        }

        .Text-1{
            height: 100%;
            width: 100%;
        }

        }

        @media (max-width: 510px) {
            .Swiper{
            height:27rem;
            width: 20rem;
        }

        img{
            height: 100%;
        }

        .Text-1{
            height: 100%;
            width: 100%;
            font-size: 1rem;
        }
        }

        @media (max-width: 425px) {
            .Swiper{
            width: 16rem;
        }

        }
`

export default SynopsisStyles