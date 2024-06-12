import React, { useState } from "react";
import { useHistory, Link  } from "react-router-dom";
import Head from "./Head";
import "./header.css";
import { decodeToken } from "../../User/jwtUtils";

const Header = () => {
  const [click, setClick] = useState(false);
  const history = useHistory(); // Hook to access the history object

  const handleNavigation = (path) => {
    history.push(path); // Navigate to the path
    window.location.reload(); // Force a reload of the page
  };

  const token = localStorage.getItem('token');
  const decodedToken = decodeToken(token);
 let isAdmin;
 if(token){
  isAdmin = decodedToken.role === 'admin';
 }

 const handleLogout = () => {
  
  localStorage.removeItem('token');
  history.push('/');
  window.location.reload()
};
  
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">All Courses</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/journal">Journal</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            
            {localStorage.getItem('token') ? (
          
          <li onClick={handleLogout} style={{ border: "none", color: 'white'}}  >Logout</li>
        
      ) : (
        <li><Link to="/login">Login</Link></li>
      )}
       {isAdmin && <li onClick={() => handleNavigation('/admin')} style={{color: 'white'}}>
                    Dashboard
                  </li>} 
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
