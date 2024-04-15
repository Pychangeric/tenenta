import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">Login</NavLink>
        </li>
        <li>
          <NavLink to="/home" activeClassName="active">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
