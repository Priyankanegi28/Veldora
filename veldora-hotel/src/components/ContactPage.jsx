import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero" style={{backgroundImage: 'url(https://thumbs.dreamstime.com/b/forest-path-v3-13197528.jpg)'}}>
        <div className="contact-hero-overlay">
          <h1>Contact Us</h1>
          <p>We're here to help. Reach out for any inquiries or assistance.</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-main-section">
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" name="name" value={form.name} onChange={handleChange} required autoComplete="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" value={form.email} onChange={handleChange} required autoComplete="email" />
            </label>
            <label>
              Message
              <textarea name="message" value={form.message} onChange={handleChange} required rows={4} />
            </label>
            <button type="submit" className="contact-submit-btn">Send Message</button>
            {submitted && <div className="contact-success">Thank you! We'll get back to you soon.</div>}
          </form>
        </div>
        <div className="contact-info-container">
          <h2>Contact Information</h2>
          <div className="contact-info-item"><strong>Address:</strong> 123 Seaside Avenue, Paradise City</div>
          <div className="contact-info-item"><strong>Phone:</strong> +1 234 567 8900</div>
          <div className="contact-info-item"><strong>Email:</strong> info@serenehaven.com</div>
          <div className="contact-map">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Map placeholder" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;