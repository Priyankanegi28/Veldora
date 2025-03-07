import { onAuthStateChanged, signOut } from "firebase/auth";
import { User } from 'lucide-react'; // Import icons
import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.webp';
import { auth } from '../firebaseConfig';
import './Navbar.css';

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                currentUser.reload().then(() => {
                    setUser(auth.currentUser);
                });
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
        setUser(null);
        setShowSidebar(false);
    };

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setShowSidebar(false);
            }
        };

        if (showSidebar) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showSidebar]);

    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Logo" width="30" height="30" />
                Veldora Hotel
            </div>
            <div className="menu">
                <a href="#">Rooms</a>
                <a href="#">Offers and Activities</a>
                <a href="#">Conferences</a>
                <a href="#">Restaurant</a>
                <a href="#">About Veldora</a>
                <a href="#">Contact</a>
            </div>
            <div className="right-options">
                <a href="#" className="booking">Booking</a>

                {user ? (
                    <>
                        <User 
                            className="profile-icon" 
                            size={24} 
                            color="white" 
                            onClick={() => setShowSidebar(!showSidebar)}
                        />
                        {/* Sidebar for Profile Details */}
                        <div ref={sidebarRef} className={`sidebar ${showSidebar ? 'show' : ''}`}>
                            <p><strong>{user.displayName || user.email.split("@")[0]}</strong></p>
                            <p>{user.email}</p>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </>
                ) : (
                    <button className="login-button" onClick={() => window.location.reload()}>
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
