import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [page, setPage] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSendClicked, setIsSendClicked] = useState(false);
  const [isSignupClicked, setIsSignupClicked] = useState(false);
  
  const paragraphs = [
    "Welcome to Tenanta, your gateway to exceptional living! Discover curated listings of rental and sale properties across the country. Find your dream home with ease and explore detailed house specifications right here.",
    "Step into a world of housing excellence with Tenanta! Uncover a wide array of homes available for rent and sale, each offering unique features and amenities. Your perfect abode awaits!",
    "Experience the ultimate convenience in house hunting with Tenanta. Explore a diverse range of properties, from cozy apartments to spacious villas, and unlock detailed information to make informed decisions.",
    "Join the Tenanta community and embark on a journey to find your ideal living space. Navigate through our comprehensive listings, discover hidden gems, and uncover the keys to your new home.",
    "Discover a new standard in housing solutions with Tenanta. Dive into detailed house specifications, explore neighborhood insights, and embark on a seamless journey to find your perfect place to call home."
  ];

  const handleNext = () => {
    if (page < 5) {
      setPage(page + 1);
    }
  };

  const handleSend = () => {
    setIsSendClicked(true);
    // Perform any additional actions needed before moving to the next section
    // For example, validate phone number, send data to the server, etc.
  };

  const handleSignup = () => {
    setIsSignupClicked(true);
    // Perform signup action here
  };
  const handlePaymentMethod = (method) => {
    // Handle payment method selection here
    console.log('Selected payment method:', method);
    handleNext(); // Move to the next section
  };


  const handleBack = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className='sign'>
      <div className='left-side'>
        <video src="/assets/intro.mp4" controls autoPlay loop muted>
         Your browser does not support the video tag.
        </video>
        <img src="assets/logo.png" alt="Logo" />
        <p>{paragraphs[page - 1]}</p> 
      </div>
      <div className='right-side'>
      {page === 1 && (
            <>
              <div className="up">
              <h1>Wlecome to Tenanta</h1>
                <div className="input-box">
                  <input type="text" placeholder='First name' required />
                </div>
                <div className="input-box">
                  <input type="text" placeholder='Last name' required />
                </div>
                <div className="input-box">
                  <input type="text" placeholder='Email' required />
                </div>
                <div className="input-box">
                  <input type="text" placeholder='Phone number' required />
                </div>
                <button onClick={handleNext}>Next</button>
                <div className="links-container">
                  <span> | </span>
                  <a href="/login">Login</a>
                </div>
              </div>
            </>
          )}
        {page === 2 && (
          <form action="">
            <h1>Security</h1>
            <div className="input-box">
                <input type="password" placeholder='Password' required />
              </div>
              <div className="input-box">
                <input type="password" placeholder='Confirm Password' required />
              </div>
            <button onClick={handleNext}>Next</button>
            <button onClick={handleBack}>Back</button>
          </form>
        )}
        {page === 3 && (
          <form action="">
            <h1>Billing</h1>
            <p>To join us, choose your payment method:</p>
            <div className="billing-options">
                <div className="billing-option" onClick={() => handlePaymentMethod('monthly')}>
                  <p>KSH. 100 per month</p>
                </div>
                <div className="billing-option" onClick={() => handlePaymentMethod('yearly')}>
                  <p>KSH. 1000 per year</p>
                </div>
              </div>
              <div>
              <button onClick={handleNext}>Next</button>
              <button onClick={handleBack}>Back</button>
            </div>
          </form>
        )}
        {page === 4 && (
          <form action="">
            <h1>Payment Mode</h1>
            <p>Choose your mode of payment:</p>
            <div className="payment-mode">
                <button onClick={handleNext}>Mpesa</button>
                <button disabled>Airtel Money</button>
              </div>            <div>
              <button onClick={handleNext}>Next</button>
              <button onClick={handleBack}>Back</button>
            </div>
          </form>
        )}
        {page === 5 && (
          <form action="">
            <h1>Phone Number</h1>
            <p>Enter your phone number:</p>
            <div className="input-box">
              <input type="text" placeholder='Enter Phone Number' required />
            </div>
            <div className="button-container">
              <button onClick={handleBack} className="left-button">Back</button>
              <button onClick={handleSend} disabled={isSendClicked} className="right-button">Send</button>
              <button onClick={handleSignup} disabled={!isSendClicked || isSignupClicked} className="centered-button">Sign Up</button>
            </div>
          </form>
        )} 
      </div>
    </div>
  );
};

export default Signup;
