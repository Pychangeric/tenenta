import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <div className='home'>
  {/* Sliding contact section */}
  <div className="contact-section">
    <marquee behavior="scroll" direction="left">Contact us: email@example.com | Phone: +123456789</marquee>
  </div>

  {/* Logo and search section */}
  <div className="logo-search">
    <div className="logo">
      <img src="/assets/logo.png" alt="Logo" />
    </div>
    <div className="search">
      <input type="text" placeholder="Search location, types, prices, institutions, towns" />
      <button>Search</button>
    </div>
    <div className="account-button">
      <button>Account</button>
    </div>
  </div>

      {/* Main content area */}
      <div className="main-content">
        {/* Sidebar */}
        <div className="sidebar">
          <ul>
            <li><Link to="/bedsitters">Bedsitters</Link></li>
            <li><Link to="/1-bedrooms">1 Bedrooms</Link></li>
            <li><Link to="/2-bedrooms">2 Bedrooms</Link></li>
            <li><Link to="/3-bedrooms">3 Bedrooms</Link></li>
            <li><Link to="/4-bedrooms">4 Bedrooms</Link></li>
            <li><Link to="/home-compounds">Home Compounds</Link></li>
            <li><Link to="/bungalows">Bungalows</Link></li>
            <li><Link to="/apartments">Apartments</Link></li>
            <li><Link to="/vanillas">Vanillas</Link></li>
            <li><Link to="/airbnbs">Air BnBs</Link></li>
            <li><Link to="/hotels">Hotels</Link></li>
            <li><Link to="/institutions">Institutions</Link></li>
          </ul>
        </div>

    {/* Intro video section */}
    <div className="intro-video">
      <video src="/assets/intro.mp4" controls autoPlay loop muted>
        Your browser does not support the video tag.
      </video>
    </div>
  </div>

  {/* Sample houses section */}
  <div className="sample-houses">
    {/* Display sample houses here */}
    <div className="house-one">
      <img src="assets/logo" alt="House 1" />
      <h1>House 1</h1>
    </div>
    <div className="house-one">
      <img src="assets/logo" alt="House 2" />
      <h1>House 2</h1>
    </div>
    <div className="house-one">
      <img src="assets/logo" alt="House 3" />
      <h1>House 3</h1>
    </div>
    <div className="house-one">
      <img src="assets/logo" alt="House 4" />
      <h1>House 4</h1>
    </div>
  </div>

  {/* Footer */}
  <div className="footer">
    <div className="footer-links">
      <button>Terms & Conditions</button>
      <button>About Tenanta</button>
      <button>Privacy Policy</button>
      <button>Contact us</button>
    </div>
    <div className="copyright">
      &copy; 2024 Tenanta
    </div>
  </div>
</div>

  );
};

export default Home;
