import { Star } from 'lucide-react';
import React from 'react';

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div className={`testimonial-card ${isActive ? 'active' : ''}`}>
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            fill={i < testimonial.rating ? "#FFD700" : "none"} 
            color="#FFD700" 
          />
        ))}
      </div>
      <p className="testimonial-text">"{testimonial.comment}"</p>
      <p className="testimonial-author">- {testimonial.name}</p>
    </div>
  );
};

export default TestimonialCard;