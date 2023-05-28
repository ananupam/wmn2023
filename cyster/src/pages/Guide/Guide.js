import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import causes from '../images/causes.png';
import fertility from '../images/fertility.png';
import mental from '../images/mental.png';
import sexual from '../images/sexual.png';
import treatment from '../images/treatment.png';
import longterm from '../images/longterm.png';
import periods from '../images/periods.png';
import symptoms from '../images/symptoms.png';

import './Guide.css'

const Guide = () => {
  return (
    <div className='guide'>
      <Navbar/>
      <h1 className='guide_main_head'>GUIDE BOOK</h1>
      <section className='guide_list'>

        <div className='guide_container'>
        <div className='guide_card'>
          <div className='guide_title'>
            <h1>CAUSES</h1>
          </div>
          <div className='guide_image'>
            <img src={causes}></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='guide_button'><Link to="/causes">Know More</Link></button>
        </div>

        <div className='guide_card'>
          <div className='guide_title'>
            <h1>SYMPTOMS</h1>
          </div>
          <div className='guide_image'>
            <img src={symptoms}></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='guide_button'><Link to="/symptoms">Know More</Link></button>
        </div>


        <div className='guide_card'>
          <div className='guide_title'>
            <h1>TREATMENT</h1>
          </div>
          <div className='guide_image'>
            <img src={treatment}></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='guide_button'><Link to="/treatment">Know More</Link></button>
        </div>
        </div>
        
        <div className='guide_container'>
        <div className='guide_card'>
          <div className='guide_title'>
            <h1>PERIODS</h1>
          </div>
          <div className='guide_image'>
            <img src={periods}></img>
          </div>
          <div className='guide_text'>
           
          </div>
          <button className='guide_button'><Link to="/periods">Know More</Link></button>
        </div>

        <div className='guide_card'>
          <div className='guide_title'>
            <h1>FERTILITY</h1>
          </div>
          <div className='guide_image'>
            <img src={fertility}></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='guide_button'><Link to="/fertility">Know More</Link></button>
        </div>

        <div className='guide_card'>
          <div className='guide_title'>
            <h1>SEXUAL HEALTH</h1>
          </div>
          <div className='guide_image'>
            <img src={sexual}></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='guide_button'><Link to="/sexualhealth">Know More</Link></button>
        </div>
        </div>

        <div className='guide_container'>
        <div className='guide_card'>
          <div className='guide_title'>
            <h1>MENTAL HEALTH</h1>
          </div>
          <div className='guide_image'>
            <img src={mental}></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='guide_button'><Link to="/mentalhealth">Know More</Link></button>
        </div>

        <div className='guide_card'>
          <div className='guide_title'>
            <h1>LONG TERM EFFECTS</h1>
          </div>
          <div className='guide_image'>
            <img src={longterm}></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='guide_button'><Link to="/longterm">Know More</Link></button>
        </div>

        <div className='guide_card'>
          <div className='guide_title'>
            <h1>WORKOUT GUIDE</h1>
          </div>
          <div className='guide_image'>
            <img src={longterm}></img>
          </div>
          <div className='guide_text'>
            
          </div>
          <button className='guide_button'><Link to="/longterm">Know More</Link></button>
        </div>
        </div>

      </section>
      <Footer/>
    </div>
  )
}

export default Guide