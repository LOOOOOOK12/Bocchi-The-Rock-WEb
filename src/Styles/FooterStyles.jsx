import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.div`
    padding: 2rem 1.5rem;
    background-color: #ffff32;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #131313;

    .Container-1{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
    }

    .right-Container{
        display: flex;
        font-weight: 700;
    }

    hr{
        width: 100%;
        border: 1px solid #1c1c1c;
    }

    a{
        color: #131313;
        text-decoration: none;
        margin: 0 1rem;
    }

    img{
        height: 5rem;
    }

    @media (max-width: 465px) {
        flex-direction:column;
    }

    @media (max-width: 700px) {
        .Container-1{
            flex-direction: column;
        }
    }
    @media (max-width: 375px) {
        .right-Container{
            flex-direction: column;
            gap:1rem;
        }
    }


    
`
export default FooterStyles