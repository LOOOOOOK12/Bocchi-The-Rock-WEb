import styled from 'styled-components'

const Song6Styles = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(0, 0, 0, 0.4),rgba(0,0,0,0.4)),url("src/assets/Album Cover/Distortion21_Digital_Cover_29.png");
    background-size: cover;
    background-repeat: no-repeat;

    .Container{
        backdrop-filter:blur(6px);
        background: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0,0,0,0.3));
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 3rem;
        border-radius: 2rem;
    }

    a{
        text-decoration: none;
        color: white;
    }
    
    .img-Container
    {
        height: 20rem;
        width: 20rem;
    }

    img{
        height: 100%;
        width: 100%;
        border-radius: 2rem;
    }

    audio{
        width: 100%;
    }

    @media (max-width: 565px) {
        .Text{
        font-size: 13px;
    }
}
    
`

export default Song6Styles