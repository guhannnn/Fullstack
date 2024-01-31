import React from 'react';
import Navbar from '../Nabar';
import '../Booking/profile.css';

function ProfilePage() {
  return (
    
    <div className="profile-page">
<div>
    <Navbar/>

</div>
      <h1>Profile</h1>
      <div className="profile-info">
        <img src="profile-picture.jpg" alt="Profile" />
        <div className="user-details">
          <h2>User Name</h2>
          <p>Email: user@example.com</p>
          <p>Location: City, Country</p>
          {/* Add more user details as needed */}
        </div>
      </div>
      <div className="profile-actions">
        <button>Edit Profile</button>
        <button>Change Password</button>
        {/* Add more profile actions as needed */}
      </div>
    </div>
  );
}

export default ProfilePage;
