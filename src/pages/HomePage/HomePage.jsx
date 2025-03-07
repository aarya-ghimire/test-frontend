import { useState, useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import FeaturedDestinations from '../../components/FeaturedDestinations/FeaturedDestinations';
import destinations from '../../data/destinations';
import './HomePage.css';

const HomePage = () => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const savedWishlist = localStorage.getItem('travelAppWishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('travelAppWishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const handleWishlistToggle = (destination) => {
    if (wishlist.some(item => item.id === destination.id)) {
      // Remove from wishlist
      setWishlist(wishlist.filter(item => item.id !== destination.id));
    } else {
      // Add to wishlist
      setWishlist([...wishlist, destination]);
    }
  };

  return (
    <div className="home-page">
      <Hero />
      
      <FeaturedDestinations 
        wishlist={wishlist}
        onWishlistToggle={handleWishlistToggle}
      />
      
      <section className="popular-destinations">
        <div className="container">
          <h2 className="section-title">Popular Destinations</h2>
          <div className="destination-categories">
            <div className="destination-category">
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80" 
                alt="Beach Destinations"
                className="category-image"
              />
              <h3>Beach Getaways</h3>
              <p>Relax on pristine beaches with crystal clear waters</p>
            </div>
            
            <div className="destination-category">
              <img 
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Mountain Destinations"
                className="category-image"
              />
              <h3>Mountain Escapes</h3>
              <p>Breathtaking views and adventures in the mountains</p>
            </div>
            
            <div className="destination-category">
              <img 
                src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="City Destinations"
                className="category-image"
              />
              <h3>City Explorations</h3>
              <p>Discover the culture and excitement of vibrant cities</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="travel-tips">
        <div className="container">
          <h2 className="section-title">Travel Tips & Inspiration</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Packing Essentials</h3>
              <p>Learn how to pack efficiently for any type of trip with our comprehensive guide to travel essentials.</p>
            </div>
            
            <div className="tip-card">
              <h3>Budget Travel</h3>
              <p>Discover how to make the most of your travel budget with money-saving tips and affordable destinations.</p>
            </div>
            
            <div className="tip-card">
              <h3>Solo Travel</h3>
              <p>Embark on a solo adventure with confidence using our safety tips and destination recommendations.</p>
            </div>
            
            <div className="tip-card">
              <h3>Sustainable Tourism</h3>
              <p>Make a positive impact with eco-friendly travel choices and responsible tourism practices.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;