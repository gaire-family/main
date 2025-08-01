import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-us">
          <h3>Gairepariwar UK</h3>
          <p>
            Connecting generations, preserving heritage, and building a stronger
            community in the UK.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/family-tree">Family Tree</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/resources">Resources</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p>
            Email:{' '}
            <a href="mailto:info@gairepariwar.org.uk">
              info@gairepariwar.org.uk
            </a>
          </p>
          <p>London, UK</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Gairepariwar UK. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
