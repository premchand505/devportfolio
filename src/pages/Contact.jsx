import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">
        I'd love to hear from you. Fill out the form below and a response will be transmitted promptly.
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Neo..." required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="matrix@reality.ai" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Decrypt your message here..." rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Transmit</button>
      </form>
    </div>
    </section>
  );
};

export default Contact;
