import React, { useState,useEffect } from 'react'
import './SkillStatisticBox'
import './SkillStatisticBox.css'
import './SkillStatisticBoxLightMode.css'
import { Line,Circle } from 'rc-progress';
import TechSkillStatistic from '../TechSkillStatistic/TechSkillStatistic';
import  {contextObj} from '../Homepage';
import { useInView } from 'react-intersection-observer';

const SkillStatisticBox = ({percentageValue,skillName,techSkills}) => {
  const [currentValue, setCurrentValue] = useState(0);
   let {ref, inView} = useInView({
    triggerOnce: false
   })
  useEffect(() => {
    if(inView){
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      if (progress > percentageValue) {
        clearInterval(interval);
      } else {
        setCurrentValue(progress);
      }
    }, 5); 
  

    return () => clearInterval(interval); // Cleanup
}
  }, [inView,percentageValue]);

    return <div className="skill_box" data-aos = 'fade-up' ref={ref}>
    <div>
    {
      
      percentageValue && 
      <contextObj.Consumer>
      {

        (value)=>{
          
          return <Circle className='skillCircle' percent={currentValue} strokeWidth={10} trailWidth={10} strokeColor={(value == 'dark') ? '#72E2AE' : 'slateblue'} trailColor={(value == 'dark') ? '#72e2ae4a' : '#6a5acd2e'} />
         
        }
       
      }
      </contextObj.Consumer>
    }
    {
      percentageValue && <p className="skill_percentage">{currentValue}%</p>
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