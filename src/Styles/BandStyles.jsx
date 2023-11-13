import styled from 'styled-components';

const BandStyles = styled.div`
        position: relative;
    height: 50vh;
    width: 100%;

    .bg-Video{
        position: absolute;
        width: 100%;
        height: 100%;
        right: 0;
        bottom: 0;
        object-fit: cover;
        z-index: -1;
        opacity: 0.8;
        
    }



    h1{
        color: #eaeaea;
        font-size: 3rem;
        font-weight: 750;
        position: absolute;
        left: 58%;
        bottom: 36%;
    }
`

export default BandStyles;