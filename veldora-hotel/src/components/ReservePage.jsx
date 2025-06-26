import React, { useState } from 'react';
import './ReservePage.css';

const ReservePage = () => {
  const [form, setForm] = useState({ name: '', email: '', checkin: '', checkout: '', guests: 2 });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', checkin: '', checkout: '', guests: 2 });
    }, 2000);
  };

  return (
    <div className="reserve-page">
      {/* Hero Section */}
      <section className="reserve-hero" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)'}}>
        <div className="reserve-hero-overlay">
          <h1>Reserve Your Stay</h1>
          <p>Book your perfect getaway with us.</p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="reserve-form-section">
        <div className="reserve-form-container">
          <h2>Reservation Form</h2>
          <form className="reserve-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" name="name" value={form.name} onChange={handleChange} required autoComplete="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" value={form.email} onChange={handleChange} required autoComplete="email" />
            </label>
            <label>
              Check-in Date
              <input type="date" name="checkin" value={form.checkin} onChange={handleChange} required />
            </label>
            <label>
              Check-out Date
              <input type="date" name="checkout" value={form.checkout} onChange={handleChange} required />
            </label>
            <label>
              Guests
              <select name="guests" value={form.guests} onChange={handleChange} required>
                {[1,2,3,4,5].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </label>
            <button type="submit" className="reserve-submit-btn">Reserve Now</button>
            {submitted && <div className="reserve-success">Thank you! Your reservation has been received.</div>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default ReservePage;