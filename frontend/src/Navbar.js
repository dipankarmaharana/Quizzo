import React from 'react'
import './style.css'


const Navbar = () => {
  return (
    <nav class="header">
      <a href="" class="logo">e-Exam</a>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
      <ul class="menu">
        <li><a href="register.html">Login/Register</a></li>
        <li><a href="#work">Openforum</a></li>
        <li><a href="#e-repo">e-Repository</a></li>
        <li><a href="#careers">My Wall</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar