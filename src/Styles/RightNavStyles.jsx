import styled from "styled-components";
import React from "react";


const RightNavStyles = styled.div`
        display: flex;
        flex-flow: row nowrap;
        list-style: none;

    li,a {
        color: white;
        font-weight: bold;
        font-size: 1rem;
        text-decoration: none;
        list-style: none;
        }

    li{
        margin:1.5rem;
    }

    ul{ 
        cursor: pointer;
        display: inline-block;
        padding-left: 30px;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #303030;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding: 3.5rem;
        transition: transform 0.3s ease-in-out ;

        li{
        color: white;
    }

    }
`

export default RightNavStyles; 