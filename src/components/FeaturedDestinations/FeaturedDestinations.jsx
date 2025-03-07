import { useState, useEffect } from 'react';
import DestinationCard from '../DestinationCard/DestinationCard';
import destinations from '../../data/destinations';
import './FeaturedDestinations.css';

const FeaturedDestinations = ({ wishlist, onWishlistToggle }) => {
  const [featuredDestinations, setFeaturedDestinations] = useState([]);

  useEffect(() => {
    // Filter featured destinations
    const featured = destinations.filter(destination => destination.featured);
    setFeaturedDestinations(featured);
  }, []);

  const isInWishlist = (destinationId) => {
    return wishlist && wishlist.some(item => item.id === destinationId);
  };

  return (
    <section className="featured-destinations">
      <div className="container">
        <h2 className="section-title">Featured Destinations</h2>
        <div className="grid grid-3">
          {featuredDestinations.map(destination => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onWishlistToggle={onWishlistToggle}
              isInWishlist={isInWishlist(destination.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;