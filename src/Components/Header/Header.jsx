import React from 'react'
import './Header.css'
import './HeaderMobile.css'
import SocialLinks from '../SocialLinks/SocialLinks'
import myLogo from '../../assets/my_logo.png';
import {useEffect,useRef} from 'react'
import { HashLink } from 'react-router-hash-link';
import DarkModeSwitcher from '../DarkModeSwitcher/DarkModeSwitcher';
import { Link } from 'react-router-dom';
import MainNavMenu from '../MainNavMenu/MainNavMenu';
import Logo from '../Logo/Logo';
const Header = ({setMode}) => {
const headerRef = useRef(0);

useEffect(()=>{
  window.addEventListener('scroll',(e)=>{

    if(Math.floor(scrollY)>26){
      headerRef.current.classList.add("fixed")
    }
    else{
      headerRef.current.classList.remove("fixed")
    }

    })
//   const aboutSection = document.querySelector('#about'); // Replace with your element selector
// const aboutDistanceFromTop = aboutSection.getBoundingClientRect().top;
// const skillSection = document.querySelector('#skills'); // Replace with your element selector
// const skillsDistanceFromTop = skillSection.getBoundingClientRect().top;
// const resumeSection = document.querySelector('#resume'); // Replace with your element selector
// const resumeDistanceFromTop = resumeSection.getBoundingClientRect().top;
// const projectSection = document.querySelector('#projects'); // Replace with your element selector
// const projectDistanceFromTop = projectSection.getBoundingClientRect().top;
// const reviewsSection = document.querySelector('#reviews'); // Replace with your element selector
// const reviewsDistanceFromTop = reviewsSection.getBoundingClientRect().top;
// // console.log('About Section distance from top: ' + distanceFromTop + 'px');
// window.addEventListener("scroll",(e)=>{
//   // console.log(scrollY);
//   // console.log(distanceFromTop);

// if(scrollY>aboutDistanceFromTop && scrollY<skillsDistanceFromTop){

// headerRef.current.classList.add("skyblue");
// headerRef.current.classList.remove("darkred");
// headerRef.current.classList.remove("black");
// headerRef.current.classList.remove("light");
// }
// else if(scrollY>skillsDistanceFromTop && scrollY<resumeDistanceFromTop){
// headerRef.current.classList.add("darkred");
// headerRef.current.classList.remove("skyblue");
// headerRef.current.classList.remove("black");
// headerRef.current.classList.remove("lightblue");
// }

// else if(scrollY>resumeDistanceFromTop && scrollY<projectDistanceFromTop){
// headerRef.current.classList.add("lightblue");
// headerRef.current.classList.remove("darkred");
// headerRef.current.classList.remove("skyblue");
// headerRef.current.classList.remove("black");
// }

// else if(scrollY>projectDistanceFromTop && scrollY<reviewsDistanceFromTop){
// headerRef.current.classList.add("black");
// headerRef.current.classList.remove("lightblue");
// headerRef.current.classList.remove("skyblue");
// headerRef.current.classList.remove("darkred");
// }
// else{

// headerRef.current.classList.remove("black");
// headerRef.current.classList.remove("lightblue");
// headerRef.current.classList.remove("skyblue");
// headerRef.current.classList.remove("darkred");
// }
// });
})
  return (
    <div className='header-wrapper'>
    <div className='header_top'>
    <div className="container">
    <a href='tel:9122733522'>
         9122733522
        </a>
    <SocialLinks/>
    </div>
</div>
<div ref={headerRef} className="header_bottom">
<div className="container">
  <div className="row">
  {/* <div className="col-md-3 site-branding "><img src={myLogo} /><h4>Yash<span>.</span></h4></div> */}
  <div className="col-md-3 site-branding "><Logo classToApply='logo logo-big'/></div>
  <div className="col-md-7 main-menu">
      <MainNavMenu className='desktop-menu d-flex'/>
    </div>
    <div className="col-md-2 right-menu"><button className='contact-btn btn-hover' data-aos = 'flip-up'><span>Hire Me</span></button><DarkModeSwitcher setMode={setMode}/></div>
  </div>
  </div>
</div>
{/* <div className="rotating-ring"></div> */}

    </div>
  )
}

export default Header
