import React,{ useState, useEffect } from 'react';

const Appointment = () => {
  const [date, setDate] = useState('');
  const [doctor, setDoctor] = useState('');
  const [time, setTime] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
      const response = await fetch('http://localhost:5005/appointment', {
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
        console.log("appointment successful");
      }
      
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  return (
    <div className='main_appointment'>
      <div className="appointment_form">
      <input
            type='text'
            placeholder='Doctor'
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          />
        <input
            type='text'
            placeholder='Date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type='text'
            placeholder='Status'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />

<div className='mor_slots'>
          <h1>Morning 09:00 AM to 12:00 PM</h1>

          <input
          type='radio'
          name='time'
          value='09:00'
          checked={time === '09:00'}
          onChange={handleTime}
        />
          <label>09:00</label>

          <input
          type='radio'
          name='time'
          value='10:00'
          checked={time === '10:00'}
          onChange={handleTime}
        />
          <label>10:00</label>

          <input
          type='radio'
          name='time'
          value='11:00'
          checked={time === '11:00'}
          onChange={handleTime}
        />
          <label>11:00</label>

          <input
          type='radio'
          name='time'
          value='12:00'
          checked={time === '12:00'}
          onChange={handleTime}
        />
          <label>12:00</label>
          </div>

          <div className='eve_slots'>
          <h1>Evening 05:00 PM to 08:00 PM</h1>

          <input
          type='radio'
          name='time'
          value='05:00'
          checked={time === '05:00'}
          onChange={handleTime}
        />
          <label>05:00</label>

          <input
          type='radio'
          name='time'
          value='06:00'
          checked={time === '06:00'}
          onChange={handleTime}
        />
          <label>06:00</label>

          <input
          type='radio'
          name='time'
          value='07:00'
          checked={time === '07:00'}
          onChange={handleTime}
        />
          <label>07:00</label>

          <input
          type='radio'
          name='time'
          value='08:00'
          checked={time === '08:00'}
          onChange={handleTime}
        />
          <label>08:00</label>
          </div>
          <button type='submit' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Appointment