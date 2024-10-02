import React from 'react'
import { Link } from "react-router-dom";
import logo from './Datas/Pictures/logo.png'

function Navbar() {

  return (
    <div>
        <nav class="navbar navbar-expand-lg " style={{backgroundColor: '#ffde59'}}>
  
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01" >
    <img src={logo} style={{width:'5%', marginLeft:'1rem'}} alt='logo' />
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0" style={{margin: '0% 0% 0% 35%', width:'30%', fontSize:'20px', fontWeight:'bold'}}>
      <li >
        <Link className='navbar-brand' to="/">Anasayfa</Link>
      </li>
      <li >
      <Link className='navbar-brand' to="/blogs">Blog</Link>
      </li>
      <li >
      <Link className='navbar-brand' to="/aboutus">Hakkımızda</Link>
      </li>
    </ul>
   
  </div>
</nav>
    </div>
  )
}

export default Navbar