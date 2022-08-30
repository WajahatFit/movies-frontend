import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';


export default function Navbar() {
  const navigate = useNavigate();
  return (
    
    <>
    
    <div className='navbar'>
      <ul>
        <li><NavLink to='/'  className={(element) => element.isActive ? 'selected' : 'not'}>Home</NavLink></li>
        <li><NavLink to='/new' className={(element) => element.isActive ? 'selected' : 'not'}>New</NavLink></li>

        <button onClick={() => navigate(-1)}>Go back</button>
      </ul>
      {/* Should use react-router-dom NavLinks to browse through the different pages */}
      </div>
    </>
      

  )
}
