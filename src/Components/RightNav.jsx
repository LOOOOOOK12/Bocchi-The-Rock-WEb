import React from 'react'
import RightNavStyles from '../Styles/RightNavStyles'

const RightNav = ({open}) => {
return (
    <RightNavStyles open = {open}>
        <a href="#Home"><li>Home</li></a>
        <a href="#Synopsis"><li>Synopsis</li></a>
        <a href="#Characters"><li>Characters</li></a>
        <a href="#Songs"><li>Songs</li></a>
    </RightNavStyles>
    )
}

export default RightNav