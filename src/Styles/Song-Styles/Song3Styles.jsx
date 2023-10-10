import styled from 'styled-components'
import album3 from '../../assets/Album Cover/Wasurete_Yaranai_Digital_Cover_29.png'

const Song3Styles = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8),rgba(0,0,0,0.8)),url("src/assets/Album Cover/Wasurete_Yaranai_Digital_Cover_29.png");
    background-size: cover;

    .Container{
        backdrop-filter: blur(8px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 3rem;
        /* border: 2px solid transparent; */
    }

    img{
        height: 20rem;
        width: 20rem;
    }
`

export default Song3Styles