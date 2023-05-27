import React, { useState }  from 'react';
import './Navbar.css'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
      setIsLoggedIn(true);
    };

    const handleLogout = () => {
      setIsLoggedIn(false);
    };

  return (
    <div>
        <div className='main_nav'>
            <div className='logo_container'>CYSTER</div>
            <div className='element_container'>
                <ul>
                    <li>Guide</li>
                    <li>Consult</li>
                    {isLoggedIn ? (<li>Profile</li>) : null}
                    <li>{isLoggedIn ? (
                    <button onClick={handleLogout}>Logout</button>) : (<button onClick={handleLogin}>Login</button>)}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar