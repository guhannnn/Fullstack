// Home.js
import React from 'react';
import Navbar from './Nabar';
import styles from './home.module.css'; // Import CSS Modules

function Home() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <h2>Event Booking</h2>
                        <p>Everything you need to craft impactful event experiences</p>
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
          <input type="submit" defaultValue="CHECK " />
        </form>
      </div>
    </div>
  </section>

  <br></br>
                <section className={styles.about}>
                    <div className={styles.container}>
                        <div className={styles.aboutContent}>
                            <div className={styles.text}>
                                <h1>The simplest way to host all your events</h1>
                                <p> "It's all in the details"...</p>
                                <p>Creating, Managing , Executing a successfull event!!!</p>
                                <br></br>
                                <p>Our team understands that a properly executed event can be leveraged to support an organization’s strategic vision, incorporated into a company’s marketing plan,
or used to build networks and client loyalty.</p>
                            </div>
                            <div className={styles.image}>
                                <img
                                    src="https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Image path
                                    alt="Boat on water"
                                    className={styles.imageZoom} // Apply zoom effect class
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.services}>
                    <div className={styles.container}>
                        <div className={styles.servicesContent}>
                            <h1>Our Services</h1>
                            <div className={styles.servicesList}>
                                <div className={styles.serviceItem}>
                                    <img src="/images/rental-icon.png" alt=" " />
                                    <h3>Stay</h3>
                                    <p> your own pace</p>
                                </div>
                                <div className={styles.serviceItem}>
                                    <img src="/images/tour-icon.png" alt=" " />
                                    <h3>Catering</h3>
                                    <p>taste</p>
                                </div>
                                <div className={styles.serviceItem}>
                                    <img src="/images/-icon.png" alt=" " />
                                    <h3>Photography</h3>
                                    <p>capture the moment</p>
                                </div>
                                <div className={styles.serviceItem}>
                                    <img src="/images/events-icon.png" alt="  " />
                                    <h3>Special Events Hosting</h3>
                                    <p>Host your special event </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.contact}>
                    <div className={styles.container}>
                        <div className={styles.contactContent}>
                            <h1>Contact Us</h1>
                            <p>Ready ? Contact us today to book your memorable event!</p>
                            <div className={styles.contactDetails}>
                                <p>Email: info@event.com</p>
                                <p>Phone: +1 123-456-7890</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer></footer>
        </div>
    );
}

export default Home;
