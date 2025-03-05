import React from 'react';
import './DealsSection.css';

const DealsSection = ({ title, subtitle, deals }) => {
    return (
        <section className="deals-section">
            <div className="deals-title">{title}</div>
            <div className="deals-subtitle">{subtitle}</div>
            <div className="deals-container">
                {deals.map((deal, index) => (
                    <div className="deal-card" key={index}>
                        <img src={deal.image} alt={deal.title} />
                        <div className="deal-content">
                            <div className="deal-title">{deal.title}</div>
                            <div className="deal-location">{deal.location}</div>
                            <div className="deal-rating">Rating: {deal.rating}</div>
                            <div className="deal-price">{deal.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DealsSection;