import React from 'react'
import styled from 'styled-components'

const NavStyles = styled.div
`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    height: 50px;
    z-index: 15;
    
    img{
        height: 3rem;
    }

    li,a {
        color: white;
        font-weight: bold;
        font-size: 1rem;
        text-decoration: none;
    }

    ul li{
        cursor: pointer;
        list-style: none;
        display: inline-block;
        padding-left: 30px;
    }
    
`

export default NavStyles