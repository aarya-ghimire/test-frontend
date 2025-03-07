import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Travelify</h3>
          <p className="footer-description">
            Discover the world's most amazing destinations with us. We help you
            plan the perfect trip with detailed guides and recommendations.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/destinations">Destinations</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Popular Destinations</h3>
          <ul className="footer-links">
            <li>
              <Link to="/destinations/1">Bali, Indonesia</Link>
            </li>
            <li>
              <Link to="/destinations/2">Santorini, Greece</Link>
            </li>
            <li>
              <Link to="/destinations/3">Kyoto, Japan</Link>
            </li>
            <li>
              <Link to="/destinations/5">Paris, France</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <p>Email: travelify@gmail.com</p>
          <p>Phone: 9800000000</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2025 TravelExplorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
