import styled from 'styled-components'

const Song2Styles = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4),rgba(0,0,0,0.4)),url("src/assets/Album Cover/Ano_Band_Digital_Cover_29.png");
    background-size: cover;

    .Container{
        backdrop-filter: blur(8px);
        background: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0,0,0,0.3));
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 3rem;
        border-radius: 2rem;
    }

    img{
        height: 20rem;
        width: 20rem;
        border-radius: 2rem;
    }

    audio{
        width: 100%;
    }
`

export default Song2Styles