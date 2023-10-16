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
    }

    a{
        color: #131313;
        text-decoration: none;
        margin: 0 1rem;
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
        }
    }


    
`
export default FooterStyles