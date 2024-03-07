// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FaCube, FaHome, FaSave, FaCog, FaCheck,  FaList, } from 'react-icons/fa';
import {FaUsersViewfinder } from 'react-icons/fa6'

const Sidebar = () => {
  return (  
    <div className="sidebar-container">
      <div className="section">
        <h2>Favorites</h2>
        <ul>
          <li>
            <Link to="/ad-dashboard"> <FaHome/> Ad Dashboard</Link>
          </li>
          <li>
            <Link to="/divisions"> <FaList /> Divisions</Link>
          </li>
          <li>
            <Link to="/ad-item-summary"> <FaCube/> Ad Item Summary</Link>
          </li>
        </ul>
      </div>
      <div className="section">
        <h2>Main Menu</h2>
        <ul>
          <li>
            <Link to="/ad-item-code"> <FaUsersViewfinder/> Ad Item Code</Link>
          </li>
          <li>
            <Link to="/divisions"> <FaCheck/> Divisions</Link>
          </li>
          <li>
            <Link to="/item-groups"> <FaSave/> Item Groups</Link>
          </li>
          <li>
            <Link to="/deal-types">Deal Types</Link>
          </li>
          <li>
            <Link to="/performances">Performances</Link>
          </li>
          <li>
            <Link to="/link-groups">Link Groups</Link>
          </li>
          <li>
            <Link to="/cdm-schedule">CDM Schedule</Link>
          </li>
          <li>
            <Link to="/user-preference"> <FaCog/> User Preference</Link>
          </li>
          <li>
            <Link to="/ad-programs">Ad Programs</Link>
          </li>
          <li>
            <Link to="/misc">Misc</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
