    import React from 'react'
    import styled from 'styled-components'

    const NavStyles = styled.div`
            height: 28px;
            top: 0;
            z-index: 15;
            width: 90%;
            position: fixed;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            padding: 1rem 5%;
            transition: 0.5s;
        
        &.active {
            background: #2f2f2f;
        }
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