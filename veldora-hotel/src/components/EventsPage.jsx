import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EventsPage.css';

const events = [
  {
    title: 'Gala Dinner Night',
    image: 'https://media.istockphoto.com/id/943685424/photo/decor-for-a-large-party-or-gala-dinner.jpg?s=612x612&w=0&k=20&c=aodL-eLNmu5b7kknITFeORtL_VRnU2Yjhu2eRHVNm4Y=',
    description: 'Join us for an elegant evening of fine dining, live music, and celebration.'
  },
  {
    title: 'Beachside Music Festival',
    image: 'https://stylemagazines.com.au/carbon/assets/2025/05/BASSINTHEGRASS2-scaled.jpg',
    description: 'Experience live performances by top artists right on the sand.'
  },
  {
    title: 'Wellness Retreat',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    description: 'A week of yoga, meditation, and spa treatments for mind and body.'
  },
  {
    title: 'Wine Tasting Evening',
    image: 'https://www.wienscellars.com/wp-content/uploads/2024/06/960x0-1.jpg',
    description: 'Sample exquisite wines with expert sommeliers and gourmet pairings.'
  },
  {
    title: 'Cultural Night',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPH6_Yf6ZiV41T8d90irl2OvSMVjolcDjAOw&s',
    description: 'Enjoy traditional performances, local cuisine, and art displays.'
  }
];

const EventsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="events-page-unique">
      {/* Hero Section */}
      <section className="events-hero" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1459749411175-04bf5292ceea?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW50JTIwd2FsbHBhcGVyfGVufDB8fDB8fHww)'}}>
        <div className="events-hero-overlay">
          <h1>Signature Events</h1>
          <p>Celebrate, connect, and create memories at our exclusive gatherings.</p>
        </div>
      </section>

      {/* Events Gallery Grid */}
      <section className="events-gallery-section">
        <div className="events-gallery-grid">
          {events.map((event, idx) => (
            <div className="event-gallery-card" key={idx}>
              <div className="event-gallery-image" style={{backgroundImage: `url(${event.image})`}}></div>
              <div className="event-gallery-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <button className="rsvp-btn-unique" aria-label={`RSVP for ${event.title}`} onClick={() => navigate('/rsvp', { state: { eventTitle: event.title } })}>RSVP</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;