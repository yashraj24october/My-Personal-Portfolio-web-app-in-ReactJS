import React, { useState } from 'react'
import './MobileNavMenu.css'
import MainNavMenu from '../MainNavMenu/MainNavMenu'
import Logo from '../Logo/Logo'

const MobileNavMenu = ({className}) => {
  function closeMenu(){
    document.querySelector('.mobile-nav-menu').classList.remove('open');
  }
  return (
    <div className='mobile-nav-menu'>
      <div className='menu-header'>
      <div className='container'>
        <Logo classToApply='logo menu-logo'/>
       
        <div className='close-btn' onClick={()=>{closeMenu()}}>
          X
        </div>
        </div>
      </div>
      <MainNavMenu closeMenuCallback={closeMenu}/>
    </div>
  )
}

export default MobileNavMenu
