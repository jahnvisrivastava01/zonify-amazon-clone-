import React from 'react'
import './navbar.css'
import NavbarBelt from './NavbarBelt/navbarbelt'
import NavbarBanner from './NavbarBanner/navbarbanner'

function Navbar() {
  return (

    
    <div className='navbar'>
        <NavbarBelt />
        <NavbarBanner />
    </div>
  )
}

export default Navbar