import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import bannerImage from "../assets/banner.webp";
import { auth } from "../firebaseConfig";
import "./AuthPage.css";

const AuthPage = ({ onLogin, onGuest }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState(""); // New state for name
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                // Sign up and set display name
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                await updateProfile(userCredential.user, { displayName: name }); // Store name in Firebase
            }
            onLogin(); // Trigger authentication state change
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-form">
                    <h2>{isLogin ? "Login" : "Sign Up"}</h2>
                    {error && <p className="error">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        )}
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
                        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
                    </form>
                    
                    <p>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <span onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? "Sign Up" : "Login"}
                        </span>
                    </p>
                    <button className="guest-button" onClick={onGuest}>
                        Continue as Guest
                    </button>
                </div>
                <div className="auth-image">
                    <img src={bannerImage} alt="Welcome Banner" />
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
