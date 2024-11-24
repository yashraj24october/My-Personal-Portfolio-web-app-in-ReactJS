import React, { useEffect, useRef } from 'react'
import './ResumeSection.css'
import TimelineTree from '../TimelineTree/TimelineTree'
import SectionTitle from '../SectionTitle/SectionTitle'
import FlexContainer from '../FlexContainer/FlexContainer';
const ResumeSection = () => {
  let education =[
    {
      session: 'Mar 2016 - Mar 2017',
      title: '10th(CBSE)',
      description: 'St Joseph School, Mahua, Vaishali, Bihar'
    },
    {
      session: 'Mar 2017 - Mar 2019',
      title: '12th(CBSE)',
      description: 'St Joseph School, Muzaffarpur, Bihar'
    },
    {
      session: 'Aug 2019 - Aug 2022',
      title: 'Bachelor in Computer Applications (BCA)',
      description: 'Vaishali Institute of Business and Rural Management, Muzaffarpur, Bihar'
    },
    {
      session: 'Aug 2023 - Nov 2023',
      title: 'Drupal CMS Complete Full Stack Training',
      description: 'Douce Infotech Private Limited, Muzaffarpur, Bihar'
    }
  ];
let workResponsiblity = `
<ul>
<li>Designed and implemented visually appealing, responsive UIs that align with modern design principles and enhance user interaction.</li>
<li>Consistently developed high-quality custom drupal themes, ensuring seamless functionality and engaging user experiences.</li>
<li>Solved complex project challenges by developing tailored solutions through custom Drupal modules and Javascript, improving overall site performance.</li>
<li>Created comprehensive project documentation to streamline workflows, enhance team collaboration, and ensure future project scalability and maintenance.</li>
<li>Maintained a strong track record of completing project tasks on schedule, with a focus on quality and effective teamwork to meet project goals efficiently.</li></ul>
`;
  let workingExperience = [
    {session: 'Nov 2023 - Current',
title: 'Full Stack Drupal Web Developer',
description: 'Douce Infotech Private Limited, Muzaffarpur, Bihar',
workResponsiblity: workResponsiblity
    }
  ]
  return (
    <div id='resume'  className='resume-section-wrapper sectionPadding'>
       <div className='grid-bg'>
<h2>RESUME</h2>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
    <SectionTitle title='My Resume'/>
    <FlexContainer totalItem={2}>
    <TimelineTree info={education} title="Educational Qualification"/>
    <TimelineTree info={workingExperience} title="Working Experience"/>
    </FlexContainer>
    </div>
  )
}

export default ResumeSection