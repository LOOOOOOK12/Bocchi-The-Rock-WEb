import styled from 'styled-components'

const BocchiStyles = styled.div`
    height: 100%;
    width: 100%;
    background: #141414;
    position: relative;
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    text-align: center;

    .Shape{
        height: 90%;
        border-radius: 46% 54% 46% 54% / 68% 48% 52% 32%   ;
        background: #ffa1b1;
    }

    h2{
        text-align: center;
    }

    .Text{
        display: flex;
        flex-direction: column;
        text-align: left;
        line-height: 1.8rem;
        margin: 0 1.5rem;
        width: 350px;
    }

    img{ 
        height: 100%;
    }

    @media (max-width: 550px) {
        .Text{
        font-size: 13px;
    }
    }

    @media (max-width: 425px) {
        .Text{
        font-size: 12px;
    }

    

    .Shape{
        height: 70%;
    }
    }

    @media (max-width: 375px) {
        .Text{
        font-size: 13px;
        line-height: 1.5rem;
    }
    }

    
`

export default BocchiStyles