// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>123 Main Street, Cityville</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@restaurant.com</p>
        </div>
        <div className="social-links link-with-space">
          <h3>Follow Us</h3>
          <a
            href="https://facebook.com/restaurant"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <spam></spam>
          <a
            href="https://twitter.com/restaurant"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/restaurant"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <a href="/menu">Menu</a>
          <a href="/reservations">Reservations</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Your Restaurant Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
