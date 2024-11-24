import React, { useEffect, useRef } from 'react'
import Homepage from './Components/Homepage';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import ProjectDetail from './Components/ProjectDetailPage/ProjectDetail';
const App = () => {
  const cursorRef = useRef(0);
  useEffect(()=>{
window.addEventListener("mousemove",(e)=>{
  let mouseXPosition = e.pageX;
  let mouseYPosition = e.pageY;
 
  cursorRef.current.style.top=mouseYPosition+'px';
  cursorRef.current.style.left=mouseXPosition+'px';
   cursorRef.current.style.display='block';
});

window.addEventListener("mouseout",(e)=>{
  cursorRef.current.style.display='none';
});

  },[])

  let router = createBrowserRouter([
{
  path:'/',
  element:<Homepage/>
  // errorElement:<ErrorPage/>,
},
{
  path:'/project/:title',
  element: <ProjectDetail/>
}
  ]);
  return (
    <>
    <div ref={cursorRef} className='cursor'></div>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
