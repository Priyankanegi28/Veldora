import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import AuthPage from './components/AuthPage';
import Banner from './components/Banner';
import DealsSection from './components/DealsSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// Import images from assets
import beachfrontBliss from './assets/beachfront-bliss.jpeg';
import cityEscape from './assets/city-escape.jpg';
import coastalEscape from './assets/coastal-escape.jpg';
import desertRetreat from './assets/desert-retreat.jpeg';
import jungleSafari from './assets/jungle-safari.jpg';
import luxuryStay from './assets/luxury-stay.jpeg';
import mountainEscape from './assets/mountain-escape.jpeg';
import tropicalParadise from './assets/tropical-paradise.jpeg';

const deals1 = [
    { image: mountainEscape, title: "Mountain Escape", location: "Swiss Alps", rating: "★★★★☆", price: "₹599/Night" },
    { image: beachfrontBliss, title: "Beachfront Bliss", location: "Maldives", rating: "★★★★☆", price: "₹799/Night" },
    { image: desertRetreat, title: "Desert Retreat", location: "Dubai", rating: "★★★★★", price: "₹899/Night" },
    { image: tropicalParadise, title: "Tropical Paradise", location: "Bora Bora", rating: "★★★★☆", price: "₹749/Night" }
];

const deals2 = [
    { image: cityEscape, title: "City Escape", location: "New York City", rating: "★★★☆☆", price: "₹999/night" },
    { image: luxuryStay, title: "Luxury Stay", location: "Tokyo", rating: "★★★★★", price: "₹1,499/night" },
    { image: jungleSafari, title: "Jungle Safari", location: "Costa Rica", rating: "★★★★☆", price: "₹799/night" },
    { image: coastalEscape, title: "Coastal Escape", location: "Hawaii", rating: "★★★☆☆", price: "₹1,099/night" }
];

function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <DealsSection title="Exclusive Deals" subtitle="Find the best offers and activities to make your stay unforgettable." deals={deals1} />
            <DealsSection title="Trending destinations" subtitle="Your next adventure awaits at these must-visit locations." deals={deals2} />
            <Footer />
        </>
    );
}

// Component to handle authentication redirection
function AuthRedirect() {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (!isAuthenticated) {
            navigate('/login'); // Redirect to login page if not authenticated
        }
    }, [navigate]);

    return <Home />;
}

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<AuthRedirect />} />
                    <Route path="/login" element={<AuthPage onLogin={() => {
                        localStorage.setItem('isAuthenticated', 'true'); // Save login status
                        window.location.href = '/'; // Reload to go to home
                    }} onGuest={() => {
                        localStorage.setItem('isAuthenticated', 'true'); // Guest mode enabled
                        window.location.href = '/'; // Reload to go to home
                    }} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
