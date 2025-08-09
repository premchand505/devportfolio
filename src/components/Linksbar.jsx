import React from 'react';
import './Linksbar.css';
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Linksbar = () => {
  return (
    <div className="linksbar-container">
      <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin className="social-icon" />
      </a>
      <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram className="social-icon" />
      </a>
      <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <FaTwitter className="social-icon" />
      </a>
      <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub className="social-icon" />
      </a>
    </div>
  );
};

export default Linksbar;