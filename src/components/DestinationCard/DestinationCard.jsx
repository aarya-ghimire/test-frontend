import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './DestinationCard.css';

const DestinationCard = ({ destination, onWishlistToggle, isInWishlist }) => {
  const { id, name, image, description, rating, price, currency, location } = destination;

  return (
    <div className="destination-card">
      <div className="destination-card-image-container">
        <Link to={`/destinations/${id}`}>
          <LazyLoadImage
            src={image}
            alt={name}
            effect="blur"
            className="destination-card-image"
          />
        </Link>
        {onWishlistToggle && (
          <button 
            className={`wishlist-button ${isInWishlist ? 'active' : ''}`}
            onClick={() => onWishlistToggle(destination)}
            aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <svg viewBox="0 0 24 24" fill={isInWishlist ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        )}
      </div>
      <div className="destination-card-content">
        <div className="destination-card-header">
          <h3 className="destination-card-title">
            <Link to={`/destinations/${id}`}>{name}</Link>
          </h3>
          <div className="destination-card-rating">
            <span className="star">★</span>
            <span>{rating}</span>
          </div>
        </div>
        <p className="destination-card-location">{location}</p>
        <p className="destination-card-description">{description.substring(0, 100)}...</p>
        <div className="destination-card-footer">
          <span className="destination-card-price">
            {price} {currency}
          </span>
          <Link to={`/destinations/${id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;