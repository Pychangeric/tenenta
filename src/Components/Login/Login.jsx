import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for API calls
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Make a POST request to your backend login endpoint
      const response = await axios.post('http://localhost:3000/users/sign_in', {
        user: { email, password }
      });
      console.log('Login Successful:', response.data);
      // Redirect or perform any action on successful login
    } catch (error) {
      console.error('Login Error:', error);
      // Handle login error, display message to the user, etc.
    }
  };

  return (
    <div className='sign'>
      {/* Your existing login form */}
      {/* Input fields for email and password */}
      {/* Login button with onClick={handleLogin} */}
      {/* Links for Forgot Password and Sign Up */}
    </div>
  );
};

export default Login;
