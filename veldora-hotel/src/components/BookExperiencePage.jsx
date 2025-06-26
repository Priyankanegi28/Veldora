import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExperiencesPage.css';

const experienceOptions = [
  'Spa Retreat',
  'Private Dinner',
  'Guided City Tour',
  'Adventure Sports',
  'Cooking Class',
  'Sunset Cruise',
  'Yoga Session'
];

const BookExperiencePage = () => {
  const [form, setForm] = useState({ name: '', email: '', experience: experienceOptions[0], date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', experience: experienceOptions[0], date: '', message: '' });
      navigate('/experiences');
    }, 2000);
  };

  return (
    <div className="experiences-page">
      {/* Hero Section */}
      <section className="experiences-hero" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)'}}>
        <div className="experiences-hero-overlay">
          <h1>Book an Experience</h1>
          <p>Reserve your spot for a memorable adventure or relaxing escape.</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="experiences-grid-section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <form className="booking-form" onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 8px 32px rgba(67,97,238,0.13)', padding: '2.5rem 2.2rem', minWidth: 320, maxWidth: 420, width: '100%' }}>
          <h2 style={{ color: '#3a86ff', marginBottom: 18, textAlign: 'center' }}>Experience Booking</h2>
          <label>
            Name
            <input type="text" name="name" value={form.name} onChange={handleChange} required autoComplete="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required autoComplete="email" />
          </label>
          <label>
            Experience
            <select name="experience" value={form.experience} onChange={handleChange} required>
              {experienceOptions.map((exp, idx) => (
                <option key={idx} value={exp}>{exp}</option>
              ))}
            </select>
          </label>
          <label>
            Date
            <input type="date" name="date" value={form.date} onChange={handleChange} required />
          </label>
          <label>
            Message (optional)
            <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Any special requests?" />
          </label>
          <button type="submit" className="submit-btn" style={{ marginTop: 18 }}>Book Now</button>
          {submitted && <div className="booking-success">Thank you! Your experience is being reserved.</div>}
        </form>
      </section>
    </div>
  );
};

export default BookExperiencePage; 