import React, { useEffect, useState }  from 'react';
import './Navbar.css'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleLogin = () => {
      window.location.href = '/login';
    };

    const handleLogout = () => {
      setIsLoggedIn(false);
    };

    const getIsLoggedIn = () => {
      return localStorage.getItem("isLogin") === "true";
    };
    
    useEffect(() => {
      setIsLoggedIn(getIsLoggedIn());
    }, []);

    
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