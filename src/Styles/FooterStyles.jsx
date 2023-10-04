import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.div`
    height: 12rem;
    width: 100%;
    background-color: #ffff32;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #131313;
    
    .right-Container, a{
        display: flex;
        flex-direction: row;
        color: #131313;
        text-decoration: none;
        margin: 0 1rem;
    }

    @media (max-width: 465px) {
        flex-direction:column;
    }

    .right-Container{
        flex-direction: column;
    }

    a{
        flex-direction: column;
    }
`
export default FooterStyles