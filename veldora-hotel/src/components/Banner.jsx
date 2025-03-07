import React, { useState } from 'react';
import { Search } from 'react-feather'; // Importing the search icon
import banner from '../assets/banner.webp';
import './Banner.css';

const Banner = () => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim() !== '') {
            console.log('Searching for:', query);
            // Implement search logic here (e.g., API call, filtering results, etc.)
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
            <div className="banner-overlay"></div>
            <div className="banner-content">
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Search for rooms, amenities..." 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown} 
                    />
                    <Search className="search-icon" size={24} color="white" onClick={handleSearch} />
                </div>
                <h1>Luxury Hotel Experience</h1>
                <a href="#">Book Now</a>
            </div>
        </div>
    );
};

export default Banner;
