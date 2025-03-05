import React from 'react';
import logo from '../assets/logo.webp';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Logo" width="30" height="30" />
                Veldora Hotel
            </div>
            <div className="menu">
                <a href="#">Rooms</a>
                <a href="#">Offers and Activities</a>
                <a href="#">Conferences</a>
                <a href="#">Restaurant</a>
                <a href="#">About Veldora</a>
                <a href="#">Contact</a>
            </div>
            <div className="right-options">
                <a href="#" className="booking">Booking</a>
                <span className="lang">NO</span>
                <span className="search">&#128269;</span>
            </div>
        </nav>
    );
};

export default Navbar;