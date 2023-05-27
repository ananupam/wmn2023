import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className='main_nav'>
            <div className='logo_container'>CYSTER</div>
            <div className='element_container'>
                <ul>
                    <li>Guide</li>
                    <li>Consult</li>
                    <li>Dashboard</li>
                    <li>Signup</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar