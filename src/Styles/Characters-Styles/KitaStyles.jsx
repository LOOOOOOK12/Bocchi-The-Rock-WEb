import styled from 'styled-components'

const KitaStyles = styled.div`
    height: 100%;
    width: 100%;
    background: #141414;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .Shape{
        height: 90%;
        border-radius: 46% 54% 46% 54% / 68% 48% 52% 32%   ;
        background: #ff1919;
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

    @media (max-width: 700px) {
        
    }
`
export default KitaStyles