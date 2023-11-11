import styled from 'styled-components'

const Song1Styles = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(0, 0, 0, 0.4),rgba(0,0,0,0.4)),url("src/assets/Album Cover/Seishun_Complex_Single_Cover_29 (1).png");
    background-size: cover;
    background-repeat: no-repeat;

    .Container{
        backdrop-filter:blur(6px);
        background: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0,0,0,0.3));
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2.2rem;
        border-radius: 2.5rem;
    }

    a{
        text-decoration: none;
        color: #e1e1e1;
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

    @media (max-width: 425px) {
        .img-Container{
        height: 20rem;
        width: 17rem;
    }
}
    
`

export default Song1Styles