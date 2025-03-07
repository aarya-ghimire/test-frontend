import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import FilterSort from '../../components/FilterSort/FilterSort';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';
import destinations from '../../data/destinations';
import './DestinationsPage.css';

const DestinationsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || '';

  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [activeSort, setActiveSort] = useState('recommended');
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const destinationsPerPage = 6;

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

  // Filter and sort destinations whenever filters, sort, or search changes
  useEffect(() => {
    let results = [...destinations];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(destination => 
        destination.name.toLowerCase().includes(query) ||
        destination.description.toLowerCase().includes(query) ||
        destination.location.toLowerCase().includes(query)
      );
    }
    
    // Apply tag filters
    if (activeFilters.length > 0) {
      results = results.filter(destination => 
        destination.tags && destination.tags.some(tag => activeFilters.includes(tag))
      );
    }
    
    // Apply sorting
    switch (activeSort) {
      case 'price-low':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 'recommended' - no specific sort, use default order
        break;
    }
    
    setFilteredDestinations(results);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchQuery, activeFilters, activeSort]);

  const handleFilterChange = (filterId) => {
    if (filterId === 'clear') {
      setActiveFilters([]);
    } else {
      setActiveFilters(prev => 
        prev.includes(filterId)
          ? prev.filter(id => id !== filterId)
          : [...prev, filterId]
      );
    }
  };

  const handleSortChange = (sortId) => {
    setActiveSort(sortId);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of results
    window.scrollTo({
      top: document.querySelector('.destinations-results').offsetTop - 100,
      behavior: 'smooth'
    });
  };

  const handleWishlistToggle = (destination) => {
    if (wishlist.some(item => item.id === destination.id)) {
      // Remove from wishlist
      setWishlist(wishlist.filter(item => item.id !== destination.id));
    } else {
      // Add to wishlist
      setWishlist([...wishlist, destination]);
    }
  };

  // Calculate pagination
  const indexOfLastDestination = currentPage * destinationsPerPage;
  const indexOfFirstDestination = indexOfLastDestination - destinationsPerPage;
  const currentDestinations = filteredDestinations.slice(indexOfFirstDestination, indexOfLastDestination);
  const totalPages = Math.ceil(filteredDestinations.length / destinationsPerPage);

  return (
    <div className="destinations-page">
      <div className="destinations-header">
        <div className="container">
          <h1>Explore Destinations</h1>
          <p>Discover amazing places around the world</p>
          <SearchBar className="destinations-search" />
        </div>
      </div>
      
      <div className="container">
        <FilterSort 
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
          activeFilters={activeFilters}
          activeSort={activeSort}
        />
        
        <div className="destinations-results">
          {searchQuery && (
            <div className="search-results-info">
              <p>
                {filteredDestinations.length} results found for "{searchQuery}"
                {activeFilters.length > 0 && ` with ${activeFilters.length} filters applied`}
              </p>
            </div>
          )}
          
          {filteredDestinations.length === 0 ? (
            <div className="no-results">
              <h3>No destinations found</h3>
              <p>Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          ) : (
            <>
              <div className="destinations-grid">
                {currentDestinations.map(destination => (
                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                    onWishlistToggle={handleWishlistToggle}
                    isInWishlist={wishlist.some(item => item.id === destination.id)}
                  />
                ))}
              </div>
              
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;