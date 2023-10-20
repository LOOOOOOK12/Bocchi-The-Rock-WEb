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
            
        img{
            height: 2rem;
        }

        @media (max-width: 763px) {
            ul{
                display: none;
            }
        }

    `

    export default NavStyles