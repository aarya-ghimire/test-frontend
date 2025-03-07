import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Explore the World's Beauty</h1>
        <p className="hero-subtitle">
          Discover amazing destinations, plan your perfect trip, and create unforgettable memories
        </p>
        <SearchBar className="hero-search" />
        <div className="hero-cta">
          <Link to="/destinations" className="btn btn-primary">
            Browse Destinations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;