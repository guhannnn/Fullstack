// components/ViewBooking.js
// import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import './viewBooking.css'; // Import the CSS file
import Navbar from './Nabar';

const ViewBooking = () => {
    

    return (
        <div>
            <Navbar/>
        <div className="bookings-container">
            <h2> Slots</h2>
            <>
  <a href="https://front.codes/" className="logo hover-target" target="_blank">
    <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
  </a>
  <div className="section">
    <div className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h1 className="pb-4">
             <i className="uil uil-bus color-yellow" /> 
          </h1>
          <div className="section">
            <input
              className="checkbox-ticket"
              type="radio"
              name="ticket"
              id="ticket-1"
            />
            <label htmlFor="ticket-1">
              <span className="top-dots">
                <span className="section dots">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </span>
              <span className="duration">R part Hall</span>
              <span className="price mt-2 pb-4 mb-3">
                <sup>Kuniyamuthur</sup>2.95
              </span>
              <span className="section dots">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </span>
              <span className="section pt-4">
                <i className="uil uil-clock-two mt-3" />
              </span>
              <br></br>
              <span className="time mt-2">2:00 pm - 2:30 pm</span>
              <span className="bottom-dots">
                <span className="section dots">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </span>
            </label>
            {/*
             */}
            <input
              className="checkbox-ticket"
              type="radio"
              name="ticket"
              id="ticket-2"
            />
            <label htmlFor="ticket-2">
              <span className="top-dots">
                <span className="section dots">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </span>
              <span className="duration">R R Mahal</span>
              <span className="price mt-2 pb-4 mb-3">
                <sup>RS puram</sup>
              </span>
              <span className="section dots">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </span>
              <span className="section pt-4">
                <i className="uil uil-clock-two mt-3" />
              </span>
              <br></br>
              <span className="time mt-2">2:00 pm - 3:00 pm</span>
              <span className="bottom-dots">
                <span className="section dots">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </span>
            </label>
            {/*
             */}
            <input
              className="checkbox-ticket"
              type="radio"
              name="ticket"
              id="ticket-3"
            />
            <label htmlFor="ticket-3">
              <span className="top-dots">
                <span className="section dots">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </span>
              <span className="duration"> H partyHall</span>
              <span className="price mt-2 pb-4 mb-3">
                <sup>Ukkadam</sup>
              </span>
              <span className="section dots">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </span>
              <span className="section pt-4">
                <i className="uil uil-clock-two mt-3" />
              </span>
              <br></br>
              <span className="time mt-2">2:00 pm - 3:30 pm</span>
              <span className="bottom-dots">
                <span className="section dots">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </span>
            </label>
            <div className="w-100" />
            <a href="#" className="btn mt-4 mb-5">
              <i className="uil uil-ticket size-22 mr-2" />
              Book Slot
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

        </div>
        </div>
    );
};

export default ViewBooking;
