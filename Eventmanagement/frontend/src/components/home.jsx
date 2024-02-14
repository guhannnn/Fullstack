// Home.js
import React from 'react';
import Navbar from './Nabar';
import './home.css';

function Home() {
    console.log(sessionStorage.getItem("token"));
    return (
        <div>
           
                <Navbar />
          
            <main>
              
            <section className="home">
      <div className="content" >
        <div className="owl-carousel owl-theme" >
          <div className="item" >
            <img src="https://jandevents.com/wp-content/uploads/jand-party.jpg" alt="" />
            <div className="text">
              <h1>Start Hosting your events for free</h1>
              <p>"Unforgettable Events, Expertly Managed: Your One-Stop Event Planning Destination!"</p>
              <div className="flex">
                <button className="primary-btn"><i className="fas fa-plus-circle fa-lg" id="icon1"></i><a>Create Event</a></button>
                <button className="secondary-btn"><a href="aboutus.html">CONTACT US</a></button>
              </div>
            </div>
          </div>
          <div className="item">
          
            
            
            
          </div>
        </div>
      </div>
    </section>
    <section className="book">
        <div className="container flex_space">
          <div className="text">
            <h1>
              <span>Book </span> Your Events
            </h1>
          </div>
          <div className="form">
            <form className="grid">
              <input type="date" placeholder="Arrival Date" />
              <input type="date" placeholder="Departure Date" />
              <input type="text" placeholder="Location" />
              <input type="submit" value="CHECK AVAILABILITY" />
            </form>
          </div>
        </div>
      </section>
            
            <section className="about top">
        <div className="container flex">
          <div className="left">
            <div className="heading">
              <h1>WELCOME</h1>
              <h2>Eventup</h2>
            </div>
            <p>Eventup is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives. From music festivals, marathons, conferences, community rallies, and fundraisers, to gaming competitions and air guitar contests. Our mission is to bring the world together through live experiences.</p>
            <button className="primary-btn">ABOUT US</button>
          </div>
          <div className="right">
            <div className="img-hover-zoom">
              <img src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
          </div>
        </div>
      </section>
               
  
      <section className="counter top">
      <div className="container grid">
        <div className="box">
          <h1>2500+</h1>
          <hr />
          <span>Customer</span>
        </div>
        <div className="box">
          <h1>1250+</h1>
          <hr />
          <span>Happy Customer</span>
        </div>
        <div className="box">
          <h1>150+</h1>
          <hr />
          <span>Expert Technicians</span>
        </div>
        <div className="box">
          <h1>3550+</h1>
          <hr />
          <span>Desktop Repaired</span>
        </div>
      </div>
    </section>
    
     
      
                
            <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>Eventup is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives. Our mission is to bring the world together through live experiences.</p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Company History</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>MM towers Sub.Major Laxmi Chand Rd, Sector 18, Gurugram, Haryana 122008</p>
            <p><i className="fa fa-phone"></i> +91 657 524 3326</p>
            <p><i className="fa fa-envelope"></i> info@Eventup.com</p>
          </div>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 Eventup. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
            </main>
        </div>
    );
}

export default Home;
