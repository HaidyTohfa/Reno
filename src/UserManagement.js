// UserManagement.js
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; 
import { FaCalendar } from 'react-icons/fa'; // Import the calendar icon

const UserManagement = () => {

 
  const [selectedRows, setSelectedRows] = useState([]);



  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [username, setUsername] = useState('');
  const [userStatus, setUserStatus] = useState(''); // Assuming user status is a string
  const [creationDate, setCreationDate] = useState('');

  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
  };

 
  const calculateInitialsUsers = (name) => {
    const names = name.split(' ');
    return names.map((n) => n[0].toUpperCase()).join('');
  };


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };



  const handleApplyFilters = () => {
    // Implement logic to apply filters (e.g., make an API call)
    console.log('Applying filters:', { searchQuery, username, userStatus, creationDate });

    // Implement logic to perform the search with the applied filters
    console.log('Searching with filters:', { searchQuery, username, userStatus, creationDate });
  };



  const handleCheckboxChange = (userId) => {
    if (selectedRows.includes(userId)) {
      setSelectedRows(selectedRows.filter((id) => id !== userId));
    } else {
      setSelectedRows([...selectedRows, userId]);
    }
  };

  const handleAddFormToggle = () => {
    setShowAddForm(!showAddForm);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserData({
      ...newUserData,
      [name]: value,
    });
  };


//   const handleAddUser = () => {
// Assuming you have state variables like this:
const [userData, setUserData] = useState([]);
const [newUserData, setNewUserData] = useState({
  fullName: '',
  username: '',
  email: '',
  userGroup: '',
//   userInitials: '',
});

const [showAddForm, setShowAddForm] = useState(false);

const handleAddUser = () => {
  const { fullName, username, email, userGroup } = newUserData;
  

  if (fullName.trim() && username.trim() && email.trim() && userGroup.trim()) {
    const newUser = {
      id: userData.length + 1,
      name: fullName,
      username,
      email,
      group: userGroup,
      status: 'Active',
    //   userInitials : calculateInitialsUsers(fullName),
      createdOn: new Date().toLocaleDateString('en-US'),

    };

    setUserData([...userData, newUser]);
    setNewUserData({
      fullName: '',
      username: '',
      email: '',
      userGroup: '',
    });
    setShowAddForm(false);
  } else {
    alert('Please fill in all fields.');
  }
};


const handleResetFields = () => {
    setNewUserData({
      fullName: '',
      username: '',
      email: '',
      userGroup: '',
    });
  };

    
  
  
  

  // Filter users based on the search query
  const filteredUsers = userData.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.group.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="UserManagement">
      <h2>User Management</h2>
      <div>
        <button onClick={handleAddFormToggle} className="rounded-button">+ Add new</button>
      </div>

      {/* Search Filter */}
      <div>
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Enter search query"
        />

{/* Clickable "All filters" text */}
        <span className="toggle-filters" onClick={handleToggleFilters}>
          All filters
        </span>
        {/* Additional filters */}
        {showFilters && (
          <div className="additional-filters">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

<label htmlFor="userStatus">User Status: </label>
            <select
              id="userStatus"
              value={userStatus}
              onChange={(e) => setUserStatus(e.target.value)}
            >
              <option value="">Select</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            <label htmlFor="creationDate">Creation Date: </label>
            <div className="calendar-container">
              <input
                type="text"
                id="creationDate"
                placeholder="Select date"
                value={creationDate}
                onChange={(e) => setCreationDate(e.target.value)}
              />
              <FaCalendar className="calendar-icon" />
              {/* Calendar component goes here */}
            </div>

            </div>
        )}
        {/* Apply All Filters button */}
        {showFilters && (
          <button className="rounded-button" onClick={handleApplyFilters}>
            Apply All Filters
          </button>
        )}

      </div>

      

      {/* Popup Form */}
      {showAddForm && (
        <div className="popup-overlay">
          <div className="popup-form">
          
  

          <form className="user-form">
          {/* <h3>Add new user</h3> */}

          <div><FaTimes className="close-icon" onClick={handleAddFormToggle} />
          
          {/* 'Add User' label at the upper right */}
          <div className="add-user-label">Add User</div></div>
          <div className="spacer" />
  <div className="form-row">
    <label htmlFor="fullName">Full Name:</label>
    <input
      type="text"
      id="fullName"
      name="fullName"
      value={newUserData.fullName}
      onChange={handleInputChange}
    />
  </div>

  <div className="form-row">
    <label htmlFor="username">Username:</label>
    <input
      type="text"
      id="username"
      name="username"
      value={newUserData.username}
      onChange={handleInputChange}
    />
  </div>

  <div className="form-row">
    <label htmlFor="email">Email Address:</label>
    <input
      type="email"
      id="email"
      name="email"
      value={newUserData.email}
      onChange={handleInputChange}
    />
  </div>

  <div className="form-row">
    <label htmlFor="userGroup">User Group:</label>
    <input
      type="text"
      id="userGroup"
      name="userGroup"
      value={newUserData.userGroup}
      onChange={handleInputChange}
    />
  </div>

  <div className="form-buttons">
 

    <button type="button" onClick={handleAddUser}>
      Add User
    </button>
    <button type="buttonCancel" onClick={handleAddFormToggle}>
      Cancel
    </button>
    <span className="reset-fields" onClick={() => handleResetFields({})}>
              Reset Fields
            </span>
  </div>
</form>

{/* 
            <button onClick={handleAddFormToggle}>Cancel</button> */}
          </div>
        </div>
      )}

      {/* Table */}
      <table>
        {/* Table Header */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email Address</th>
            <th>Group</th>
            <th>Status</th>
            <th>Created On</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>
  <div className="checkbox-and-info">
    <input
      type="checkbox"
      checked={selectedRows.includes(user.id)}
      onChange={() => handleCheckboxChange(user.id)}
    />
    <div className="user-initials">
      {calculateInitialsUsers(user.name)}
    </div>
    <div className="user-name">{user.name}</div>
  </div>
</td>

              
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.group}</td>
              <td>{user.status}</td>
              <td>{user.createdOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
