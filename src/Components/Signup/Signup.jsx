import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [isSignupClicked, setIsSignupClicked] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (page < 2) {
      setPage(page + 1);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsSignupClicked(true);
    try {
      const response = await axios.post('http://localhost:3000/users', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Signup successful:', response.data);
      // Redirect to home page after successful signup
      navigate('/home');
    } catch (error) {
      console.error('Signup error:', error);
      setIsSignupClicked(false); // Re-enable button if there's an error
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBack = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className='sign'>
      <div className='left-side'>
        <img src="assets/logo.png" alt="Logo" />
        <p>{page === 1 ? "Welcome to Tenanta, your gateway to exceptional living!" : "Ensure your account is secure with a strong password."}</p>
      </div>
      <div className='right-side'>
        {page === 1 && (
          <>
            <div className="up">
              <h1>Welcome to Tenanta</h1>
              <div className="input-box">
                <input type="text" name="firstName" placeholder='First name' value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="input-box">
                <input type="text" name="lastName" placeholder='Last name' value={formData.lastName} onChange={handleChange} required />
              </div>
              <div className="input-box">
                <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required />
              </div>
              <div className="input-box">
                <input type="text" name="phoneNumber" placeholder='Phone number' value={formData.phoneNumber} onChange={handleChange} required />
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
          <form onSubmit={handleSignup}>
            <h1>Security</h1>
            <div className="input-box">
              <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} required />
            </div>
            <div className="input-box">
              <input type="password" name="confirmPassword" placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleChange} required />
            </div>
            <button type="submit" disabled={isSignupClicked}>Sign Up</button>
            <button type="button" onClick={handleBack}>Back</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signup;
