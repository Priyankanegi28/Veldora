// src/components/AuthPage.jsx
import React, { useState } from 'react';
import './AuthPage.css'; // Create this CSS file for styling

const AuthPage = ({ onLogin, onGuest }) => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login/signup logic here
        onLogin(); // Call the onLogin function to proceed to the main page
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
                </form>
                <p>
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <span onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Sign Up' : 'Login'}
                    </span>
                </p>
                <button className="guest-button" onClick={onGuest}>
                    Continue as Guest
                </button>
            </div>
        </div>
    );
};

export default AuthPage;