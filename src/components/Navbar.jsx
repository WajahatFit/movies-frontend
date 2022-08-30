import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';


export default function Navbar() {
  const navigate = useNavigate();
  return (
    
    <>
    
    <div className='navbar'>
      <ul>
        <li className='li'><NavLink to='/'  className={(element) => element.isActive ? 'form--btn' : 'not'}>Home</NavLink></li>
        <li className='li'><NavLink to='/new' className={(element) => element.isActive ? 'form--btn' : 'not'}>New</NavLink></li>

        <button onClick={() => navigate(-1)}>Go back</button>
      </ul>
      {/* Should use react-router-dom NavLinks to browse through the different pages */}
      </div>
    </>
      

  )
}
