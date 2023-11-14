import React, { useState } from 'react';
import { FaSearch, FaCog, FaAngleDown, FaAngleUp, FaUser } from 'react-icons/fa';
import { GiPoolTriangle } from 'react-icons/gi';
import UserManagement from './UserManagement'; // Import your UserManagement component
import Emptypage from './Emptypage';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [usersExpanded, setUsersExpanded] = useState(false);
  const [busineeExpanded, setBusinessExpanded] = useState(false);
  const [AtmExpanded, setAtmExpanded] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  const handleAtmClick = () => {
    setAtmExpanded(!AtmExpanded);
    // Reset the selected page when Users is clicked to show the initial state
    setSelectedPage(null);
  };


  const handleBusinessClick = () => {
    setBusinessExpanded(!busineeExpanded);
    // Reset the selected page when Users is clicked to show the initial state
    setSelectedPage(null);
  };

  const handleUsersClick = () => {
    setUsersExpanded(!usersExpanded);
    // Reset the selected page when Users is clicked to show the initial state
    setSelectedPage(null);
  };

  const handleSubItemClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="sidebar">
      <div className="icon">
        <GiPoolTriangle className="custom-icon" />
      </div>
      <div className="spacer" />
      <div className="search">
        <FaSearch />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="spacer" />
      <div className="item">
        <FaCog />
        Settings
      </div>
      <div className="spacer" />
      <div className="item" onClick={handleAtmClick}>
      {AtmExpanded? <FaAngleUp /> : <FaAngleDown />}
       
        ATM Settings
        {AtmExpanded && (
        <ul>
            {/* Call handleSubItemClick with the selected page when a subitem is clicked */}
            <li >item 1</li>
            <li>item 2</li>
            
          </ul>  )}
      </div>
      <div className="spacer" />
      <div className="item" onClick={handleUsersClick}>
        {usersExpanded ? <FaAngleUp /> : <FaAngleDown />}
        User Management
        {usersExpanded && (
          <ul>
            {/* Call handleSubItemClick with the selected page when a subitem is clicked */}
            <li onClick={() => handleSubItemClick('Users')}>Users</li>
            <li onClick={() => handleSubItemClick('Emptypage')}>Profiles</li>
            <li onClick={() => handleSubItemClick('Emptypage')}>Groups</li>
          </ul>
        )}
      </div>
      <div className="spacer" />
      <div className="item" onClick={handleBusinessClick}>
      {usersExpanded ? <FaAngleUp /> : <FaAngleDown />}
        Business Setup
        {busineeExpanded && (
        <ul>
            {/* Call handleSubItemClick with the selected page when a subitem is clicked */}
            <li >item 1</li>
            <li >item 2</li>
            
          </ul>  )}
      </div>
      
      {/* Content based on selected page */}
      {selectedPage === 'Users' && <UserManagement />}
      {selectedPage === 'Emptypage' && <Emptypage />}
      {/* Add other pages here */}

      <div className="spacer" />
      <div className="item"> Licence Management</div>
    </div>
  );
};

export default Sidebar;
