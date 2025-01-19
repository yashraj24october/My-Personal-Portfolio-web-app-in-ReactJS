import React, { useEffect, useRef } from 'react'
import './SkillsSection.css'
import SkillStatisticBox from '../SkillStatisticBox/SkillStatisticBox'
import FlexContainer from '../FlexContainer/FlexContainer'
import SectionTitle from '../SectionTitle/SectionTitle'
import reactLogo from '../../assets/reactLogo.png';
import htmlLogo from '../../assets/htmlLogo.png';
import cssLogo from '../../assets/cssLogo.png';
import jsLogo from '../../assets/jsLogo.png';
import phpLogo from '../../assets/phpLogo.png';
import drupalLogo from '../../assets/drupalLogo.png';
import jqueryLogo from '../../assets/jqueryLogo.png';
import mysqlLogo from '../../assets/mysqlLogo.png';
import tailwindLogo from '../../assets/tailwindLogo.png';
import bootstrapLogo from '../../assets/bootLogo.png';
import OOPLogo from '../../assets/oopLogo.png';
import GitLogo from '../../assets/gitLogo.png';
import cppLogo from '../../assets/cppLogo.png';
import javaLogo from '../../assets/javaLogo.png';
import pythonLogo from '../../assets/pythonLogo.png';
import restLogo from '../../assets/apiLogo.png';
import typescriptLogo from '../../assets/typescriptLogo.png';
import { useInView } from 'react-intersection-observer'

const SkillsSection = () => {
  
  let mySkills = [
    {
     skillName: 'Front-End Development',
      percentageValue: 85,
      techSkills: [
        {
          skill: 'React.Js',
          percentage: 85,
          icon: reactLogo
        },
        {
          skill: 'HTML5 & CSS3',
          percentage: 90,
          icon: htmlLogo
        },
        {
          skill: 'Javascript (ES6+)',
          percentage: 90,
          icon: jsLogo
        },
        {
          skill: 'JQuery',
          percentage: 80,
          icon: jqueryLogo
        },
        {
          skill: 'Typescript',
          percentage: 85,
          icon: typescriptLogo
        },
        {
          skill: 'Bootstrap',
          percentage: 75,
          icon: bootstrapLogo
        },
        {
          skill: 'Tailwind CSS',
          percentage: 85,
          icon: tailwindLogo
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
           icon: phpLogo
         },
         {
           skill: 'Drupal',
           icon: drupalLogo,
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
               icon: mysqlLogo
             }
           ]
         },
         {
          skillName: 'Programming Languages',
           
           techSkills: [
             {
               skill: 'C++',
               percentage: 80,
               icon: cppLogo
             },
             {
              skill: 'Javascript',
              percentage: 90,
              icon: jsLogo
            },
            {
              skill: 'Python',
              percentage: 75,
              icon: pythonLogo
            },
            {
              skill: 'Java',
              percentage: 80,
              icon: javaLogo
            }
           ]
         },
         {
          skillName: 'Other Technical Skills',
           techSkills: [
             {
               skill: 'OOPs',
               percentage: 90,
               icon: OOPLogo
             },
             {
              skill: 'REST API Integration',
              percentage: 90,
             icon: restLogo
            },
            {
              skill: 'Git/Github',
              percentage: 80,
              icon: GitLogo
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
<h2 data-aos = 'fade-zoom-in'>SKILLS</h2>
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