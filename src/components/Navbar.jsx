import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>

<div className='navbar-brand'>REACT HOOKS</div>
<ul className='navbar-nav'>
<li className='nav-item'>
<Link to ='/Usestate' className='nav-link'> Usestate</Link>
</li>
<li className='nav-item'>
  <Link to ='/Useefect' className='nav-link'> Useefect</Link>

</li>
<li className='nav-item'>
  <Link to='/Usereducer' className='nav-link'> Usereducer</Link>
 </li>
 <li className='nav-item'>
  <Link to='/Usecontext' className='nav-link'> Usecontext</Link>
 </li>
 <li className='nav-item'>
  <Link to='/Useref' className='nav-link'> Useref</Link>
 </li>


</ul>
    </nav>
   
  )
}

export default Navbar