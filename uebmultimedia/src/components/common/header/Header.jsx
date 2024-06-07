import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const history = useHistory(); // Hook to access the history object

  const handleNavigation = (path) => {
    history.push(path); // Navigate to the path
    window.location.reload(); // Force a reload of the page
  };

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li onClick={() => handleNavigation('/')}>Home</li>
            <li onClick={() => handleNavigation('/courses')}>All Courses</li>
            <li onClick={() => handleNavigation('/about')}>About</li>
            <li onClick={() => handleNavigation('/team')}>Team</li>
            <li onClick={() => handleNavigation('/pricing')}>Pricing</li>
            <li onClick={() => handleNavigation('/journal')}>Journal</li>
            <li onClick={() => handleNavigation('/contact')}>Contact</li>
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
