import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import DestinationsPage from './pages/DestinationsPage/DestinationsPage';
import DestinationDetailsPage from './pages/DestinationDetailsPage/DestinationDetailsPage';
import WishlistPage from './pages/WishlistPage/WishlistPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import './App.css';

function App() {
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

  // Add destination to wishlist
  const addToWishlist = (destination) => {
    if (!wishlist.some(item => item.id === destination.id)) {
      setWishlist([...wishlist, destination]);
    }
  };

  // Remove destination from wishlist
  const removeFromWishlist = (destinationId) => {
    setWishlist(wishlist.filter(item => item.id !== destinationId));
  };

  // Check if a destination is in the wishlist
  const isInWishlist = (destinationId) => {
    return wishlist.some(item => item.id === destinationId);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route 
              path="/destinations/:id" 
              element={
                <DestinationDetailsPage 
                  addToWishlist={addToWishlist} 
                  removeFromWishlist={removeFromWishlist}
                  isInWishlist={isInWishlist}
                />
              } 
            />
            <Route 
              path="/wishlist" 
              element={
                <WishlistPage 
                  wishlist={wishlist} 
                  removeFromWishlist={removeFromWishlist} 
                />
              } 
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;