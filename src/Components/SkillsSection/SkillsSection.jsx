import React, { useEffect, useRef } from 'react'
import './SkillsSection.css'
import SkillStatisticBox from '../SkillStatisticBox/SkillStatisticBox'
import FlexContainer from '../FlexContainer/FlexContainer'
import SectionTitle from '../SectionTitle/SectionTitle'
const SkillsSection = () => {

  let mySkills = [
    {
     skillName: 'Front-End Development',
      percentageValue: 85,
      techSkills: [
        {
          skill: 'React.Js',
          percentage: 85,
        },
        {
          skill: 'HTML5 & CSS3',
          percentage: 90,
        },
        {
          skill: 'Javascript (ES6+)',
          percentage: 90,
        },
        {
          skill: 'JQuery',
          percentage: 80,
        },
        {
          skill: 'Bootstrap',
          percentage: 75,
        },
        {
          skill: 'Tailwind CSS',
          percentage: 85,
        },
      ]
    },
    {
      skillName: 'Back-End Development',
       percentageValue: 90,
       techSkills: [
         {
           skill: 'PHP',
           percentage: 85,
         },
         {
           skill: 'Drupal',
           subSkill: [
            {
              skill: 'Site Building',
              percentage: 90
            },
            {
              skill: 'Custom Theme Development',
              percentage: 90
            },
            {
              skill: 'Custom Module Development',
              percentage: 90
            },
            {
              skill: 'Multisite Development',
              percentage: 80
            },
            {
              skill: 'Robust User Management and Security',
              percentage: 90
            }
          ]
        }
      ]
         },
         {
          skillName: 'Database Communication',
           percentageValue: 85,
           techSkills: [
             {
               skill: 'MySQL',
               percentage: 90,
             }
           ]
         },
         {
          skillName: 'Programming Languages',
           
           techSkills: [
             {
               skill: 'C++',
               percentage: 80,
             },
             {
              skill: 'Javascript',
              percentage: 90,
            },
            {
              skill: 'Python',
              percentage: 75,
            }
           ]
         },
         {
          skillName: 'Other Technical Skills',
           techSkills: [
             {
               skill: 'OOPs',
               percentage: 90,
             },
             {
              skill: 'REST API Integration',
              percentage: 90,
            },
            {
              skill: 'Git/Github',
              percentage: 80,
            },
           ]
         },
         {
          skillName: 'Soft Skills',
           techSkills: [
             {
               skill: 'Problem-solving',
               percentage: 90
             },
             {
              skill: 'Team leadership',
              percentage: 85
            },
            {
              skill: 'Effective Communication',
              percentage: 90
            },
            {
              skill: 'Team oriented mindset',
              percentage: 90
            },
          ]
        }
       
  ]

  return (
    
    <section id='skills' className='skills-section-wrapper sectionPadding'>
       <div className='grid-bg'>
<h2>SKILLS</h2>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
    <div className='container'>
    <SectionTitle title='MY SKILLS'/>
    
    <FlexContainer totalItem={4}>
    {
      mySkills.map(({skillName,percentageValue,techSkills},index)=>{
        return <SkillStatisticBox key={index} percentageValue={percentageValue} skillName={skillName} techSkills={techSkills} />
      })
    }
    </FlexContainer>
</div>
    </section>
  )
}

export default SkillsSection