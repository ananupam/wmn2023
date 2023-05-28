import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import mainpage from '../images/mainpage.png';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className='intro'>
        <Navbar/>
        <div>
                <img src={mainpage}></img>
        </div>

        <Footer/>
        </div>
  )
}

export default Homepage