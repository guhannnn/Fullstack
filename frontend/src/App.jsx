import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Home from './components/home.jsx';
import AddBooking from './components/Booking/AddBooking.jsx';
import ViewBooking from './components/ViewBooking.jsx';

import Adminlogin from './components/Admin/Adminlogin.jsx';
import AdminNavbar from './components/Admin/AdminNavbar.jsx';

import Events from './components/Booking/events.jsx';
import Dashboard from './components/Admin/dashboard.jsx';
import ProfilePage from './components/Booking/profile.jsx';
import Register from './components/Signup.jsx';
import Abook from './components/Admin/ABookings.jsx';
import Ebook from './components/Admin/Ebookings.jsx';




const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/add-booking" element={<AddBooking/>} />
                <Route path="/events" element={<Events/>} />
                <Route path="/view-booking" element={<ViewBooking/>} />
                <Route path="/dash" element={<Dashboard/>} />
                <Route path="/prof" element={<ProfilePage/>} />
                <Route path="/Admin" element={<Adminlogin/>} />
                <Route path="/homes" element={<AdminNavbar/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/Booking" element={<AddBooking/>} />
                <Route path="/ab" element={<Abook/>} />
                <Route path="/eb" element={<Ebook/>} />
                
            
            
            </Routes>
        </Router>
    );
};

export default App;
