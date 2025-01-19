import React, { useEffect, useRef, useState } from 'react'
import img from '../../assets/my-photo.jpg'
import './AboutSection.css'
import './AboutSectionMobile.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import { useInView } from 'react-intersection-observer'
import { all } from 'axios'

const AboutSection = () => {
  const aboutBodyRef = useRef(0);
  const viewFullBtnRef = useRef(0);
  let aboutRef = useRef(0)
  let [imageIsVisible,setImageIsVisible] = useState(false);
  let imageRef = useRef(0);
  








  let [showFull,setShowFull] = useState(false);
const showFullText=()=>{
  if(showFull){
    setShowFull(false);
    aboutBodyRef.current.classList.add("line-clamp-8");
    viewFullBtnRef.current.innerHTML=`<span>View Full :)</span`;
  }
  else{
    setShowFull(true);
    aboutBodyRef.current.classList.remove("line-clamp-8");
    viewFullBtnRef.current.innerHTML =`<span>Collapse :(</span`;
  }
  
}
  return (
    <section id='about' className='about-section-wrapper sectionPadding'>
       <div className='grid-bg'>
<h2 data-aos = 'fade-zoom-in'>ABOUT</h2>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
<SectionTitle title='ABOUT ME'/>
         <div className='container'>
          <div data-aos = {(innerWidth > 767) ? 'fade-right' : ''} className="image">
          <span className='box1'></span>
          <span className='box2'></span>
          <span className='box3'></span>
          <span className='box4'></span>
          <img src={img} loading='lazy' alt='my-img'/>
          </div>
          <div data-aos = {(innerWidth > 767) ? 'fade-left' : ''} className="about-text">
            <p ref={aboutBodyRef} className='line-clamp-8'>
            Hi, I'm <span>Yash Raj</span>, a passionate and versatile Full Stack Web Developer with a strong foundation in building high-quality, dynamic, secure, fully-featured and user-friendly web applications. With expertise in technologies like React.js, PHP, MySQL, and Drupal, I bring creativity and precision to every project I undertake. My proficiency extends to multiple programming languages, including C, C++, Java, JavaScript, and Python, making me a well-rounded developer who thrives on solving complex challenges.
<br/><br/>
My journey in tech began with a deep curiosity about how things work behind the scenes, and that curiosity quickly turned into a lifelong passion for creating user-friendly and efficient digital solutions. From that point on, I set a clear goal for myself: to build quality and useful web applications and software that help solve real-world problems, making people's lives easier and more efficient.
I graduated with a Bachelor's in Computer Applications from Vaishali Institute of Business and Rural Management, Muzaffarpur, Bihar, and since then, I’ve dedicated myself to mastering the art of web development.
<br/><br/>
With a vision to simplify, enhance, and bring innovation into people’s lives, I strive to create applications that not only function seamlessly but also deliver an exceptional user experience. My enthusiasm for technology keeps me on a continuous learning path, always embracing the latest trends and techniques in web development.
<br/><br/>
Let’s collaborate to create something extraordinary for your business. Reach out today, and let’s start building your next great project!

            </p>
            <button className='viewToggle btn-hover' ref={viewFullBtnRef} onClick={showFullText}><span>View Full : )</span></button>
          </div>
         </div>
    </section>
  )
}

export default AboutSection