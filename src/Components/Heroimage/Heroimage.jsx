import React from 'react'
import myImgSrc from '../../assets/yash-img.jpg'
import { Fade } from 'react-reveal'
const Heroimage = () => {
  return (
    <div className="hero-image-wrapper">
    <div className='image-container'>
    <Fade>
    <img  src={myImgSrc} loading="lazy" alt='my-img'/>
    </Fade>
     <div className="rotating-border"></div>
     </div>
     </div>
  )
}

export default Heroimage