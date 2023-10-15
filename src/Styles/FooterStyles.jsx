import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.div`
    padding: 2rem 0;
    width: 100%;
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

    a{
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