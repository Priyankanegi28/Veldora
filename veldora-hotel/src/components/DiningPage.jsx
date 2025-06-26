import React, { useState } from 'react';
import './DiningPage.css';

const restaurants = [
  {
    name: 'Azure Ocean Grill',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS989ryRQ0tEaBboQbvmfgC0u-f0tjsRu5YDw&s',
    cuisine: 'Seafood & Grill',
    description: 'Fresh seafood and grilled specialties with panoramic ocean views.'
  },
  {
    name: 'Saffron Spice',
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2023/11/Cod-prawn-pie-with-saffron-potatoes-6ea88db.jpg',
    cuisine: 'Indian Fine Dining',
    description: 'Aromatic spices and traditional recipes in an elegant setting.'
  },
  {
    name: 'La Bella Vita',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0ww_i3prcuMmexxgyU3muvMi7YFt7Hy8Ew&s',
    cuisine: 'Italian',
    description: 'Classic Italian cuisine, wood-fired pizzas, and homemade pastas.'
  },
  {
    name: 'SkyBar Lounge',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRty6z3UMZt1va7zEwV_C99tVXah89SKmv7dQ&s',
    cuisine: 'Cocktails & Tapas',
    description: 'Signature cocktails, tapas, and live music with a rooftop view.'
  }
];

const featuredDishes = [
  {
    name: 'Grilled Lobster',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlqLDM-X5h6uF5tKDOpY1T83k8Z1wG2bX2hg&s'
  },
  {
    name: 'Saffron Biryani',
    image: 'https://dorreensaffron.com/cdn/shop/articles/saffron-chicken-biryani.jpg?v=1655708152&width=1400'
  },
  {
    name: 'Margherita Pizza',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2w-6ljxAJtEImAJ4zBsRnou1CoSAVmgvQw&s'
  },
  {
    name: 'Tiramisu',
    image: 'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2024/09/THUMB-VIDEO-2_rev1-56.jpeg?im=Resize,width=742;'
  }
];

const DiningPage = () => {
  const [showReserve, setShowReserve] = useState(false);

  return (
    <div className="dining-page">
      {/* Hero Section */}
      <section className="dining-hero" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836)'}}>
        <div className="dining-hero-overlay">
          <h1>World-Class Dining</h1>
          <p>Exquisite culinary experiences for every palate, crafted by master chefs.</p>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="restaurants-section">
        <h2 className="section-title" style={{textAlign: 'center'}}>Our Restaurants & Bars</h2>
        <div className="restaurants-grid">
          {restaurants.map((r, idx) => (
            <div className="restaurant-card" key={idx}>
              <div className="restaurant-image" style={{backgroundImage: `url(${r.image})`}}></div>
              <div className="restaurant-content">
                <h3>{r.name}</h3>
                <div className="restaurant-cuisine">{r.cuisine}</div>
                <p>{r.description}</p>
                <button className="view-menu-btn">View Menu</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Dishes Carousel */}
      <section className="dishes-section">
        <h2 className="section-title" style={{textAlign: 'center'}}>Signature Dishes</h2>
        <div className="dishes-carousel">
          {featuredDishes.map((dish, idx) => (
            <div className="dish-card" key={idx}>
              <div className="dish-image" style={{backgroundImage: `url(${dish.image})`}}></div>
              <div className="dish-name">{dish.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reserve a Table CTA */}
      <section className="dining-cta-section">
        <button className="dining-cta-btn" onClick={() => setShowReserve(true)}>Reserve a Table</button>
      </section>

      {/* Reserve Modal (simple placeholder) */}
      {showReserve && (
        <div className="modal-overlay" onClick={() => setShowReserve(false)}>
          <div className="modal dining-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowReserve(false)}>&times;</button>
            <h2>Reserve a Table</h2>
            <p>Reservation feature coming soon!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiningPage;