import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">Travelify</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-icon-bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`menu-icon-bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`menu-icon-bar ${isMenuOpen ? "open" : ""}`}></div>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li className={`navbar-item ${isActive("/")}`}>
            <Link to="/" className="navbar-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className={`navbar-item ${isActive("/destinations")}`}>
            <Link
              to="/destinations"
              className="navbar-link"
              onClick={closeMenu}
            >
              Destinations
            </Link>
          </li>
          <li className={`navbar-item ${isActive("/wishlist")}`}>
            <Link to="/wishlist" className="navbar-link" onClick={closeMenu}>
              Wishlist
            </Link>
          </li>
          <li className={`navbar-item ${isActive("/add-destination")}`}>
            <Link
              to="/add-destination"
              className="navbar-link add-destination-link"
              onClick={closeMenu}
            >
              + Add Destination
            </Link>
          </li>
          <li className={`navbar-item ${isActive("/login")}`}>
            <Link
              to="/login"
              className="navbar-link login-link"
              onClick={closeMenu}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
