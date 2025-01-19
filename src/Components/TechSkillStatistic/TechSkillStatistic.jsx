import React from 'react'
import { Line } from 'rc-progress';
import './TechSkillStatistic.css'
import { contextObj } from '../Homepage';
import { useState,useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
const TechSkillStatistic = ({techSkill}) => {

  let {skill,percentage,icon } = techSkill;
  let subSkill = []
  if(techSkill.subSkill){
    subSkill=techSkill.subSkill
  }



  const [currentValue, setCurrentValue] = useState(0);
  let {ref, inView} = useInView({
   triggerOnce: false
  })
 useEffect(() => {
   if(inView){
   let progress = 0;
   const interval = setInterval(() => {
     progress += 2;
     if (progress > percentage) {
       clearInterval(interval);
     } else {
       setCurrentValue(progress);
     }
   }, 8); 
 

   return () => clearInterval(interval); // Cleanup
}
 }, [inView,percentage]);

  return (
    
    <div className='techSkillStatistic_box' ref={ref}>
    {
      (subSkill.length == 0) ? <div>
      <contextObj.Consumer>
      {
        (value)=>{
     return  <div className='icon-with-progressbar'>
     {icon && <img src={icon} alt='skill-icon' loading="lazy"/>}
     <Line percent={currentValue} strokeWidth={3} trailWidth={3} strokeColor={(value == 'dark') ? '#72E2AE' : 'slateblue'} trailColor={(value == 'dark') ? '#72e2ae4a' : '#6a5acd2e'}/>
     </div>
      }}
      </contextObj.Consumer>
    
      <h5 className="skill_label text-center">{skill}</h5></div> : 
      <div className='subSkill'>
      <div className='icon-with-progressbar'>
      {icon && <img src={icon} alt='subskill-icon' loading="lazy"/>}
      <h2 className='skill_label'>{skill}</h2>
      </div>
      {subSkill.map(({skill,percentage},index)=>{
        return    <contextObj.Consumer>
      {
        (value)=>{
       return  <div key={index}>
       
        <Line percent={percentage} strokeWidth={3} trailWidth={3} strokeColor={(value == 'dark') ? '#72E2AE' : 'slateblue'} trailColor={(value == 'dark') ? '#72e2ae4a' : '#6a5acd2e'} />
      <h5 className="skill_label text-center">{skill}</h5></div>
        }}
        </contextObj.Consumer>
      })
      }</div>
    }

    </div>
  )



  // console.log("teckSkills"+{});

}

export default TechSkillStatistic
