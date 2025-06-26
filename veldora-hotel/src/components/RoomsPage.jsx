import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FiCheck, FiCoffee, FiMapPin, FiStar, FiUsers, FiWifi, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './RoomsPage.css';

const RoomsPage = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedRoom, setSelectedRoom] = useState(null);
    const navigate = useNavigate();

    const roomTypes = [
        {
            id: 'deluxe-1',
            type: 'deluxe',
            name: 'Deluxe Room',
            description: 'Our spacious deluxe rooms offer stunning views with premium amenities. Perfect for couples or business travelers seeking comfort and style.',
            price: 299,
            size: '45 m²',
            capacity: '2 Adults',
            image: 'https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-new-delhi/room-and-suites/deluxe-room/detail/deluxe-room-1.jpg',
            features: ['King-size bed', 'Ocean view', 'Smart TV', 'Mini-bar', 'Free WiFi', 'Air conditioning', '24-hour room service'],
            rating: 4.8,
            reviews: 127
        },
        {
            id: 'deluxe-2',
            type: 'deluxe',
            name: 'Deluxe Room City View',
            description: 'Enjoy city views and modern comfort in our Deluxe City View Room, featuring all the amenities you need for a relaxing stay.',
            price: 319,
            size: '47 m²',
            capacity: '2 Adults',
            image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b',
            features: ['City view', 'King-size bed', 'Smart TV', 'Mini-bar', 'Free WiFi', 'Air conditioning'],
            rating: 4.7,
            reviews: 98
        },
        {
            id: 'executive-1',
            type: 'executive',
            name: 'Executive Suite',
            description: 'Luxurious living space with separate bedroom and lounge area. Ideal for extended stays or travelers who appreciate extra space.',
            price: 499,
            size: '65 m²',
            capacity: '2 Adults + 1 Child',
            image: 'https://www.grandvistahanoi.com/wp-content/uploads/2019/08/Phong-ngu-1.9-1100x733.jpg',
            features: ['Separate living area', 'Premium bathroom', 'Work desk', 'Complimentary breakfast', '24/7 concierge', 'Nespresso machine', 'Evening turndown service'],
            rating: 4.9,
            reviews: 89
        },
        {
            id: 'executive-2',
            type: 'executive',
            name: 'Executive Suite Garden',
            description: 'Executive Suite with a private balcony overlooking the gardens, perfect for business or leisure.',
            price: 529,
            size: '68 m²',
            capacity: '2 Adults + 1 Child',
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
            features: ['Garden view', 'Separate living area', 'Premium bathroom', 'Work desk', 'Complimentary breakfast', 'Nespresso machine'],
            rating: 4.8,
            reviews: 77
        },
        {
            id: 'presidential-1',
            type: 'presidential',
            name: 'Presidential Suite',
            description: 'Ultimate luxury with panoramic views and exclusive services. Our most prestigious accommodation for those who demand the very best.',
            price: 899,
            size: '120 m²',
            capacity: '4 Adults',
            image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
            features: ['Private terrace', 'Jacuzzi', 'Butler service', 'Lounge area', 'Premium toiletries', 'Personalized check-in', 'Champagne on arrival'],
            rating: 5.0,
            reviews: 42
        },
        {
            id: 'presidential-2',
            type: 'presidential',
            name: 'Presidential Suite Royal',
            description: 'A royal experience with a grand living area, private spa, and breathtaking views.',
            price: 999,
            size: '140 m²',
            capacity: '4 Adults',
            image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
            features: ['Private spa', 'Grand living area', 'Jacuzzi', 'Butler service', 'Personalized check-in', 'Champagne on arrival'],
            rating: 5.0,
            reviews: 31
        },
        {
            id: 'family-1',
            type: 'family',
            name: 'Family Suite',
            description: 'Spacious accommodation perfect for families with children. Thoughtful amenities make traveling with kids a breeze.',
            price: 599,
            size: '80 m²',
            capacity: '2 Adults + 2 Children',
            image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd',
            features: ['Two bedrooms', 'Kids amenities', 'Game console', 'Childcare services', 'Family packages', 'Baby cot available', 'Child-friendly dining options'],
            rating: 4.7,
            reviews: 156
        },
        {
            id: 'family-2',
            type: 'family',
            name: 'Family Suite Deluxe',
            description: 'Deluxe family suite with extra space, a play area for kids, and a relaxing lounge for parents.',
            price: 649,
            size: '90 m²',
            capacity: '2 Adults + 3 Children',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
            features: ['Play area', 'Two bedrooms', 'Kids amenities', 'Game console', 'Childcare services', 'Family packages'],
            rating: 4.8,
            reviews: 112
        },
        {
            id: 'garden',
            type: 'other',
            name: 'Garden View Room',
            description: 'Wake up to lush garden views and tranquil surroundings. Perfect for nature lovers and those seeking peace.',
            price: 349,
            size: '50 m²',
            capacity: '2 Adults',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
            features: ['Garden view', 'Private balcony', 'Rain shower', 'Complimentary tea/coffee', 'Free WiFi', 'Air conditioning'],
            rating: 4.6,
            reviews: 78
        },
        {
            id: 'twin',
            type: 'other',
            name: 'Twin Room',
            description: 'Comfortable twin beds and modern amenities for friends or colleagues traveling together.',
            price: 279,
            size: '40 m²',
            capacity: '2 Adults',
            image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd',
            features: ['Twin beds', 'City view', 'Smart TV', 'Mini-bar', 'Free WiFi', 'Work desk'],
            rating: 4.5,
            reviews: 65
        },
        {
            id: 'penthouse',
            type: 'other',
            name: 'Penthouse Suite',
            description: 'Experience the height of luxury in our penthouse suite with breathtaking city views and exclusive amenities.',
            price: 1299,
            size: '200 m²',
            capacity: '4 Adults',
            image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b',
            features: ['Panoramic city view', 'Private rooftop', 'Jacuzzi', 'Butler service', 'Luxury linens', 'Exclusive lounge access'],
            rating: 5.0,
            reviews: 21
        }
    ];

    const filteredRooms = activeTab === 'all' 
        ? roomTypes 
        : roomTypes.filter(room => room.type === activeTab);

    return (
        <div className="rooms-page">
            {/* Hero Section */}
            <section className="rooms-hero" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: '3rem', fontWeight: 700, letterSpacing: '1px', color: '#fff' }}
                    >
                        Our Rooms & Suites
                    </motion.h1>
                    <div style={{ width: 80, height: 4, background: 'linear-gradient(90deg, #3a86ff, #4361ee)', borderRadius: 2, margin: '18px auto 18px auto' }} />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.25rem', color: '#e0e0e0', maxWidth: 600, margin: '0 auto' }}
                    >
                        Discover a world of comfort, elegance, and personalized service. Each of our rooms and suites is designed to provide a unique and memorable stay, whether you're here for business, leisure, or a family getaway.
                    </motion.p>
                </div>
            </section>

            {/* Room Filter Tabs */}
            <section className="room-filter">
                <div className="container">
                    <motion.div 
                        className="filter-tabs"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <button 
                            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveTab('all')}
                        >
                            All Rooms
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'deluxe' ? 'active' : ''}`}
                            onClick={() => setActiveTab('deluxe')}
                        >
                            Deluxe
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'executive' ? 'active' : ''}`}
                            onClick={() => setActiveTab('executive')}
                        >
                            Executive
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'presidential' ? 'active' : ''}`}
                            onClick={() => setActiveTab('presidential')}
                        >
                            Presidential
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'family' ? 'active' : ''}`}
                            onClick={() => setActiveTab('family')}
                        >
                            Family
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Rooms Grid */}
            <section className="rooms-grid-section">
                <div className="container">
                    <motion.div 
                        className="grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        {filteredRooms.map((room) => (
                            <motion.div 
                                key={room.id}
                                className="room-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                onClick={() => setSelectedRoom(room)}
                                layout
                            >
                                <div className="room-image" style={{ backgroundImage: `url(${room.image})` }}>
                                    <div className="room-badge">
                                        <FiStar className="star-icon" />
                                        <span>{room.rating}</span>
                                    </div>
                                </div>
                                <div className="room-details">
                                    <h3>{room.name}</h3>
                                    <p className="room-desc">{room.description}</p>
                                    <div className="room-meta">
                                        <span><FiMapPin /> {room.size}</span>
                                        <span><FiUsers /> {room.capacity}</span>
                                    </div>
                                    <div className="room-price">
                                        From <span>${room.price}</span> / night
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Room Modal */}
            <AnimatePresence>
                {selectedRoom && (
                    <div className="room-modal">
                        <motion.div 
                            className="modal-overlay"
                            onClick={() => setSelectedRoom(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        <motion.div 
                            className="modal-content"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: 'spring', damping: 25 }}
                        >
                            <button 
                                className="close-modal" 
                                onClick={() => setSelectedRoom(null)}
                                whileHover={{ rotate: 90 }}
                            >
                                <FiX size={24} />
                            </button>
                            <div className="modal-grid">
                                <div className="modal-image" style={{ backgroundImage: `url(${selectedRoom.image})` }}></div>
                                <div className="modal-details">
                                    <h2>{selectedRoom.name}</h2>
                                    <div className="room-rating">
                                        <FiStar className="star-icon" />
                                        <span>{selectedRoom.rating}</span>
                                        <span className="reviews">({selectedRoom.reviews} reviews)</span>
                                    </div>
                                    <p className="room-description">{selectedRoom.description}</p>
                                    
                                    <div className="room-features">
                                        <h4>Room Features</h4>
                                        <ul>
                                            {selectedRoom.features.map((feature, index) => (
                                                <motion.li 
                                                    key={index}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                >
                                                    <FiCheck className="check-icon" /> {feature}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="room-specs">
                                        <motion.div 
                                            className="spec"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <FiMapPin />
                                            <div>
                                                <span>Size</span>
                                                <strong>{selectedRoom.size}</strong>
                                            </div>
                                        </motion.div>
                                        <motion.div 
                                            className="spec"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <FiUsers />
                                            <div>
                                                <span>Capacity</span>
                                                <strong>{selectedRoom.capacity}</strong>
                                            </div>
                                        </motion.div>
                                        <motion.div 
                                            className="spec"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <FiWifi />
                                            <div>
                                                <span>WiFi</span>
                                                <strong>Free</strong>
                                            </div>
                                        </motion.div>
                                        <motion.div 
                                            className="spec"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <FiCoffee />
                                            <div>
                                                <span>Breakfast</span>
                                                <strong>Included</strong>
                                            </div>
                                        </motion.div>
                                    </div>
                                    
                                    <div className="modal-actions">
                                        <div className="price">
                                            <span>Starting from</span>
                                            <h3>${selectedRoom.price}<small>/night</small></h3>
                                        </div>
                                        <motion.button 
                                            className="book-now"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                                setSelectedRoom(null);
                                                navigate(`/reserve?room=${encodeURIComponent(selectedRoom.name)}`);
                                            }}
                                        >
                                            Book Now
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Call to Action */}
            <section className="rooms-cta">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Can't Decide Which Room to Choose?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Our concierge team is available 24/7 to help you select the perfect accommodation for your stay
                    </motion.p>
                    <motion.button 
                        className="cta-button"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/contact')}
                    >
                        Contact Our Concierge
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default RoomsPage;