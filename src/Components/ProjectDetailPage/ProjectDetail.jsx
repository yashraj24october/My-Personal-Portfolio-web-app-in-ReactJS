import React from 'react'
import './ProjectDetail.css'
import Header from '../Header/Header'

const ProjectDetail = ({projectName='Project Name', projectDescription='This is project Description', projectScreenshots=[]}) => {
  return (
    
    <section className='project-detail-wrapper'>
    <Header/>
    <div  className='container'>
    <div className="project-detail-header">
   <h2>Project Name: {projectName}</h2>
   </div>
     <p>{projectDescription}</p>
     </div>
    </section>
  )
}

export default ProjectDetail
