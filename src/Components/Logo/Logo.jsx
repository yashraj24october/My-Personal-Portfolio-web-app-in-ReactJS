import React from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'
import myLogo from '../../assets/my_logo.png';
import lightModeLogo from '../../assets/logo-light-mode.png'
import { contextObj } from '../Homepage';
const Logo = ({classToApply}) => {
  return (
    <div className={classToApply} data-aos = 'fade-zoom-in'>
    <contextObj.Consumer>
    {
      (value) =>{
        return <><Link to='/'><img src={(value=='dark') ? myLogo : lightModeLogo} alt='logo-img' loading="lazy"/></Link> <h2 className='fade-up'><span>Y</span>ASH</h2></>
      }
    }
      
      </contextObj.Consumer>
    </div>
  )
}

export default Logo
