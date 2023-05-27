import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from "react-router-dom";

const Consult = () => {
    const [doctors, setDoctors] = useState([]);
  
    useEffect(() => {
      // Fetch doctors from MongoDB
      const fetchDoctors = async () => {
        const response = await fetch('http://localhost:5005/doctor/');
        const doctors = await response.json();
        setDoctors(doctors);
      };
  
      fetchDoctors();
    }, []);
  
    return (
      <div className='consult'>
        <Navbar/>
        <div className='consult_list'>
          <h1 className='consult_main_head'>CONSULT OUR DOCTORS</h1>
  
          {doctors.map((doctor) => (
            <div className='consult_container' key={doctor.id}>
              <h3>{doctor.name}</h3>
              <span>{doctor.speciality}</span>
              <br />
              <button className='consult_button'><Link to={`/appointment/${doctor.name}`}>Book an Appointment</Link></button>
            </div>
          ))}
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default Consult