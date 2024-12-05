import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <NavLink to="/" className="nav-item">Home</NavLink>
      <NavLink to="/account" className="nav-item">Account</NavLink>
    </>
  );
}
 
export default Navbar;