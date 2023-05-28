import React,{ useState, useEffect } from 'react';
import './Appointment.css';
import { Link,useParams } from 'react-router-dom';

const Appointment = () => {
  const [date, setDate] = useState('');
  const [doctor, setDoctor] = useState('');
  const [time, setTime] = useState('');
  const [status, setStatus] = useState('Scheduled');

  const gid = useParams().docID;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(time,status);
      const response = await fetch('http://localhost:5005/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          date: date,
          doctor: gid,
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
        setDoctor(gid);
        window.location.href = '/';
      }
      
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  return (
    <div className='main_appointment'>
      <div className='appointments_left'>
                <p>APPOINTMENT BOOKING PORTAL</p>
                <ul className='bookings_left_description'>
                    <li>We offer comfortable and convenient 24/7 bookings.</li>
                    <li>We save your time- No waiting rooms, no road travel.</li>
                    <li>We offer a wide variety of doctors to choose from.</li>
                </ul>
                <p> HASSLE-FREE BOOKINGS.</p>
            </div>
      <div className="appointments_right">
      <div className='heading'>APPOINTMENT FOR- {gid}</div>
        <input
            type='text'
            placeholder='Date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />


          <div className='mor_slots'>
          <p>MORNING SLOTS</p>

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
          <p>EVENING SLOTS</p>

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
          <button type='submit'><Link to={`/consult`}>Cancel</Link></button>
      </div>
    </div>
  )
}

export default Appointment