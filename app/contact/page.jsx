"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  if (submitted) {
    return (
      <div className="main-cont">
        <div className="shoe-store">
          <h1 className="shoe-store-text">Thank You!</h1>
          <p className="shoe-store-subtitle">
            Your message has been sent. We appreciate your feedback.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="btn-primary"
            style={{
              padding: '12px 24px',
              background: '#9333ea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="main-cont">
      <div className="shoe-store">
        <h1 className="shoe-store-text">Contact Us</h1>
        <p className="shoe-store-subtitle">
          We'd love to hear from you. Send us a message!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form" style={{maxWidth: '600px', margin: '0 auto'}}>
        <div style={{display: 'grid', gap: '1rem', padding: '1rem'}}>
          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px'
            }}
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px'
            }}
          />
          <input
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px'
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px',
              resize: 'vertical',
              width: '100%'
            }}
          />
          <button 
            type="submit"
            style={{
              padding: '14px 28px',
              background: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'none'}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

