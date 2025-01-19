import React, { useEffect, useState } from 'react'
import './navigationButton.css'
const NavigationButton = () => {
  let [scrollPosition,setScrollPosition] = useState('top');
 
  function topBottomNavigation(){
    if(scrollPosition=='top'){
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'

    });
    }else{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    }
  }
useEffect(()=>{
  window.addEventListener('wheel', function(event) {
  this.window.addEventListener('scroll',()=>{
if(this.scrollY == 0){
  setScrollPosition('top');
}
else if(window.scrollY + window.innerHeight>=this.document.documentElement.scrollHeight){
  setScrollPosition('bottom');
}
else{
  if (event.deltaY > 0) {
    // User is scrolling down
    setScrollPosition('top');
} else if (event.deltaY < 0) {
    // User is scrolling up
    setScrollPosition('bottom');
}
}
  });
   
});

})
  return (
    <button className='nav-btn' onClick={topBottomNavigation}>
      {(scrollPosition == 'top') ? <span className='go-b'>Scroll to bottom</span> : <span className='go-t'>Scroll to top</span>}
    </button>
  )
}

export default NavigationButton
