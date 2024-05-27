import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch('http://localhost:3000/residences');
        if (!response.ok) {
          throw new Error('Failed to fetch houses');
        }
        const data = await response.json();
        setHouses(data);
      } catch (error) {
        console.error('Error fetching houses:', error);
      }
    };

    fetchHouses();
  }, []);

  return (
    <div className='home1'>
      {/* Sliding contact section */}
      <div className="contact-section1">
        <marquee behavior="scroll" direction="left">Contact us: email@example.com | Phone: +123456789</marquee>
      </div>

      {/* Logo and search section */}
      <div className="logo-search1">
        <div className="logo">
          <img src="/assets/logo.png" alt="Logo" />
        </div>
        <div className="search1">
          <input type="text" placeholder="Search location, types, prices, institutions, towns" />
          <button>Search</button>
        </div>
        <div className="account-button1">
          <button>Account</button>
        </div>
      </div>

      {/* Main content area */}
      <div className="main-content1">
        {/* Sidebar */}
        <div className="sidebar1">
          <ul>
            <li><Link to="/bedsitters">Bedsitters</Link></li>
            <li><Link to="/Onebedrooms">1 Bedrooms</Link></li>
            <li><Link to="/Twobedrooms">2 Bedrooms</Link></li>
            <li><Link to="/Threebedrooms">3 Bedrooms</Link></li>
            <li><Link to="/4-bedrooms">4 Bedrooms</Link></li>
            <li><Link to="/HomeCompounds">Home Compounds</Link></li>
            <li><Link to="/Bungalows">Bungalows</Link></li>
            <li><Link to="/Apartments">Apartments</Link></li>
            <li><Link to="/Vanillas">Vanillas</Link></li>
            <li><Link to="/Airbnbs">Air BnBs</Link></li>
            <li><Link to="/Hotels">Hotels</Link></li>
            <li><Link to="/Institutions">Institutions</Link></li>
          </ul>
        </div>

        {/* Intro video section */}
        <div className="intro-video1">
          <video src="/assets/intro.mp4" controls autoPlay loop muted>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Sample houses section */}
      <div className="sample-houses1">
        {houses.map((house, index) => (
          <div className="house-one1" key={index}>
            <img src={house.image} alt={`House ${index + 1}`} />
            <h1>{house.name}</h1>
            <p>{house.details}</p>
            <p>{house.price}</p>
            {/* Add more house details as needed */}
          </div>
        ))}
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
