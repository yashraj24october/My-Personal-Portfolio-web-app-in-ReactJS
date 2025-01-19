import React from 'react'
import './Footer.css'
import SocialLinks from '../SocialLinks/SocialLinks'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
    <div className="container">
     <SocialLinks/>
     <p>© 2024, All right reserved <Link to='/'>Yash Raj</Link></p>
     </div>
    </footer>
  )
}

export default Footer
