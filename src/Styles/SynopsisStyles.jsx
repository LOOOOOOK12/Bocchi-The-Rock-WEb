import React from 'react'
import styled from 'styled-components'

const SynopsisStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 5rem 3rem;
    background: #222222;

    .Swiper{
        height: 35rem;
        width: 25rem;
    }

    img{
        height: 100%;
        width: 100%;
    }

    .Text-1{
        display: flex;

        width: 40rem;
        line-height: 1.9rem;
        font-size: 1.4rem;
    }

    @media (max-width: 700px) {
            display: flex;
            flex-direction: column;

        .Swiper{
            height:100%;
        }

        .Text-1{
            height: 100%;
            width: 100%;
        }

        }

        @media (max-width: 510px) {
            .Swiper{
            width:15rem;
        }

        .Text-1{
            height: 100%;
            width: 100%;
            font-size: 1rem;
        }
        }
`

export default SynopsisStyles