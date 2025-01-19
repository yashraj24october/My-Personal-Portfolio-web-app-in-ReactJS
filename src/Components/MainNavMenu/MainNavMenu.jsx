import React from 'react'
import { HashLink } from 'react-router-hash-link'

import './MainNavMenu.css'

const MainNavMenu = ({closeMenuCallback,className}) => {

  return (
    <nav>
        <ul className={className}>
        <li className='home-link' onClick={()=>{closeMenuCallback()}} data-aos = 'fade-left'><HashLink to='#'>Home</HashLink></li>
        <li className='about-link' onClick={()=>{closeMenuCallback()}} data-aos = 'fade-left'><HashLink to='#about'>About</HashLink></li>
        <li className='resume-link' onClick={()=>{closeMenuCallback()}} data-aos = 'fade-left'><HashLink to='#resume'>Resume</HashLink></li>
        {/* <HashLink to='#skills'><li className='skills-link' onClick={()=>{closeMenuCallback()}} data-aos = 'fade-left'>Skills</li></HashLink> */}
        <li className='projects-link' onClick={()=>{closeMenuCallback()}} data-aos = 'fade-left'><HashLink to='#projects'>Projects</HashLink></li>
        <li className='contact-link' onClick={()=>{closeMenuCallback()}} data-aos = 'fade-left'><HashLink to='#Contact'>Contact</HashLink></li>
      </ul>
    </nav>
  )
}

export default MainNavMenu
