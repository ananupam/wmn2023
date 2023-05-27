import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [mode, setMode] = useState('login');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'login') {
      // Do login logic here
    } else {
      // Do signup logic here
    }
  };

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <div className='main_login'>
      <div className='login_form'>
        <input
          type='radio'
          name='mode'
          value='login'
          checked={mode === 'login'}
          onChange={handleModeChange}
        />
        <label >Login</label>
        <input
          type='radio'
          name='mode'
          value='signup'
          checked={mode === 'signup'}
          onChange={handleModeChange}
        />
        <label >Signup</label>
          {mode === 'signup' ? (
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : null}
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {mode === 'signup' ? (
          <input
            type='repassword'
            placeholder='re-enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        ) : null}
        {mode === 'signup' ? (
          <input
            type='text'
            placeholder='Phone Number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        ) : null}
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Login;