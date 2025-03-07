import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AuthPage from "./components/AuthPage";
import Banner from "./components/Banner";
import DealsSection from "./components/DealsSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { auth } from "./firebaseConfig";

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
                {!isAuthenticated && !isGuest ? (
                    <AuthPage 
                        onLogin={() => setIsAuthenticated(true)} 
                        onGuest={() => setIsGuest(true)} 
                    />
                ) : (
                    <>
                        <Navbar />
                        <Banner />
                        <DealsSection title="Exclusive Deals" deals={deals1} />
                        <DealsSection title="Trending Destinations" deals={deals2} />
                        <Footer />
                    </>
                )}
            </div>
        </Router>
    );
}

export default App;
