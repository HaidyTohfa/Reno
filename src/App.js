// App.js
import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import UserManagement from './UserManagement';
import Header from './Header';

function App() {
  const userName = "Haidy Tohfa"; // Replace this with the actual user name

  return (
    <div className="App">
      
      <Sidebar />
      <Header userName={userName} />
      <div className="content">
      
        
        <UserManagement />
      </div>
    </div>
  );}

export default App;
