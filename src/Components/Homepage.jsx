import React, { useState,useEffect } from 'react'
import Header from './Header/Header';
import SocialLinks from './SocialLinks/SocialLinks';
import BannerSection from './BannerSection/BannerSection';
import AboutSection from './AboutSection/AboutSection';
import SkillsSection from './SkillsSection/SkillsSection';
import ResumeSection from './ResumeSection/ResumeSection';
import ProjectSection from './ProjectsSection/ProjectSection';
import ReviewSection from './ReviewsSection/ReviewSection';

import ContactSection from './ContactSection/ContactSection';
import MobileNavMenu from './MobileNavMenu/MobileNavMenu';
import HeaderMobile from './Header/HeaderMobile/HeaderMobile';
import BottomWrapper from './BottomWrapper/BottomWrapper';
import Footer from './Footer/Footer';
import AOS from 'aos';
import { createContext } from 'react';
// Reference website link: https://tf-react-bieber.vercel.app/demo3
export const contextObj = createContext(null);
function Homepage() {
  const about = document.querySelector('.about-section-wrapper');
  if(about!=null){
  const aboutRect = about.getBoundingClientRect();
 
// Extract the top position
const aboutTopPosition = aboutRect.top;
  


// console.log('about position'+aboutTopPosition);
  }


  const project = document.querySelector('.projects-section-wrapper');
  if(project!=null){
  const projectRect = project.getBoundingClientRect();

// Extract the top position
const projectTopPosition = projectRect.top;
// console.log('project position'+projectTopPosition);
  }

  const resume = document.querySelector('.resume-section-wrapper');
  if(resume!=null){
  const resumeRect = resume.getBoundingClientRect();

// Extract the top position
const resumeTopPosition = resumeRect.top;
// console.log('resume position'+resumeTopPosition);
  }

  const contact = document.querySelector('.contact-section-wrapper');
  if(contact!=null){
  const contactRect = contact.getBoundingClientRect();

// Extract the top position
const contactTopPosition = contactRect.top;
// console.log('contact position'+contactTopPosition);
  }

  window.addEventListener('scroll',()=>{
    // console.clear();
    //about -620
    //resume - 2772
    //projects - 4155
    //contact -5760
//  console.log(scrollY);
  });
  AOS.init({
    duration: 1200, // Animation duration in milliseconds
    easing: 'ease-in-out', // Easing function
    once: false, // Whether animation should happen only once
    mirror: false, // Whether elements should animate out while scrolling past them
  });
 let [currentMode,setCurrentMode] = useState('dark');
 let [showOverlay,setShowOverlay] = useState(false);

 console.log('overlay:'+showOverlay);
  function setMode(mode){
setCurrentMode(mode);
  }

  function checkTestimonial(open){
if(open){
  setShowOverlay(false)
}else{
  setShowOverlay(true)
}
  }
  return (
    <>
    <contextObj.Provider value ={currentMode}>
    { showOverlay && <div className='overlay'></div>}
    <HeaderMobile/>
    <MobileNavMenu />
    <section className='site-upper'>
    <Header setMode={setMode}/>
    <BannerSection />
    </section>
    <section className='site-middle'>
    <AboutSection/>
    <SkillsSection/>
    
    <ResumeSection/>
    <ProjectSection/>
    <ReviewSection checkTestimonial={checkTestimonial} />
    </section>
    <BottomWrapper/>
</contextObj.Provider>

    </>
  )
}

export default Homepage;