import React, { useState } from 'react';
import './Header.css'; // Ensure this path is correct

const HeroNavbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className="hero-navbar">
            <nav>
                <div className="nav__header">
                    <div className="nav__logo">
                        {/* Uncomment if you have a logo */}
                        {/* <a href="#">
                            <img src="assets/logo-white.png" alt="logo" />
                        </a> */}
                    </div>
                    <div className="nav__menu__btn" id="menu-btn" onClick={toggleNav}>
                        {/* Toggle between menu and close icon */}
                        <i className={isNavOpen ? 'ri-close-line' : 'ri-menu-line'}></i> 
                    </div>
                </div>
                <ul className={`nav-links ${isNavOpen ? 'active' : ''}`} id="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="./servicessection">Services</a></li>
                    <li className="nav__logo">
                        <a href="#">
                            <img src="./images/logo-white.png" alt=" logo" />
                        </a>
                    </li>
                    <li><a href="#client">Client</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default HeroNavbar;
