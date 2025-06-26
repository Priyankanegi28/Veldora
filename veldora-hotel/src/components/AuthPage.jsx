import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FiArrowRight, FiEye, FiEyeOff, FiLock, FiMail, FiUser } from "react-icons/fi";
import { auth } from "../firebaseConfig";
import "./AuthPage.css";

const AuthPage = ({ onLogin, onGuest }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Luxury hotel images for background rotation
    const hotelImages = [
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791", // Elegant lobby
        "https://images.unsplash.com/photo-1582719471383-971fb4b6d1b7", // Pool area
        "https://images.unsplash.com/photo-1566073771259-6a8506099945"  // Luxury suite
    ];

    // Rotate background images every 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % hotelImages.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);
        
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                await updateProfile(userCredential.user, { displayName: name });
            }
            onLogin();
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="auth-page">
            {/* Dynamic Background Images */}
            <div className="auth-background">
                {hotelImages.map((image, index) => (
                    <div 
                        key={index}
                        className={`background-image ${index === currentImageIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)` }}
                    />
                ))}
                <div className="background-overlay"></div>
            </div>

            {/* Main Auth Container */}
            <motion.div 
                className="auth-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="auth-form">
                    {/* Form Header */}
                    <motion.div 
                            className="form-header"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="serene-logo">
                            <div className="wave"></div>
                            <div className="moon"></div>
                        </div>
                        <div>
                            <h1>Serene Haven</h1>
                            <span className="logo-subtext">Luxury Retreat</span>
                        </div>
                    </motion.div>


                    {/* Error Message */}
                    <AnimatePresence>
                        {error && (
                            <motion.div
                                className="error-message"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {error}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Auth Form */}
                    <form onSubmit={handleSubmit}>
                        {/* Name Field (Sign Up only) */}
                        {!isLogin && (
                            <motion.div
                                className="input-group"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <label htmlFor="name">Full Name</label>
                                <div className="input-wrapper">
                                    <FiUser className="input-icon" />
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="John Smith"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                            </motion.div>
                        )}

                        {/* Email Field */}
                        <motion.div
                            className="input-group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: isLogin ? 0.4 : 0.5, duration: 0.5 }}
                        >
                            <label htmlFor="email">Email Address</label>
                            <div className="input-wrapper">
                                <FiMail className="input-icon" />
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </motion.div>

                        {/* Password Field with Toggle */}
                        <motion.div
                            className="input-group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: isLogin ? 0.5 : 0.6, duration: 0.5 }}
                        >
                            <label htmlFor="password">Password</label>
                            <div className="input-wrapper">
                                <FiLock className="input-icon" />
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button 
                                    type="button" 
                                    className="password-toggle"
                                    onClick={togglePasswordVisibility}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            className="primary-button"
                            disabled={isLoading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: isLogin ? 0.6 : 0.7, duration: 0.5 }}
                        >
                            {isLoading ? (
                                <div className="spinner"></div>
                            ) : (
                                <>
                                    {isLogin ? "Sign In" : "Register"}
                                    <FiArrowRight className="button-icon" />
                                </>
                            )}
                        </motion.button>
                    </form>

                    {/* Auth Footer */}
                    <motion.div 
                        className="auth-footer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <p>
                            {isLogin ? "Don't have an account?" : "Already a member?"}
                            <button 
                                className="text-button" 
                                onClick={() => setIsLogin(!isLogin)}
                            >
                                {isLogin ? "Create account" : "Sign in"}
                            </button>
                        </p>

                        <div className="divider">
                            <span>or</span>
                        </div>

                        <motion.button
                            className="secondary-button"
                            onClick={onGuest}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Continue as Guest
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default AuthPage;