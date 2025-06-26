import { MapPin, Star } from 'lucide-react';
import React from 'react';

const RoomCard = ({ room, onClick }) => {
  return (
    <div className="room-card" onClick={onClick} tabIndex={0} style={{cursor: 'pointer'}}>
      <div className="room-image" style={{ backgroundImage: `url(${room.image})` }}>
        <div className="price-tag">${room.price}/night</div>
      </div>
      <div className="room-details">
        <h3>{room.title}</h3>
        <p>{room.description}</p>
        <div className="room-meta">
          <span><MapPin size={16} /> {room.size}</span>
          <span>{room.capacity}</span>
        </div>
        <div className="room-rating">
          <Star size={16} fill="#FFD700" color="#FFD700" />
          <span>{room.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;