'use client'
import "./login.css"

import { useStore } from '../../context/StoreContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useStore();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      router.push('/product');
    }
  };

  return (
        <div className="login-container">

            <div className="login-left">
                <h1 className="brand-title">
                    <span className="logo-login-text">👟 ShoeStore</span>
                </h1>

                <p className="tagline">
                    Step into style with the best footwear collection.
                </p>
            </div>

            <div className="login-right">
                <div className="login-box">
                    <h2>Login</h2>

                    <form onSubmit={handleSubmit}>
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

                      <button type="submit" className="login-btn">Login</button>
                    </form>

                    <p className="signup-text">
                        Don't have an account? <a href="/signup">Sign Up</a>
                    </p>
                </div>
            </div>

        </div>
    )
}
