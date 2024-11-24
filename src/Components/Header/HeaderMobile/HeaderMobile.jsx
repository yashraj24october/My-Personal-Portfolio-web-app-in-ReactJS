import React, { useState } from 'react'
import '../HeaderMobile.css'
import Logo from '../../Logo/Logo'
import MobileNavMenu from '../../MobileNavMenu/MobileNavMenu';
const HeaderMobile = () => {
  // let [menuOpen,setMenuOpen] = useState(false);
  
  function openMenu(){
    document.querySelector('.mobile-nav-menu').classList.add('open');
  }
  return (
    <div className='header-mobile'>
      <div className="container">
      <div>
        <Logo classToApply='logo mobile-logo'/>
        <button className='mobile-menu-btn' onClick={()=>{openMenu()}}>
        <span></span>
        <span></span>
        </button>
        </div>
      </div>
     
    </div>
  )
}

export default HeaderMobile
