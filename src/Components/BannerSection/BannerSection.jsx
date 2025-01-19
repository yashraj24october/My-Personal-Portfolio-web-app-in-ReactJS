import React, { useEffect, useRef } from 'react'
import './BannerSection.css'
import IntroAnimated from '../IntroAnimated/IntroAnimated'
import SocialLinks from '../SocialLinks/SocialLinks'
import myImgSrc from '../../assets/yash-img.png'
import Heroimage from '../Heroimage/Heroimage'
import DownloadResumeBtn from '../DownloadResumeBtn/DownloadResumeBtn'
import { useInView } from 'react-intersection-observer'
import NavigationButton from '../navigationButton/navigationButton'

const BannerSection = () => {
  
  return (
<section className='banner_section'>
<div className="container">
<Heroimage/>
<IntroAnimated/>
<p className="short-intro text-center" style={{color:'#fff'}}>I build quality web applications that gives users new superpowers</p>
<div className="connect-links text-center">
<h4>Connect with Me</h4>
<SocialLinks/>
<NavigationButton/>
</div>


</div>
</section>

    
  )
}

export default BannerSection