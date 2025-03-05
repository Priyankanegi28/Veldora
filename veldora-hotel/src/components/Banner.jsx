import React from 'react';
import banner from '../assets/banner.webp';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
            <div className="banner-overlay"></div>
            <div className="banner-content">
                <h1>Luxury Hotel Experience</h1>
                <a href="#">Book Now</a>
            </div>
        </div>
    );
};

export default Banner;