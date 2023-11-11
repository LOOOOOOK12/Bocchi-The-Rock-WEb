import styled from 'styled-components'

const FooterStyles = styled.div`
    padding: 2rem 1.5rem;
    gap: .5rem;
    background: #F6FF60;
    background: radial-gradient(at center, #f9f975, #ead91a);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #131313;

    .Container-1{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
    }

    .Container-2{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .Links img{
        height: 2.7rem;
    }


    .right-Container{
        display: flex;
        font-weight: 700;
    }

    hr{
        width: 100%;
        margin: 1rem 0;
        border: 1px solid #1c1c1c;
    }

    a{
        color: #131313;
        text-decoration: none;
        margin: 0 1rem;
        font-weight: 600;
    }

    .Credits{
        color: #131313;
        font-weight: 500 ;
    }

    img{
        height: 4.5rem;
    }

    @media (max-width: 465px) {
        flex-direction:column;
    }

    @media (max-width: 700px) {
        .Container-1{
            flex-direction: column;
            gap: 1rem;
        }
    }
    @media (max-width: 375px) {
        .right-Container{
            flex-direction: column;
            gap:1rem;
        }
    }


    
`
export default FooterStyles