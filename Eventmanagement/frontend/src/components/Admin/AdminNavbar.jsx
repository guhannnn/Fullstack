// components/AdminNavbar.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import './AdminNavbar.css';


const AdminNavbar = () => {
  // console.log(sessionStorage.getItem("token"));
    return (
        <div>
            <div>
            <div className="page">
  
  <div id="nav-container">
    <div className="bg" />
    <div className="button" tabIndex={0}>
      <span className="icon-bar" />
      <span className="icon-bar" />
      <span className="icon-bar" />
    </div>
    <div id="nav-content" tabIndex={0}>
      <ul>
        <li>
          <a href="#0">Home</a>
        </li>
        <Link to="/dash" className="nav-link"> Dashboard</Link>
        <li>
          <a href="#0">Profile</a>
        </li>
        <li>
        <Link to="/ab" className="nav-link"> Edit Bookings</Link>
        </li>
        <li>
          <a href="#0">Payments</a>
        </li>
        <li>
          <a href="#0">Bookings</a>
        </li>
        
      </ul>
    </div>
  </div>
 
</div>

            </div>
        <nav className="navbar">
          
            
            <div className="container" style={{marginLeft:'50px'}}>
                <Link to="/homes" className="navbar-brand">Event Management App</Link>
            </div>
            <ul className="navbar-nav">
                
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Logout</Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">Gallery</Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">Management</Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">Services</Link>
                </li>

               
            </ul>
        </nav>
        
        </div>
    );
};

export default AdminNavbar;
