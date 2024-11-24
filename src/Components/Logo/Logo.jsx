import React from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'
import myLogo from '../../assets/my_logo.png';
const Logo = ({classToApply}) => {
  return (
    <div className={classToApply}>
      <Link to='/'><img src={myLogo} /></Link> <h2 className='fade-up'><span>Y</span>ASH</h2>
    </div>
  )
}

export default Logo
