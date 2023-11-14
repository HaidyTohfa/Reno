// Header.js
import React, { useState } from 'react';
import { FaQuestionCircle, FaBell } from 'react-icons/fa';

const Header = ({ userName }) => {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  const calculateInitials = (name) => {
    const names = name.split(' ');
    return names.map((n) => n[0].toUpperCase()).join('');
  };

  const userInitials = calculateInitials(userName);

  const [showNotification, setShowNotification] = useState(false);

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  return (
    <div className="header">
      <div className="greeting">
        <span>Good morning</span>
        <span>{formattedDate}</span>
      </div>
      <div className="user-info">
        <FaQuestionCircle className="icon" />
        <FaBell className="icon" onClick={handleNotificationClick} />
        <span className="separator">&nbsp; | &nbsp;</span>
        <span>&nbsp;{userName}</span>
        <div className="user-initials">&nbsp;{userInitials}</div>
      </div>
      {showNotification && (
        <div className="notification-message">
          No notification yet.
        </div>
      )}
    </div>
  );
};

export default Header;
