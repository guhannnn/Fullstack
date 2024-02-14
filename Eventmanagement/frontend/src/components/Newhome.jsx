function Nhome(){
    return(
<>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Eventup</title>
  <link rel="stylesheet" href="./css/style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css"
    integrity="sha512-UTNP5BXLIptsaj5WdKFrkFov94lDx+eBvbKyoe1YAfjeRPC+gT5kyZ10kOHCfNZqEui1sxmqvodNUx3KbuYI/A=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
    integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <header>
    <div className="content flex_space">
      <div className="logo">
        <img src="images/logo.png" alt="" />
      </div>
      <div className="navlinks">
        <ul id="menulist">
          <li>
            <a href="#home">home</a>{" "}
          </li>
          <li>
            {" "}
            <button className="primary-btn">
              <i className="far fa-plus fa-lg" />
              <a href="CreateEvent.html" style={{ marginLeft: "-10px" }}>
                Create Event
              </a>
            </button>{" "}
          </li>
          <li>
            <a href="services.html">Services</a>{" "}
          </li>
          <li>
            {" "}
            <button className="primary-btn">
              <a href="BrowseEvents.html">Browse Events</a>
            </button>{" "}
          </li>
          <li>
            <a href="aboutus.html">about us</a>{" "}
          </li>
          <li>
            {" "}
            <i className="fa fa-search" />{" "}
          </li>
          <li>
            {" "}
            <button className="primary-btn">
              <a href="Login.html">Login</a>
            </button>{" "}
          </li>
        </ul>
        <span className="fa fa-bars" onclick="menutoggle()" />
      </div>
    </div>
  </header>
  <section className="home">
    <div className="content">
      <div className="owl-carousel owl-theme">
        <div className="item">
          <img src="images/banner-1.png" alt="" />
          <div className="text">
            <h1>Start Hosting your events for free</h1>
            <p>
              "Unforgettable Events, Expertly Managed: Your One-Stop Event
              Planning Destination!"
            </p>
            <div className="flex">
              <button className="primary-btn">
                <i className="fas fa-plus-circle fa-lg" id="icon1" />
                <a href="CreateEvent.html">Create Event</a>
              </button>
              <button className="secondary-btn">
                <a href="aboutus.html">CONTACT US</a>
              </button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="images/banner-2.png" alt="" />
          <div className="text">
            <h1>Start Hosting your events for free</h1>
            <p>
              "Bringing Your Vision to Life: Exceptional Event Planning Services
              Just a Click Away!"
            </p>
            <div className="flex">
              <button className="primary-btn">
                <i className="fas fa-plus-circle fa-lg" id="icon1" />
                <a href="CreateEvent.html">Create Event</a>
              </button>
              <button className="secondary-btn">
                <a href="aboutus.html">CONTACT US</a>
              </button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="images/banner-3.png" alt="" />
          <div className="text">
            <h1 style={{ color: "rgb(2, 2, 2)" }}>
              Start Hosting your events for free
            </h1>
            <p style={{ color: "rgb(2, 2, 2)" }}>
              "From Concept to Reality: Elevate Your Events with Our
              Professional Planning Services!"
            </p>
            <div className="flex">
              <button className="primary-btn">
                <i className="fas fa-plus-circle fa-lg" id="icon1" />
                <a href="CreateEvent.html">Create Event</a>
              </button>
              <button className="secondary-btn">
                <a href="aboutus.html">CONTACT US</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="book">
    <div className="container flex_space">
      <div className="text">
        <h1>
          {" "}
          <span>Book </span> Your Events{" "}
        </h1>
      </div>
      <div className="form">
        <form className="grid">
          <input type="date" placeholder="Araival Date" />
          <input type="date" placeholder="Departure Date" />
          <input type="text" placeholder="Location" />
          <input type="submit" defaultValue="CHECK AVAILABILITY" />
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
        <p>
          Eventup is a global self-service ticketing platform for live
          experiences that allows anyone to create, share, find and attend
          events that fuel their passions and enrich their lives. From music
          festivals, marathons, conferences, community rallies, and fundraisers,
          to gaming competitions and air guitar contests. Our mission is to
          bring the world together through live experiences.
        </p>
        <button className="primary-btn">ABOUT US</button>
      </div>
      <div className="right">
        <div className="img-hover-zoom">
          <img src="images/about.png" alt="" />
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
        <span>Desktop Reaired</span>
      </div>
    </div>
  </section>
  <section className="rooms">
    <div className="container top">
      <div className="heading">
        <h1>EXPOLRE</h1>
        <h2>Top selling Events</h2>
        <p>"Experience the unforgettable"</p>
      </div>
      <div className="content mtop">
        <div className="owl-carousel owl-carousel1 owl-theme">
          <div className="items">
            <div className="image">
              <div className="img-hover-zoom">
                <img src="images/room-1.png" alt="" />
              </div>
            </div>
            <div className="text">
              <h2>Global marketing conference</h2>
              <div className="rate flex">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <p> Business &amp; seminar</p>
              <div className="button flex">
                <button className="primary-btn">BOOK NOW</button>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="image">
              <div className="img-hover-zoom">
                <img src="images/room-2.png" alt="" />
              </div>
            </div>
            <div className="text">
              <h2>Caribbean karaoke Nights</h2>
              <div className="rate flex">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <p>Music &amp; concerts</p>
              <div className="button flex">
                <button className="primary-btn">BOOK NOW</button>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="image">
              <div className="img-hover-zoom">
                <img src="images/room-3.png" alt="" />
              </div>
            </div>
            <div className="text">
              <h2>VR assistant workshop</h2>
              <div className="rate flex">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <p>Business and seminar</p>
              <div className="button flex">
                <button className="primary-btn">BOOK NOW</button>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="image">
              <div className="img-hover-zoom">
                <img src="images/room-4.png" alt="" />
              </div>
            </div>
            <div className="text">
              <h2>Winter wine Night</h2>
              <div className="rate flex">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <p>Food and Drink</p>
              <div className="button flex">
                <button className="primary-btn">BOOK NOW</button>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="image">
              <div className="img-hover-zoom">
                <img src="images/room-5.png" alt="" />
              </div>
            </div>
            <div className="text">
              <h2>Digital marketing seminar</h2>
              <div className="rate flex">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <p>Business and seminar</p>
              <div className="button flex">
                <button className="primary-btn">BOOK NOW</button>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="image">
              <div className="img-hover-zoom">
                <img src="images/room-6.png" alt="" />
              </div>
            </div>
            <div className="text">
              <h2>Expresso food fare</h2>
              <div className="rate flex">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <p>Food and drink</p>
              <div className="button flex">
                <button className="primary-btn">BOOK NOW</button>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="image">
              <div className="img-hover-zoom">
                <img src="images/room-7.png" alt="" />
              </div>
            </div>
            <div className="text">
              <h2>Seven Rocks Show</h2>
              <div className="rate flex">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <p>Music and concerts</p>
              <div className="button flex">
                <button className="primary-btn">BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="services top">
    <div className="container">
      <div className="heading">
        <h1>SERVICES</h1>
        <h2>Our Services</h2>
        <p>We have Power that Brings a Smile to your Fact</p>
      </div>
      <div className="content flex_space">
        <div className="left grid2">
          <div className="box">
            <div className="text">
              <i className="fa-solid fa-briefcase" />
              <h3>Business and seminars</h3>
            </div>
          </div>
          <div className="box">
            <div className="text">
              <i className="fa-solid fa-bicycle" />
              <h3>Sports and fitness</h3>
            </div>
          </div>
          <div className="box">
            <div className="text">
              <i className="fa-solid fa-music" />
              <h3>Music and concerts</h3>
            </div>
          </div>
          <div className="box">
            <div className="text">
              <i className="fa-solid fa-utensils" />
              <h3>Food and drink</h3>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="img-hover-zoom">
            <img src="images/service.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div id="lgx-travelinfo" className="lgx-travelinfo">
      <div className="lgx-inner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="lgx-heading">
                <h3 className="subheading">How it works</h3>
                <h2 className="heading">For Customers</h2>
              </div>
            </div>
            {/*//main COL*/}
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="lgx-travelinfo-content">
                <div className="lgx-travelinfo-single">
                  <i className="fas fa-calendar-alt fa-4x" />
                  <h3 className="title">1. Choose Event</h3>
                  <p className="info">Signup, choose your favorite event.</p>
                </div>
                <div className="lgx-travelinfo-single">
                  <i className="fas fa-ticket-alt fa-4x" />
                  <h3 className="title">2. Get Tickets</h3>
                  <p className="info">Get your tickets from the event page.</p>
                </div>
                <div className="lgx-travelinfo-single">
                  <i className="fas fa-walking fa-4x" />
                  <h3 className="title">3. Attend Event</h3>
                  <p className="info">Go attend the event and have fun.</p>
                </div>
              </div>
            </div>
          </div>
          {/*//.ROW*/}
        </div>
        {/* //.CONTAINER */}
      </div>
    </div>
  </section>
  <section className="Customer top">
    <div className="container">
      <div className="owl-carousel owl-carousel2 owl-theme">
        <div className="item">
          <i className="fa-solid fa-quote-right" />
          <p>
            "I had the pleasure of working with the event management team for my
            wedding, and I couldn't have been happier with the results. From
            start to finish, they took care of every detail and made sure
            everything went smoothly on the big day. I highly recommend their
            services to anyone planning an event."
          </p>
          <h3>Sushil Saini</h3>
          <label />
        </div>
        <div className="item">
          <i className="fa-solid fa-quote-right" />
          <p>
            "I recently used this event management website to plan my company's
            annual conference, and I was blown away by the level of organization
            and attention to detail. The team was professional, responsive, and
            went above and beyond to make sure everything was perfect. I will
            definitely be using their services again in the future."
          </p>
          <h3>Aayush Chourasia</h3>
          <label />
        </div>
        <div className="item">
          <i className="fa-solid fa-quote-right" />
          <p>
            "The team behind this event management website is truly exceptional.
            They were attentive, creative, and extremely professional throughout
            the entire planning process. The event itself was a huge success,
            and I couldn't have done it without them. I would highly recommend
            their services to anyone looking to plan an unforgettable event."
          </p>
          <h3>Amit Kumar</h3>
          <label />
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div className="container grid">
      <div className="box">
        <img src="images/logo.png" alt="" />
        <p>
          Eventup is a global self-service ticketing platform for live
          experiences that allows anyone to create, share, find and attend
          events that fuel their passions and enrich their lives. From music
          festivals, marathons, conferences, community rallies, and fundraisers,
          to gaming competitions and air guitar contests. Our mission is to
          bring the world together through live experiences.
        </p>
        <div className="icon">
          <i className="fa fa-facebook-f" />
          <i className="fa fa-instagram" />
          <i className="fa fa-twitter" />
          <i className="fa fa-youtube" />
        </div>
      </div>
      <div className="box">
        <h2>Links</h2>
        <ul>
          <li>Company History</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Services</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="box">
        <h2>Contact Us</h2>
        <p>
          Tap into the world's largest events marketplace and reach consumers
          looking for events like yours using our industry leading event
          marketing tools.
        </p>
        <i className="fa fa-location-dot" />
        <label>
          MM towers Sub.Major Laxmi Chand Rd, Sector 18, Gurugram, Haryana
          122008
        </label>{" "}
        <br />
        <i className="fa fa-phone" />
        <label>+91 657 524 3326</label> <br />
        <i className="fa fa-envelope" />
        <label>info@Eventup.com</label> <br />
      </div>
    </div>
  </footer>
  <div className="legal">
    <p className="container">
      Copyright (c) 2023 Copyright Holder All Rights Reserved.
    </p>
  </div>
</>

    );
}

export default Nhome;