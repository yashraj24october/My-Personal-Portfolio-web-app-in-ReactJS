import React from 'react'
import './IntroAnimated.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const IntroAnimated = () => {
  const [typeEffect] =useTypewriter({
    words: ['Yash Raj','Full Stack Web Developer.','an Innovative Creative Designer.','an Expert Drupal Developer.','a Passionate Mentor for Aspiring Developers.','a Dedicated Problem Solver.'],
    typeSpeed: 80,
    loop: {},
    deleteSpeed: 30,
  })
  return (
    <div className='intro-animated-text-wrapper'>
    <div className="container">
    <h3>Hi, I'm <span className='profession' id='expertises'>{typeEffect}</span></h3>
    </div>
    </div>
  )
}

export default IntroAnimated