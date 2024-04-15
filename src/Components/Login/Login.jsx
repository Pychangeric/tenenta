import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleLogin = () => {
    console.log('Login button clicked');
  };

  const paragraphs = [
    "Welcome to Tenanta, your gateway to exceptional living! Discover curated listings of rental and sale properties across the country. Find your dream home with ease and explore detailed house specifications right here.",
    "Step into a world of housing excellence with Tenanta! Uncover a wide array of homes available for rent and sale, each offering unique features and amenities. Your perfect abode awaits!",
    "Experience the ultimate convenience in house hunting with Tenanta. Explore a diverse range of properties, from cozy apartments to spacious villas, and unlock detailed information to make informed decisions.",
    "Join the Tenanta community and embark on a journey to find your ideal living space. Navigate through our comprehensive listings, discover hidden gems, and uncover the keys to your new home.",
    "Discover a new standard in housing solutions with Tenanta. Dive into detailed house specifications, explore neighborhood insights, and embark on a seamless journey to find your perfect place to call home."
  ];

  return (
    <div className='sign'>
      <div className='left-side'>
        <video src="/assets/intro.mp4" controls autoPlay loop muted>
          Your browser does not support the video tag.
        </video>
        <img src="assets/logo.png" alt="Logo" />
        <p>{paragraphs[0]}</p> {/* Displaying the first paragraph */}
      </div>
      <div className='right-side'>
        <form>
          <h1>Welcome back</h1>
          <div className="input-box">
            <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {/* Removed confirmPassword input as it's not needed in the login form */}
          <div className="button-container">
            <button onClick={handleLogin} className="centered-button">Login</button>
          </div>
          <div className="links-container">
            <a href="/forgot-password">Forgot Password?</a>
            <span> | </span>
            <a href="/">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
