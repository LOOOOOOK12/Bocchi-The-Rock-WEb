import styled from 'styled-components';

const BandStyles = styled.div`
    position: relative;
    height: 40vh;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0,0,0,0.5)),url("src/assets/Album Cover/Bocchi_the_Rock28Twitter_.png");
    background-size: cover;
    background-position: 50%;


    h1{
        color: #fbfbfb;
        font-size: 3rem;
        font-weight: 750;
        position: absolute;
        left: 58%;
        bottom: 30%;
    }
`

export default BandStyles;