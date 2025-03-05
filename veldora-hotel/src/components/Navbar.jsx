import React, { useState } from 'react'; // Import useState
import logo from '../assets/logo.webp';
import AuthPage from './AuthPage'; // Import the AuthPage component
import './Navbar.css';

const Navbar = ({ onLoginClick }) => {
    const [showLogin, setShowLogin] = useState(false); // State to control login modal visibility

    const handleLoginClick = () => {
        setShowLogin(true); // Show the login modal
        onLoginClick(); // Notify the parent component (App.jsx) about the login click
    };

    return (
        <>
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
                    <button className="login-button" onClick={handleLoginClick}>
                        Login
                    </button>
                    <span className="search">&#128269;</span>
                </div>
            </nav>

            {/* Render the AuthPage component if showLogin is true */}
            {showLogin && <AuthPage onLogin={() => setShowLogin(false)} onGuest={() => setShowLogin(false)} />}
        </>
    );
};

export default Navbar;