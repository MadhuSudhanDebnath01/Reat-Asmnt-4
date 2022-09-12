import React from 'react'
import './myStyle.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Napp' >
    <nav className='navbar'>
   <Link className='Nlink'  to="/Home">Home</Link>
   <Link className='Nlink' to="/Students">Students</Link>
   <Link className='Nlink' to="/Contect">Contact</Link>
    </nav>
   </div>
  )
}

export default Navbar;