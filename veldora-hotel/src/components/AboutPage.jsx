import React from 'react';
import './AboutPage.css';

const highlights = [
  {
    icon: '🌊',
    title: 'Stunning Location',
    desc: 'Nestled on a pristine coastline with breathtaking views.'
  },
  {
    icon: '🍽️',
    title: 'Gourmet Dining',
    desc: 'Award-winning chefs and world-class cuisine.'
  },
  {
    icon: '🛏️',
    title: 'Luxury Comfort',
    desc: 'Elegant rooms and suites with premium amenities.'
  },
  {
    icon: '🤝',
    title: 'Exceptional Service',
    desc: 'Personalized attention and warm hospitality.'
  }
];

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)'}}>
        <div className="about-hero-overlay">
          <h1>About Serene Haven</h1>
          <p>Luxury, comfort, and unforgettable experiences await you.</p>
        </div>
      </section>

      {/* Story/Mission Section */}
      <section className="about-story-section">
        <div className="about-story-container">
          <h2>Our Story</h2>
          <p>
            Founded with a passion for hospitality, Serene Haven is dedicated to creating memorable moments for every guest. Our mission is to blend luxury with genuine warmth, offering a sanctuary where you can relax, celebrate, and explore.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-highlights-section">
        <h2>Why Choose Us?</h2>
        <div className="about-highlights-grid">
          {highlights.map((h, idx) => (
            <div className="about-highlight-card" key={idx}>
              <div className="about-highlight-icon">{h.icon}</div>
              <div className="about-highlight-title">{h.title}</div>
              <div className="about-highlight-desc">{h.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;