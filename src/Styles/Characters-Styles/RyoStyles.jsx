import styled from 'styled-components'

const RyoStyles = styled.div`
    height: 100%;
    width: 100%;
    background: #141414;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .Shape{
        height: 90%;
        border-radius: 46% 54% 46% 54% / 68% 48% 52% 32%   ;
        background: #5353ff;
    }

    .Text{
        display: flex;
        flex-direction: column;
        margin: 0 1.5rem;
        width: 25rem;
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
`

export default RyoStyles