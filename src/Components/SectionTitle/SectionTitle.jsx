import React from 'react'
import './SectionTitle.css'
import 'aos/dist/aos.css';

const SectionTitle = ({title}) => {

  return (
    <div data-aos="fade-up" className='text-center section-title-wrapper'>
      <h2 className='section_title'>&lt;&nbsp;&nbsp;&nbsp; {title} /&gt;</h2>
      <div className='underline'></div>
    </div>
  )
}

export default SectionTitle
