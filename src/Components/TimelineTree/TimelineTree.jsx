import React from 'react'
import './TimelineTree.css'
const TimelineTree = ({info,title}) => {
  
  return (
    <div className='timeline-tree'>
    <h4>{ (title=='Educational Qualification')?<span className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mr-2 inline-block text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path></svg></span>: <span  className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mr-2 inline-block text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z"></path></svg></span>}{title}</h4>
      {
        info.map(({session,title,description,workResponsiblity},index)=>{
return <div className='info' style={{display:"flex"}} key={index}>
<div>
<p>{session}</p>
</div>
<div>
<h5>{title}</h5>
<p>{description}</p>
{
workResponsiblity && <div dangerouslySetInnerHTML={{__html: workResponsiblity}}/>
}
</div>
</div>

        })
      }
    </div>

  )
}

export default TimelineTree
