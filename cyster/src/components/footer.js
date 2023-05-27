import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='main_foot'>
        <div className='about_container'>
            <ul>
                <li>ABOUT US</li>
                <li>add description</li>
                <li>Media Icons</li>
            </ul>
        </div>
        <div className='contact_container'>
            <ul>
                <li>Wework, Bangalore</li>
                <li>+91 999 999 9999</li>
                <li>email@gmail.com</li>
            </ul>
        </div>
        <div className='company_container'>
            <ul>
            <li>CYSTER</li>
            <li>Home | About Us</li>
            <li> Cyster @ 2023</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer