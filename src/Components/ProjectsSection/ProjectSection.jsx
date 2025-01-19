import React, { useReducer, useRef, useState } from 'react'
import './ProjectsSection.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import FlexContainer from '../FlexContainer/FlexContainer';
import ProjectPoster from '../ProjectPoster/ProjectPoster';
import musicPlayerProject from '../../assets/music-player.png'
import divinGitaGyanProject from '../../assets/divin-gita-gyan.png'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react'

const ProjectSection = () => {
  
  let loadBtnRef = useRef(null);
  let [projectCount,setProjectCount] = useState(3);
  let reducer = (state,action)=>{
if(action == 'all'){
  state = 'all'
}
  
  else if(action == 'simple'){
    state = 'simple'
  
  }
  else if(action == 'react'){
    state = 'react'
  }
   else if(action == 'next'){
    state = 'next'
   }
   else if(action == 'drupal'){
    state = 'drupal'
   }
   else if(action == 'work'){
    state = 'work'
   }
  else{
    state = 'all'
  }
  return state;
}
  let [projectCategory, dispatch] = useReducer(reducer,'all');

let allProjects = [
  {
    title : 'Divine Gita Gyan',
    img: divinGitaGyanProject,
    technologyName: 'React.JS + RestAPI',
    category: 'Devotional ',
    liveLink: 'https://divine-gita-gyan.web.app',
    GithubLink: 'https://github.com/yashraj24october/Divine-Gita-Gyan-web-app-using-React.js',
    screenshots: [],
    description:``
  },
  {
    title : 'My Portfolio Web App',
    img: musicPlayerProject,
    category: 'Personal Portfolio',
    technologyName: 'React.JS + Drupal',
    liveLink: '#',
    GithubLink: '#',
    screenshots: [],
    description:``
  },
  {
    title : 'Douce Infotech Official Site',
    img: musicPlayerProject,
    category: 'Company',
    technologyName: 'React.JS + Drupal',
    liveLink: '#',
    GithubLink: '#',
    screenshots: [],
    description:``
  },
  {
    title : 'AJIO Ecommerce Clone',
    img: musicPlayerProject,
    category: 'E-commerce',
    technologyName: 'Next.JS + Drupal',
    liveLink: '#',
    GithubLink: '#',
    screenshots: [],
    description:``
  },
  {
    title : 'Jumbo Music Player',
    img: musicPlayerProject,
    category: 'Entertainment',
    technologyName: 'Next.JS + Drupal',
    liveLink: '#',
    GithubLink: '#',
    screenshots: [],
    description:``
  },
  {
    title : 'TaskFolio Web App',
    img: musicPlayerProject,
    category: 'Task Management',
    technologyName: 'React.JS + Drupal',
    liveLink: '',
    GithubLink: '',
    screenshots: [],
    description:``
  },
  {
    title : 'School Management Web App',
    img: musicPlayerProject,
    category: 'School Management',
    technologyName: 'Next.JS + Drupal',
    liveLink: '',
    GithubLink: '',
    screenshots: [],
    description:``
  },
  {
    title : 'Scientific Calculator',
    img: musicPlayerProject,
    category: 'Utility',
    technologyName: 'HTML + CSS + JS',
    liveLink: 'https://yashraj24october.github.io/Scientific-Calculator.github.io/',
    GithubLink: 'https://github.com/yashraj24october/Scientific-Calculator.github.io',
    screenshots: [],
    description:``
  },
  {
    title : 'Digital Clock',
    img: musicPlayerProject,
    category: 'Utility',
    technologyName: 'HTML + CSS + JS',
    liveLink: 'https://yashraj24october.github.io/Digital-Clock/',
    GithubLink: 'https://github.com/yashraj24october/Digital-Clock',
    screenshots: [],
    description:``
  }
];
function loadProjects(){
  if(projectCount <= allProjects.length){
    setProjectCount(projectCount+3)
    
    if(projectCount == allProjects.length-3){
      loadBtnRef.current.innerText = 'Load less';
    }
  }
  if(loadBtnRef.current.innerText == 'LOAD LESS'){
    setProjectCount(projectCount-3);
    if(projectCount==6){
      loadBtnRef.current.innerText = 'Load More';
      setProjectCount(3);
    }
  }
 
    
  
}

let simpleProjects = allProjects.filter((project)=>{
  return project.technologyName == 'HTML + CSS + JS'
});

let reactProjects = allProjects.filter((project)=>{
  return project.technologyName == 'React.JS + Drupal' || project.technologyName == 'React.JS + RestAPI'
});

let nextProjects = allProjects.filter((project)=>{
  return project.technologyName == 'Next.JS + Drupal'
});

let drupalProjects = allProjects.filter((project)=>{
  return project.technologyName == 'Drupal'
});

let workProjects = allProjects.filter((project)=>{
  return project.technologyName == 'Drupal'
});


  return (
    <div id='projects'  className='projects-section-wrapper sectionPadding'>
       <div className='grid-bg'>
<h2 data-aos = 'fade-zoom-in'>PROJECTS</h2>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<SectionTitle title='My Projects'/>
<div className="container">
<nav className='project-category-links container'>
  <ul>
    <li className={(projectCategory=='all')? 'active btn-hover' : 'btn-hover'} onClick={()=>{dispatch('all')}}><span>All</span></li>
    <li className={(projectCategory=='simple')? 'active btn-hover' : 'btn-hover'} onClick={()=>{dispatch('simple')}}><span>HTML, CSS && JS</span></li>
    <li className={(projectCategory=='react')? 'active btn-hover' : 'btn-hover'} onClick={()=>{dispatch('react')}}><span>React.JS && Drupal</span></li>
    <li className={(projectCategory=='next')? 'active btn-hover' : 'btn-hover'} onClick={()=>{dispatch('next')}}><span>Next.js</span></li>
    <li className={(projectCategory=='drupal')? 'active btn-hover' : 'btn-hover'} onClick={()=>{dispatch('drupal')}}><span>Drupal Full Stack</span></li>
    <li className={(projectCategory=='work')? 'active btn-hover' : 'btn-hover'} onClick={()=>{dispatch('work')}}><span>At Work</span></li>
  </ul>
</nav>
</div>
<section className='container'>
<FlexContainer totalItem={9} type='projects'>
{
(projectCategory == 'all') ? allProjects.map((item,index)=>{
  if(index < projectCount) 
  return  <ProjectPoster key={index} img={item.img} title={item.title} technologyName={item.technologyName} category={item.category} liveLink={item.liveLink} GithubLink={item.GithubLink} /> 
})
: (projectCategory == 'simple') ? simpleProjects.map((item,index)=>{
  if(index < projectCount) 
  return  <ProjectPoster key={index} img={item.img} title={item.title} technologyName={item.technologyName} category={item.category} liveLink={item.liveLink} GithubLink={item.GithubLink} /> 
})
: (projectCategory == 'react') ? reactProjects.map((item,index)=>{
  if(index < projectCount) 
  return  <ProjectPoster key={index} img={item.img} title={item.title} technologyName={item.technologyName} category={item.category} liveLink={item.liveLink} GithubLink={item.GithubLink} /> 
})
:(projectCategory == 'next') ? nextProjects.map((item,index)=>{
  if(index < projectCount) 
  return  <ProjectPoster key={index} img={item.img} title={item.title} technologyName={item.technologyName} category={item.category} liveLink={item.liveLink} GithubLink={item.GithubLink} /> 
})
:(projectCategory == 'drupal') ? drupalProjects.map((item,index)=>{
  if(index < projectCount) 
  return  <ProjectPoster key={index} img={item.img} title={item.title} technologyName={item.technologyName} category={item.category} liveLink={item.liveLink} GithubLink={item.GithubLink} /> 
})
:(projectCategory == 'work') ? workProjects.map((item,index)=>{
  if(index < projectCount) 
  return  <ProjectPoster key={index} img={item.img} title={item.title} technologyName={item.technologyName} category={item.category} liveLink={item.liveLink} GithubLink={item.GithubLink} /> 
})
:<h5 className='text-center' style={{color:'#fff', fontWeight:'600'}}>To be added soon...</h5>
}
</FlexContainer>
<div className='text-center load_more_btn_wrapper'>
<button className='btn-hover' data-aos = 'flip-up' onClick={loadProjects} ref={loadBtnRef}><span>Load more</span></button>
</div>
</section>
    </div>
    
  )
}

export default ProjectSection