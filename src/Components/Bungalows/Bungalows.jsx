import React from 'react';
import './Bungalows.css';

const Bungalows = () => {

  function scrollRight() {
    const container = document.querySelector('.visited-locations');
    container.scrollLeft += 200; 
  }

  return (
    <div className='bungalows-container'>

      {/* First intro */}
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
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <h2>Bungalows</h2>
        <button className="dropdown-btn">Towns</button>
        <div className="search-section1">
          <input type="text" placeholder="Search: Towns" />
          <button>Search</button>
        </div>
        <div className="price-section">
          <h3>Sort by Price</h3>
          <div className="price-inputs">
            <input type="text" placeholder="Min" />
            <input type="text" placeholder="Max" />
          </div>
          <button>Filter</button>
        </div>
        <button>Filter by Institutions</button>
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Location Section */}
        <div className="location-section">
          <div className="search-section">
            <input type="text" placeholder="Search: Location" />
            <button>Search</button>
          </div>
          <div className="visited-locations">
            <div className="location-card">
              <h3>Location 1</h3>
              {/* Additional content */}
            </div>
            {/* Other location cards */}
          </div>
        </div>

        {/* List of Bungalows */}
        <div className="bungalows-list">
          <div className="bungalow-card">
            <h3>Bungalow 1</h3>
            {/* Additional content */}
          </div>
          {/* Other bungalow cards */}
        </div>
        {/* Footer */}
        <div className="footer">
          <button>Terms & Conditions</button>
          <button>About Tenanta</button>
          <button>Privacy Policy</button>
          <button>Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Bungalows;
