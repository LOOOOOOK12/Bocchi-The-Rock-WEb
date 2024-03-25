import React from 'react'
import CharStyles from '../Styles/CharStyles'
import image from '../assets/bgPicture.jpg'
function Char() {
    return (
        <div className='relative flex items-center justify-center h-[43vh]'>
            <img src={image} alt="" className='absolute brightness-[.2] h-screen w-full object-cover -z-10'/>
            <h1 className='text-5xl font-bold'>Song List!</h1>
        </div>
    )
}

export default Char