import React from 'react';
import { Link } from 'react-router-dom';
import './Bedsitters.css';

const Bedsitters = () => {
  return (
    <div className='bedsitters'>
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Bedsitters</h2>
        <button className="dropdown-btn">Towns</button>
        <div className="search-section">
          <input type="text" placeholder="Search: Towns" />
          <button>Search</button>
        </div>
        <div className="price-section">
          <h3>Sort by Price</h3>
          <div className="price-inputs">
            <input type="text" placeholder="Min" />
            <input type="text" placeholder="Max" />
          </div>
          <div className="price-tag">
            <button>:Price</button>
          </div>
          <button>Filter</button>
        </div>
        <button>Filter by Institutions</button>

        {/* Footer */}
        <div className="footer">
          <button>Terms & Conditions</button>
          <button>About Tenanta</button>
          <button>Privacy Policy</button>
          <button>Contact us</button>
        </div>
      </div>

      {/* Location Section */}
      <div className="location-section">
        <div className="search-sec">
          <input type="text" placeholder="Search: Location" />
          <button>Search</button>
        </div>
        <div className="visited-locations">
          <div className="location-card">
            <h3>Location 1</h3>
            {/* Additional content */}
          </div>
          <div className="location-card">
            <h3>Location 2</h3>
            {/* Additional content */}
          </div>
          <div className="location-card">
            <h3>Location 3</h3>
            {/* Additional content */}
          </div>
        </div>
      </div>

      {/* List of Bedsitters 
      <div className="bedsitters-list">
        <div className="bedsitter-card">
          <h3>Bed 1</h3>
        </div>
      </div>
      */}
    </div>
  );
};

export default Bedsitters;
