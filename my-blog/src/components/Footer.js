import React from 'react';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Join us on this journey as we embark on exciting explorations, uncover hidden gems, and engage in meaningful conversations.</p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: <a href="mailto:info@myblog.com" className="contact-link">info@myblog.com</a></p>
            <p>Phone: +91-998-423-7890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://twitter.com" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="https://facebook.com" className="social-link"><i className="fab fa-facebook"></i></a>
              <a href="https://instagram.com" className="social-link"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 My Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
