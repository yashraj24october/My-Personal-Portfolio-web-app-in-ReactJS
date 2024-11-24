import React from 'react'
import './SkillStatisticBox'
import './SkillStatisticBox.css'
import { Line,Circle } from 'rc-progress';
import TechSkillStatistic from '../TechSkillStatistic/TechSkillStatistic';


const SkillStatisticBox = ({percentageValue,skillName,techSkills}) => {
// console.log(techSkills);

    return <div className="skill_box">
    <div>
    {
      
      percentageValue && <Circle className='skillCircle' percent={percentageValue} strokeWidth={10} trailWidth={10} strokeColor="#72E2AE" trailColor='#72e2ae4a' />
    }
    {
      percentageValue && <p className="skill_percentage">{percentageValue}%</p>
    }
    <h5 className="skill_label dynamic-text-shadow text-center">{skillName}</h5>
    </div>
    <div className='tech-skills'>
{
  techSkills && techSkills.map((item,index)=>{
    return <TechSkillStatistic techSkill={item} key={index}/>
  })
}
</div>
  </div>
  }


export default SkillStatisticBox