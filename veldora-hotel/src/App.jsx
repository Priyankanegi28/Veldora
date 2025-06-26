import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AuthPage from "./components/AuthPage";
import Banner from "./components/Banner";
import DealsSection from "./components/DealsSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import DiningPage from "./components/DiningPage";
import EventsPage from "./components/EventsPage";
import ExperiencesPage from "./components/ExperiencesPage";
import ReservePage from "./components/ReservePage";
import RoomsPage from "./components/RoomsPage";
import BookExperiencePage from './components/BookExperiencePage';
import RsvpPage from './components/RsvpPage';
import { auth } from "./firebaseConfig";
import { Calendar, ChevronLeft, ChevronRight, Utensils, Wifi, Droplets, Dumbbell, Flower, ConciergeBell, Star, StarOff, Gift, CalendarDays } from 'lucide-react';

import beachfrontBliss from "./assets/beachfront-bliss.jpeg";
import cityEscape from "./assets/city-escape.jpg";
import coastalEscape from "./assets/coastal-escape.jpg";
import desertRetreat from "./assets/desert-retreat.jpeg";
import jungleSafari from "./assets/jungle-safari.jpg";
import luxuryStay from "./assets/luxury-stay.jpeg";
import mountainEscape from "./assets/mountain-escape.jpeg";
import tropicalParadise from "./assets/tropical-paradise.jpeg";

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


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isGuest, setIsGuest] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsAuthenticated(!!user);
        });
        return () => unsubscribe();
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Always show AuthPage at /login, redirect to / if already authenticated or guest */}
                    <Route path="/login" element={
                        (!isAuthenticated && !isGuest)
                            ? <AuthPage onLogin={() => setIsAuthenticated(true)} onGuest={() => setIsGuest(true)} />
                            : <Navigate to="/" />
                    } />
                    {/* All other routes require authentication or guest */}
                    {(!isAuthenticated && !isGuest) ? (
                        <Route path="*" element={<Navigate to="/login" />} />
                    ) : (
                        <>
                            <Route path="/" element={<><Navbar /><HomePage /><Footer /></>} />
                            <Route path="/rooms" element={<><Navbar /><RoomsPage /><Footer /></>} />
                            <Route path="/about" element={<><Navbar /><AboutPage /><Footer /></>} />
                            <Route path="/contact" element={<><Navbar /><ContactPage /><Footer /></>} />
                            <Route path="/dining" element={<><Navbar /><DiningPage /><Footer /></>} />
                            <Route path="/events" element={<><Navbar /><EventsPage /><Footer /></>} />
                            <Route path="/experiences" element={<><Navbar /><ExperiencesPage /><Footer /></>} />
                            <Route path="/reserve" element={<><Navbar /><ReservePage /><Footer /></>} />
                            <Route path="/book-experience" element={<><Navbar /><BookExperiencePage /><Footer /></>} />
                            <Route path="/rsvp" element={<><Navbar /><RsvpPage /><Footer /></>} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </>
                    )}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
