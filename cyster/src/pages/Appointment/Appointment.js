import React,{ useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Appointment = () => {
  const [date, setDate] = useState('');
  const [doctor, setDoctor] = useState('');
  const [time, setTime] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
      const response = await fetch('http://localhost:5005/appointment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          date: date,
          doctor: doctor,
          time: time,
          status: status,
        })
      });
      const responseData = await response.json();
      if(responseData['error']) {
        console.log(responseData.error)
        throw new Error(responseData.error);
      }else{
        console.log("login successful");
      }
      
  };

  return (
    <div>Appointment</div>
  )
}

export default Appointment