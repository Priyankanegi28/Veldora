import { onAuthStateChanged, signOut } from "firebase/auth";
import { Menu, User } from 'lucide-react'; // Import icons
import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.webp';
import { auth } from '../firebaseConfig';
import './Navbar.css';

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const sidebarRef = useRef(null);
    const menuRef = useRef(null);
    const profileIconRef = useRef(null);
    const menuIconRef = useRef(null); // Ref for hamburger icon

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

    // Close sidebar when clicking outside (but ignore clicks on profile icon)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                profileIconRef.current !== event.target // Ignore profile icon clicks
            ) {
                setShowSidebar(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showSidebar]);

    // Close menu when clicking outside (but ignore clicks on hamburger icon)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                menuIconRef.current !== event.target // Ignore hamburger icon clicks
            ) {
                setShowMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showMenu]);

    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Logo" width="30" height="30" />
                Veldora Hotel
            </div>

            {/* Hamburger Button */}
            <Menu 
                ref={menuIconRef} // Reference for hamburger icon
                className="hamburger-icon" 
                size={28} 
                color="white" 
                onClick={() => setShowMenu((prev) => !prev)} // Toggle menu
            />

            {/* Menu */}
            <div ref={menuRef} className={`menu ${showMenu ? 'show' : ''}`}>
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
                            ref={profileIconRef} // Reference for profile icon
                            className="profile-icon" 
                            size={24} 
                            color="white" 
                            onClick={() => setShowSidebar((prev) => !prev)} // Toggle sidebar
                        />
                        {/* Sidebar for Profile Details */}
                        <div ref={sidebarRef} className={`sidebar ${showSidebar ? 'show' : ''}`}>
                            <p><strong>{user.displayName || user.email.split("@")[0]}</strong></p>
                            <p>{user.email}</p>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </>
                ) : (
                    <button className="login-button">
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
