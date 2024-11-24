import React from 'react'
import './ProjectPoster.css'
import { useNavigate } from 'react-router-dom';


const ProjectPoster = ({img,title,technologyName,category,liveLink,GithubLink}) => {
  let navigate =useNavigate();
// const showProjectDetail=()=>{
// navigate(`/project/${title}`);
// };
  return (
    <div className='project_poster'>
    <div className='img-wrapper'>
    <p className='category'>{category}</p>
      <img src={img} alt='project-img'/>
      <div className='project-nav'>
      <a href={liveLink} title='View Live'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg></a>
      <a href={GithubLink} title='View Github Repo'>
      <svg aria-hidden="true" className="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
</svg>
</a>
</div>
      </div>
      <div className='project-info'>
        <a href={liveLink} target='_blank'><h4>{title}</h4></a>
        <h5><span>Developed using: </span> {technologyName}</h5>
      </div>
     
    </div>
  )
}

export default ProjectPoster
