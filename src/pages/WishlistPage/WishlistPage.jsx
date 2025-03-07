import { Link } from 'react-router-dom';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import './WishlistPage.css';

const WishlistPage = ({ wishlist, removeFromWishlist }) => {
  const handleRemoveFromWishlist = (destination) => {
    removeFromWishlist(destination.id);
  };

  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <div className="container">
          <h1>Your Wishlist</h1>
          <p>Save your dream destinations and plan your future adventures</p>
        </div>
      </div>
      
      <div className="container">
        {wishlist.length === 0 ? (
          <div className="empty-wishlist">
            <div className="empty-wishlist-icon">❤️</div>
            <h2>Your wishlist is empty</h2>
            <p>Start adding destinations to your wishlist to keep track of places you want to visit.</p>
            <Link to="/destinations" className="btn btn-primary">
              Browse Destinations
            </Link>
          </div>
        ) : (
          <div className="wishlist-content">
            <div className="wishlist-info">
              <p>You have {wishlist.length} destination{wishlist.length !== 1 ? 's' : ''} in your wishlist</p>
            </div>
            
            <div className="wishlist-grid">
              {wishlist.map(destination => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  onWishlistToggle={handleRemoveFromWishlist}
                  isInWishlist={true}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;