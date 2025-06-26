import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div>
                    <h3>Serene Haven</h3>
                    <p>Your luxurious escape awaits</p>
                </div>
                <div>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Rooms</a></li>
                        <li><a href="#">Offers</a></li>
                        <li><a href="#">Conferences</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#" className="facebook">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="twitter">
                            <FaTwitter />
                        </a>
                        <a href="#" className="instagram">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Veldora Hotel. All rights reserved.</p>
            </div>
            <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
            <div className="newsletter-signup">
                <input type="email" placeholder="Subscribe to our newsletter" />
                <button>Subscribe</button>
            </div>
        </footer>
    );
};

export default Footer;