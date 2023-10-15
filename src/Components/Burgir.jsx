import React,{ useState } from 'react'
import BurgirStyles from '../Styles/BurgirStyles'
import RightNav from './RightNav'

const Burgir = () => {
    const [open, setOpen] = useState(false)

return (
    <>
        <BurgirStyles open ={open} onClick={()=> setOpen(!open)}>
            <div />
            <div />
            <div />
        </BurgirStyles> 
        <RightNav open = {open}/>
    </>
)
}

export default Burgir