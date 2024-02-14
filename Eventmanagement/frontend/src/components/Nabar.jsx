import React from 'react';
import { Link } from 'react-router-dom';
import './navabar.css'

const Navbar = ({ role }) => {
    return (
        <nav className="navbar">
            <div className="container" style={{marginLeft:'20px'}}>
                <Link to="/home" className="navbar-brand">Event Management </Link>
                <ul className="navbar-nav">
                    {role === 'admin' ? (
                        <>
                        </>
                    ) : (
                        <>
                        <li className="nav-item">
                                <Link to="/add-booking" className="nav-link">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/events"} className="nav-link">Add</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/view-booking" className="nav-link"> Slots</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about-us" className="nav-link">About us</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/Admin" className="nav-link">Admin</Link>
                            </li> */}


                        </>
                    )}
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Logout</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/prof" className="nav-link">Profile</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
