import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import ReviewList from '../../components/ReviewList/ReviewList';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import destinations from '../../data/destinations';
import './DestinationDetailsPage.css';

const DestinationDetailsPage = ({ addToWishlist, removeFromWishlist, isInWishlist }) => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Find the destination by ID
    const foundDestination = destinations.find(dest => dest.id === parseInt(id));
    
    if (foundDestination) {
      setDestination(foundDestination);
      setReviews(foundDestination.reviews || []);
    }
    
    setLoading(false);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  const handleWishlistToggle = () => {
    if (isInWishlist(destination.id)) {
      removeFromWishlist(destination.id);
    } else {
      addToWishlist(destination);
    }
  };

  const handleReviewSubmit = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading destination details...</p>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="container">
        <div className="not-found">
          <h2>Destination Not Found</h2>
          <p>The destination you're looking for doesn't exist or has been removed.</p>
          <Link to="/destinations" className="btn btn-primary">
            Browse All Destinations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="destination-details-page">
      <div className="destination-header">
        <div className="container">
          <div className="destination-header-content">
            <h1>{destination.name}</h1>
            <div className="destination-meta">
              <div className="destination-location">
                <span className="icon">📍</span> {destination.location}
              </div>
              <div className="destination-rating">
                <span className="icon">★</span> {destination.rating} ({reviews.length} reviews)
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="destination-content">
          <div className="destination-main">
            <ImageGallery images={destination.images} />
            
            <div className="destination-description">
              <h2>About {destination.name}</h2>
              <p>{destination.longDescription}</p>
            </div>
            
            <div className="destination-features">
              <div className="feature">
                <h3>Best Time to Visit</h3>
                <p>{destination.bestTimeToVisit}</p>
              </div>
              <div className="feature">
                <h3>Recommended Duration</h3>
                <p>{destination.duration}</p>
              </div>
              <div className="feature">
                <h3>Highlights</h3>
                <ul className="tags">
                  {destination.tags.map((tag, index) => (
                    <li key={index} className="tag">
                      {tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <ReviewList reviews={reviews} />
            <ReviewForm onSubmit={handleReviewSubmit} />
          </div>
          
          <div className="destination-sidebar">
            <div className="booking-card">
              <div className="booking-price">
                <span className="price">{destination.price} {destination.currency}</span>
                <span className="price-note">per person</span>
              </div>
              
              <button className="btn btn-primary btn-block">
                Book Now
              </button>
              
              <button 
                className={`btn ${isInWishlist(destination.id) ? 'btn-accent' : 'btn-secondary'} btn-block wishlist-btn`}
                onClick={handleWishlistToggle}
              >
                {isInWishlist(destination.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </button>
              
              <div className="booking-info">
                <div className="info-item">
                  <span className="info-label">Availability</span>
                  <span className="info-value">Year-round</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Group Size</span>
                  <span className="info-value">1-10 people</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Languages</span>
                  <span className="info-value">English, Spanish</span>
                </div>
              </div>
            </div>
            
            <div className="weather-card">
              <h3>Weather Information</h3>
              <p>Average temperatures and weather conditions in {destination.name}:</p>
              <div className="weather-seasons">
                <div className="weather-season">
                  <h4>Spring</h4>
                  <p>Mild temperatures, occasional rain</p>
                </div>
                <div className="weather-season">
                  <h4>Summer</h4>
                  <p>Warm and sunny, perfect for outdoor activities</p>
                </div>
                <div className="weather-season">
                  <h4>Fall</h4>
                  <p>Cool temperatures, beautiful foliage</p>
                </div>
                <div className="weather-season">
                  <h4>Winter</h4>
                  <p>Cold with possible snow, great for winter sports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;