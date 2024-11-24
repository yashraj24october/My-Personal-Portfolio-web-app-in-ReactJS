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
// Reference website link: https://tf-react-bieber.vercel.app/demo3

function Homepage() {
 
  return (
    <>
    <HeaderMobile/>
    <MobileNavMenu />
    <Header/>
    <BannerSection/>
    <AboutSection/>
    <SkillsSection/>
    
    <ResumeSection/>
    <ProjectSection/>
    <ReviewSection/>
    <BottomWrapper/>

    </>
  )
}

export default Homepage;