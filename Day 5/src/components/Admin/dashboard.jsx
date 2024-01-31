// components/AdminNavbar.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import './dash.css';


const Dashboard = () => {
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
        <li>
          <a href="#0">Dashboard</a>
        </li>
        <li>
          <a href="#0">Profile</a>
        </li>
        <li>
          <a href="#0">Bookings</a>
        </li>
        <li>
          <a href="#0">Payments</a>
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
        <div>
        <div className="main-container">
  <div className="year-stats">
    <div className="month-group">
      <div className="bar h-100" />
      <p className="month">Jan</p>
    </div>
    <div className="month-group">
      <div className="bar h-50" />
      <p className="month">Feb</p>
    </div>
    <div className="month-group">
      <div className="bar h-75" />
      <p className="month">Mar</p>
    </div>
    <div className="month-group">
      <div className="bar h-25" />
      <p className="month">Apr</p>
    </div>
    <div className="month-group selected">
      <div className="bar h-100" />
      <p className="month">May</p>
    </div>
    <div className="month-group">
      <div className="bar h-50" />
      <p className="month">Jun</p>
    </div>
    <div className="month-group">
      <div className="bar h-75" />
      <p className="month">Jul</p>
    </div>
    <div className="month-group">
      <div className="bar h-25" />
      <p className="month">Aug</p>
    </div>
    <div className="month-group">
      <div className="bar h-50" />
      <p className="month">Sep</p>
    </div>
    <div className="month-group">
      <div className="bar h-75" />
      <p className="month">Oct</p>
    </div>
    <div className="month-group">
      <div className="bar h-25" />
      <p className="month">Nov</p>
    </div>
    <div className="month-group">
      <div className="bar h-100" />
      <p className="month">Dez</p>
    </div>
  </div>
  <div className="stats-info">
    <div className="graph-container">
      <div className="percent">
        <svg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle"
            strokeDasharray="100, 100"
            d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray="85, 100"
            d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray="60, 100"
            d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray="30, 100"
            d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
      </div>
      <p>Total bookings: 202</p>
    </div>
    <div className="info">
      <p>
        Most Booked category <br />
        <span>Wedding &amp; Dining</span>
      </p>
      <p>
        Total categories <span>6</span>
      </p>
      <p>
        Booking per day  <span>6</span>
      </p>
    </div>
  </div>
</div>

        </div>
        
        <br></br>
        <br></br>
        <br></br>
        <div class="pie">
  <div class="html">19% HTML</div>
  <div class="css">81% CSS</div>
</div>
<br></br>
        </div>
    );
};

export default Dashboard;
