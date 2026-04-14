'use client'
import "./signup.css"

import { useStore } from '../../context/StoreContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signup } = useStore();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (signup(email, password)) {
      router.push('/login');
    }
  };

  return (
        <div className="signup-container">

          
            <div className="signup-left">
                <h1 className="brand-title">
                    <span className="logo-signup-text">👟 ShoeStore</span>
                </h1>

                <p className="tagline">
                    Join us and step into a world of premium footwear.
                </p>
            </div>

           
            <div className="signup-right">
                <div className="signup-box">
                    <h2>Create Account</h2>

                    <form onSubmit={handleSubmit}>
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="input-field" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                      />
                      <input 
                        type="email" 
                        placeholder="Email" 
                        className="input-field" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                      />
                      <input 
                        type="password" 
                        placeholder="Password" 
                        className="input-field" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                      />
                      <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        className="input-field" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required 
                      />

                      <button type="submit" className="signup-btn">Sign Up</button>
                    </form>

                    <p className="login-text">
                        Already have an account? <a href="/login">Login</a>
                    </p>
                </div>
            </div>

        </div>
    )
}
