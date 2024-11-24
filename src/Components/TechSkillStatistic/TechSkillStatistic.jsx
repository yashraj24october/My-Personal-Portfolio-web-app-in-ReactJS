import React from 'react'
import { Line } from 'rc-progress';
import './TechSkillStatistic.css'


const TechSkillStatistic = ({techSkill}) => {
  let {skill,percentage } = techSkill;
  let subSkill = []
  if(techSkill.subSkill){
    subSkill=techSkill.subSkill
  }
  if(subSkill.length!=0)
  console.log(subSkill);


  return (
    <div className='techSkillStatistic_box'>
    {
      (subSkill.length == 0) ? <div><Line percent={percentage} strokeWidth={3} trailWidth={3} strokeColor="#72E2AE" trailColor='#72e2ae4a' />
      <h5 className="skill_label text-center">{skill}</h5></div> : 
      <div className='subSkill'><h2 className='skill_label'>{skill}</h2>{subSkill.map(({skill,percentage},index)=>{
        return <div key={index}>
        <Line percent={percentage} strokeWidth={3} trailWidth={3} strokeColor="#72E2AE" trailColor='#72e2ae4a' />
      <h5 className="skill_label text-center">{skill}</h5></div>
        
      })
      }</div>
    }

    </div>
  )



  // console.log("teckSkills"+{});

}

export default TechSkillStatistic
