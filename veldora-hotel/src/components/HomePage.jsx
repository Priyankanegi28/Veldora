import { Calendar, CalendarDays, ChevronLeft, ChevronRight, ConciergeBell, Droplets, Dumbbell, Flower, Gift, Star, User, Utensils, Wifi, X, MapPin } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import RoomCard from './RoomCard';

// Images
const dining = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0";
const heroImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945";
const pool = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1KvC8RFfst85RJSuI5mufjDNKwGLP94ROw&s";
const spa = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874";
const room1 = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b";
const room2 = "https://www.grandvistahanoi.com/wp-content/uploads/2019/08/Phong-ngu-1.9-1100x733.jpg";
const room3 = "https://images.unsplash.com/photo-1598928506311-c55ded91a20c";

const quickLinks = [
  { label: 'Dining', icon: <Utensils size={28} />, path: '/dining', desc: 'World-class cuisine' },
  { label: 'Experiences', icon: <Gift size={28} />, path: '/experiences', desc: 'Unique adventures' },
  { label: 'Events', icon: <Calendar size={28} />, path: '/events', desc: 'Memorable moments' },
  { label: 'Reserve', icon: <CalendarDays size={28} />, path: '/reserve', desc: 'Book your stay' },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Room data
  const rooms = [
    {
      id: 1,
      image: room1,
      title: "Deluxe Ocean View",
      description: "Spacious room with breathtaking ocean views and modern amenities",
      price: 299,
      rating: 4.8,
      size: "45 sqm",
      capacity: "2 adults"
    },
    {
      id: 2,
      image: room2,
      title: "Executive Suite",
      description: "Luxurious suite with separate living area and premium services",
      price: 499,
      rating: 4.9,
      size: "75 sqm",
      capacity: "2 adults + 1 child"
    },
    {
      id: 3,
      image: room3,
      title: "Presidential Villa",
      description: "Ultimate luxury with private pool and butler service",
      price: 999,
      rating: 5.0,
      size: "150 sqm",
      capacity: "4 adults"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      comment: "Absolutely stunning property with exceptional service. Will definitely return!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      comment: "The spa treatments were rejuvenating and the staff went above and beyond.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Emma Williams",
      comment: "Perfect location with breathtaking views. Highly recommend the ocean view rooms.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ];

  // Amenities
  const amenities = [
    { icon: <Utensils size={24} />, name: "Gourmet Dining" },
    { icon: <Wifi size={24} />, name: "Free WiFi" },
    { icon: <Droplets size={24} />, name: "Infinity Pool" },
    { icon: <Dumbbell size={24} />, name: "Fitness Center" },
    { icon: <Flower size={24} />, name: "Luxury Spa" },
    { icon: <ConciergeBell size={24} />, name: "24/7 Concierge" }
  ];

  // Handle booking
  const handleBookNow = () => {
    if (!checkInDate || !checkOutDate) {
      alert('Please select check-in and check-out dates');
      return;
    }
    if (checkOutDate <= checkInDate) {
      alert('Check-out date must be after check-in date');
      return;
    }
    setShowBookingSuccess(true);
    setTimeout(() => setShowBookingSuccess(false), 2000);
    navigate('/reserve', { 
      state: { 
        checkInDate, 
        checkOutDate, 
        guests 
      } 
    });
  };

  // Auto slide for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url(${heroImage})` }}>
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Experience Luxury Redefined</h1>
              <p className="hero-subtitle">Discover our exquisite accommodations and world-class amenities</p>
              
              {/* Booking Widget */}
              <div className="booking-widget">
                <div className="booking-input-group">
                  <div className="date-input">
                    <Calendar size={20} className="input-icon" />
                    <input 
                      type="date" 
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      placeholder="Check-in"
                      className="booking-input"
                    />
                  </div>
                  <div className="date-input">
                    <Calendar size={20} className="input-icon" />
                    <input 
                      type="date" 
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      placeholder="Check-out"
                      className="booking-input"
                    />
                  </div>
                  <div className="guest-input">
                    <User size={20} className="input-icon" />
                    <select 
                      value={guests} 
                      onChange={(e) => setGuests(e.target.value)}
                      className="booking-input"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button className="book-now-btn" onClick={handleBookNow}>
                  Check Availability
                </button>
              </div>
              {showBookingSuccess && (
                <div className="booking-success-modal">
                  <p>Booking details sent! Redirecting...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links-section">
        <div className="container">
          <div className="quick-links-grid">
            {quickLinks.map((link, index) => (
              <div 
                key={link.label} 
                className="quick-link-card"
                onClick={() => navigate(link.path)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="quick-link-icon">{link.icon}</div>
                <h3 className="quick-link-label">{link.label}</h3>
                <p className="quick-link-desc">{link.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">Welcome to Serene Haven</h2>
            <p className="about-text">
              Nestled along the pristine coastline, our luxury resort offers an unparalleled experience 
              of relaxation and sophistication. With breathtaking views, exquisite dining, and impeccable 
              service, we create unforgettable moments for our guests.
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">50+</span>
                <p className="stat-label">Luxury Rooms</p>
              </div>
              <div className="stat-card">
                <span className="stat-number">5</span>
                <p className="stat-label">Restaurants</p>
              </div>
              <div className="stat-card">
                <span className="stat-number">10+</span>
                <p className="stat-label">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="rooms-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Accommodations</h2>
            <p className="section-subtitle">Experience comfort and elegance in our carefully designed rooms and suites</p>
          </div>
          <div className="rooms-grid">
            {rooms.map(room => (
              <RoomCard key={room.id} room={room} onClick={() => setSelectedRoom(room)} />
            ))}
          </div>
          <div className="view-all-btn-container">
            <button className="view-all-btn" onClick={() => navigate('/rooms')}>View All Rooms</button>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="amenities-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Amenities</h2>
            <p className="section-subtitle">Everything you need for a perfect stay</p>
          </div>
          <div className="amenities-grid">
            {amenities.map((amenity, index) => (
              <div key={index} className="amenity-card">
                <div className="amenity-icon">{amenity.icon}</div>
                <h3 className="amenity-name">{amenity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="experiences-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Unique Experiences</h2>
            <p className="section-subtitle">Create unforgettable memories with our curated experiences</p>
          </div>
          <div className="experiences-grid">
            <div className="experience-card">
              <div className="experience-image" style={{ backgroundImage: `url(${dining})` }}></div>
              <div className="experience-content">
                <h3>Gourmet Dining</h3>
                <p>Exquisite culinary journey with our award-winning chefs</p>
              </div>
            </div>
            <div className="experience-card">
              <div className="experience-image" style={{ backgroundImage: `url(${pool})` }}></div>
              <div className="experience-content">
                <h3>Infinity Pool</h3>
                <p>Stunning ocean-view pool with cocktail service</p>
              </div>
            </div>
            <div className="experience-card">
              <div className="experience-image" style={{ backgroundImage: `url(${spa})` }}></div>
              <div className="experience-content">
                <h3>Luxury Spa</h3>
                <p>Rejuvenating treatments with traditional techniques</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Guests Say</h2>
          </div>
          <div className="testimonials-slider">
            <button 
              className="slider-btn prev" 
              onClick={() => setCurrentSlide(currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1)}
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <img src={testimonials[currentSlide].avatar} alt={testimonials[currentSlide].name} />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-comment">"{testimonials[currentSlide].comment}"</p>
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) =>
                    i < testimonials[currentSlide].rating ? 
                      <Star key={i} size={18} className="star-filled" /> : 
                      <Star key={i} size={18} className="star-empty" />
                  )}
                </div>
                <div className="testimonial-name">- {testimonials[currentSlide].name}</div>
              </div>
            </div>
            
            <button 
              className="slider-btn next" 
              onClick={() => setCurrentSlide((currentSlide + 1) % testimonials.length)}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {selectedRoom && (
        <div className="room-modal">
          <div className="modal-overlay" onClick={() => setSelectedRoom(null)} />
          <div className="modal-content">
            <button className="close-modal" onClick={() => setSelectedRoom(null)}><X size={28} /></button>
            <div className="modal-grid">
              <div className="modal-image" style={{ backgroundImage: `url(${selectedRoom.image})` }}></div>
              <div className="modal-details">
                <h2>{selectedRoom.title}</h2>
                <div className="room-rating">
                  <Star size={18} fill="#FFD700" color="#FFD700" />
                  <span>{selectedRoom.rating}</span>
                </div>
                <p className="room-description">{selectedRoom.description}</p>
                <div className="room-meta">
                  <span><MapPin size={16} /> {selectedRoom.size}</span>
                  <span>{selectedRoom.capacity}</span>
                </div>
                <div className="modal-actions">
                  <div className="price">
                    <span>Starting from</span>
                    <h3>₹{selectedRoom.price}<small>/night</small></h3>
                  </div>
                  <button className="book-now" onClick={() => { setSelectedRoom(null); navigate('/reserve', { state: { room: selectedRoom } }); }}>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;