import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './MainNavMenu.css'

const MainNavMenu = ({closeMenuCallback,className}) => {
  return (
    <nav>
        <ul className={className}>
        <HashLink to='#'><li onClick={()=>{closeMenuCallback()}}>Home</li></HashLink>
        <HashLink to='#about'><li onClick={()=>{closeMenuCallback()}}>About</li></HashLink>
        <HashLink to='#skills'><li onClick={()=>{closeMenuCallback()}}>Skills</li></HashLink>
        <HashLink to='#projects'><li onClick={()=>{closeMenuCallback()}}>Projects</li></HashLink>
        <HashLink to='#reviews'><li onClick={()=>{closeMenuCallback()}}>Reviews</li></HashLink>
        <HashLink to='#Contact'><li onClick={()=>{closeMenuCallback()}}>Contact</li></HashLink>
      </ul>
    </nav>
  )
}

export default MainNavMenu
