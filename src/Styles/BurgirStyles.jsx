import styled from 'styled-components'

const BurgirStyles = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;

    div{
        width: 2rem;
        height: 0.20rem;
        border-radius: 3rem;
        background-color: ${({ open }) => open ? '#b8b8b8' : '#ffffff'};
        transform-origin: 1px ;
        transition: all 0.3s linear;

        &:nth-child(1){
            transform:${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        
        &:nth-child(2){
            transform:${({ open }) => open ? 'translateX(100)' : 'translateX(0)'};
            opacity:${({ open }) => open ? 0 : 1} ;
        }

        &:nth-child(3){
            transform:${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
    

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }


`


export default BurgirStyles