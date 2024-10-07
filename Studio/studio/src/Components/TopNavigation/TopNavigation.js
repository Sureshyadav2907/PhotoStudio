import React from 'react';
import { NavLink } from 'react-router-dom';

function TopNavigation() {
  return (
    <nav className="nav__header">
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-link" activeClassName="active-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/AboutUs" className="nav-link" activeClassName="active-link">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/servicessection" className="nav-link" activeClassName="active-link">Services</NavLink>
        </li>
        <li className="nav__logo">
                        <a href="#">
                            <img src="./images/logo-white.png" alt=" logo" />
                        </a>
                    </li>
        <li>
          <NavLink to="/Client" className="nav-link" activeClassName="active-link">Client</NavLink>
        </li>
        <li>
          <NavLink to="/Blog" className="nav-link" activeClassName="active-link">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/ContactUs" className="nav-link" activeClassName="active-link">ContactUs</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default TopNavigation;
