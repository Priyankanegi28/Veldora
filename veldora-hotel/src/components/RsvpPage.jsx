import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RsvpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const eventTitle = location.state?.eventTitle || '';
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate('/events');
    }, 2000);
  };

  return (
    <div className="rsvp-page" style={{ minHeight: '70vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', background: '#f7f9fc', marginTop: '3.5rem' }}>
      <div className="modal events-modal" style={{ minWidth: 320, maxWidth: 400, width: '100%' }}>
        {!submitted ? (
          <>
            <h2 style={{ marginBottom: '1.2rem', color: '#fb5607' }}>RSVP {eventTitle && <>for <span style={{ color: '#4361ee' }}>{eventTitle}</span></>}</h2>
            <form className="booking-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" value={form.name} onChange={handleChange} required autoComplete="name" />
              </label>
              <label>
                Email
                <input type="email" name="email" value={form.email} onChange={handleChange} required autoComplete="email" />
              </label>
              <button type="submit" className="submit-btn events-submit-btn">Submit RSVP</button>
            </form>
          </>
        ) : (
          <div className="booking-success">Thank you for your RSVP!<br/>Redirecting to Events...</div>
        )}
      </div>
    </div>
  );
};

export default RsvpPage; 