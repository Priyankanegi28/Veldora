import { onAuthStateChanged, signOut } from "firebase/auth";
import { CalendarDays, Gift, Hotel, Info, Menu, Phone, User, Utensils } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import './Navbar.css';

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const sidebarRef = useRef(null);
    const menuRef = useRef(null);
    const profileIconRef = useRef(null);
    const menuIconRef = useRef(null);
    const navigate = useNavigate();

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
        navigate('/');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                profileIconRef.current !== event.target
            ) {
                setShowSidebar(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showSidebar]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                menuIconRef.current !== event.target
            ) {
                setShowMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showMenu]);

    return (
        <nav>
            <div className="logo-container">
                <Link to="/" className="serene-logo">
                    <div className="wave"></div>
                    <div className="moon"></div>
                </Link>
                <div className="logo-text-container">
                    <Link to="/" className="logo-text">Serene Haven</Link>
                    <span className="logo-subtext">Luxury Retreat</span>
                </div>
            </div>

            <Menu 
                ref={menuIconRef}
                className="hamburger-icon" 
                size={28} 
                onClick={() => setShowMenu((prev) => !prev)}
                aria-label="Toggle menu"
            />

            <div ref={menuRef} className={`menu ${showMenu ? 'show' : ''}`}>
                <Link to="/rooms"><Hotel size={18} className="menu-icon" />Rooms & Suites</Link>
                <Link to="/experiences"><Gift size={18} className="menu-icon" />Experiences</Link>
                <Link to="/events"><CalendarDays size={18} className="menu-icon" />Events</Link>
                <Link to="/dining"><Utensils size={18} className="menu-icon" />Dining</Link>
                <Link to="/about"><Info size={18} className="menu-icon" />About</Link>
                <Link to="/contact"><Phone size={18} className="menu-icon" />Contact</Link>
            </div>

            <div className="right-options">
                <Link to="/reserve" className="booking-btn">
                    <span>Reserve Now</span>
                </Link>

                {user ? (
                    <>
                        <div className="profile-container" ref={profileIconRef} onClick={() => setShowSidebar((prev) => !prev)}>
                            <User className="profile-icon" size={24} />
                            <span className="profile-name">{user.displayName || user.email.split("@")[0]}</span>
                        </div>
                        
                        <div ref={sidebarRef} className={`sidebar ${showSidebar ? 'show' : ''}`}>
                            <div className="sidebar-header">
                                <div className="sidebar-avatar">
                                    {user.displayName?.charAt(0) || user.email.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <p className="sidebar-username">{user.displayName || user.email.split("@")[0]}</p>
                                    <p className="sidebar-email">{user.email}</p>
                                </div>
                            </div>
                            <button onClick={handleLogout} className="logout-btn">
                                Sign Out
                            </button>
                        </div>
                    </>
                ) : (
                    <Link to="/login" className="login-btn">
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;