import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom'; 
import { booking } from "../../Services/user";
import './Abook.css';
import Navbar from './AdminNavbar';


const Abook = () => {
  const [bookingid, setBookingId] = useState("");
  const [bookingname, setBookingName] = useState("");
  const [status, setStatus] = useState("");
  const [cname, setCname] = useState("");

  const Navigate=useNavigate("");
  

  const handleBooking = (e) => {
    e.preventDefault();
  
    const formD = {
      bookingid: bookingid,
      bookingname: bookingname,
      status: status,
      cname: cname
    };

    const token = sessionStorage.getItem('token'); // Retrieve token from session storage

    booking(formD, token)
      .then((res) => {
        // Handle successful booking
        console.log('Booking success:', res);
        
        setBookingName("");
        setStatus("");
        setCname("");
        Navigate("/eb");
      })
      .catch((err) => {
        console.error('Booking failed:', err);
      });
  };

  return (
    <div>
    <Navbar/>
  
    <div>
      <div id="feedback-form" style={{marginTop:150}}>
        <h2 className="header">Events Today</h2>
        <div>
          <form>
          
            <input type="text" name="CustomerName" placeholder="CustomerName" value={cname} onChange={(e) => setCname(e.target.value)} />
            <input type="text" name="bookingname" placeholder="EventName" value={bookingname} onChange={(e) => setBookingName(e.target.value)} />
            <select className="s" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option>-Select-</option>
              <option>Upcoming</option>
              <option>Completed</option>
            </select>
            <button type="submit" onClick={handleBooking}>Add</button>
            <button type="submit" >Update</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Abook;
