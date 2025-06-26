import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExperiencesPage.css';

const experiences = [
  {
    title: 'Sunset Yoga',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    description: 'Relax and rejuvenate with guided yoga sessions overlooking the ocean at sunset.'
  },
  {
    title: 'Jungle Safari',
    image: 'https://www.nainitalcorbetttourism.com/images/corbett-national-park-tourism/corbett-jungle-safari.jpg',
    description: 'Explore the wild with our expert guides and discover exotic flora and fauna.'
  },
  {
    title: 'Private Beach Dinner',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    description: 'Enjoy a romantic candlelit dinner on the beach, curated by our top chefs.'
  },
  {
    title: 'Scuba Diving',
    image: 'https://assets.cntraveller.in/photos/632da314969e60ec08d35e8a/master/pass/498283106',
    description: 'Dive into crystal-clear waters and discover vibrant marine life with certified instructors.'
  },
  {
    title: 'Cooking Class',
    image: 'https://img.freepik.com/free-photo/high-angle-family-cooking-delicious-pizza_23-2150306982.jpg?semt=ais_hybrid&w=740',
    description: 'Learn to cook local delicacies with our master chefs in a fun, hands-on class.'
  },
  {
    title: 'Cultural Tour',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    description: 'Immerse yourself in local culture with guided tours to historic sites and markets.'
  }
];

const ExperiencesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', experience: experiences[0].title, date: '' });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setForm({ name: '', email: '', experience: experiences[0].title, date: '' });
    }, 1800);
  };

  return (
    <div className="experiences-page">
      {/* Hero Banner */}
      <section className="experiences-hero" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)'}}>
        <div className="experiences-hero-overlay">
          <h1>Unforgettable Experiences</h1>
          <p>Discover unique activities and adventures during your stay at Serene Haven.</p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="experiences-grid-section">
        <div className="experiences-grid">
          {experiences.map((exp, idx) => (
            <div className="experience-card" key={idx}>
              <div className="experience-image" style={{backgroundImage: `url(${exp.image})`}}></div>
              <div className="experience-content">
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="experiences-cta-section">
        <button className="experiences-cta-btn" onClick={() => navigate('/book-experience')}>Book an Experience</button>
      </section>
    </div>
  );
};

export default ExperiencesPage;