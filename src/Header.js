import React from 'react';
import { FaUser, FaCog, FaBell, FaArrowLeft} from 'react-icons/fa'; // Import the icons you want to use
import './Header.css';

const Header = () => {
  return (
    <div className="container-fluid">
      <header className="header">
        <h1>R7 System</h1>
      </header>
      <div className="header-icons">
        <FaUser className="icon" /> 
        <FaCog className="icon" /> 
        <FaBell className="icon" />
        <FaArrowLeft className="icon" />
      </div>
    </div>
  );
};

export default Header;
