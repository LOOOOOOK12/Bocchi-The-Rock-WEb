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

export default Song1Styles