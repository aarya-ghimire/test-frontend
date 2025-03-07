import { useState } from "react";
import "./FilterSort.css";

const FilterSort = ({
  onFilterChange,
  onSortChange,
  activeFilters,
  activeSort,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filters = [
    { id: "beach", label: "Beach" },
    { id: "mountain", label: "Mountain" },
    { id: "city", label: "City" },
    { id: "nature", label: "Nature" },
    { id: "culture", label: "Culture" },
    { id: "adventure", label: "Adventure" },
    { id: "romantic", label: "Romantic" },
    { id: "food", label: "Food" },
    { id: "luxury", label: "Luxury" },
    { id: "budget", label: "Budget-friendly" },
  ];

  const sortOptions = [
    { id: "recommended", label: "Recommended" },
    { id: "price-low", label: "Price: Low to High" },
    { id: "price-high", label: "Price: High to Low" },
    { id: "rating", label: "Highest Rated" },
  ];

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterClick = (filterId) => {
    onFilterChange(filterId);
  };

  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="filter-sort">
      <div className="filter-section">
        <button className="filter-toggle" onClick={toggleFilter}>
          Filters {activeFilters.length > 0 && `(${activeFilters.length})`}
          <span className={`arrow ${isFilterOpen ? "up" : "down"}`}></span>
        </button>

        <div className={`filter-dropdown ${isFilterOpen ? "open" : ""}`}>
          <div className="filter-options">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-option ${
                  activeFilters.includes(filter.id) ? "active" : ""
                }`}
                onClick={() => handleFilterClick(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {activeFilters.length > 0 && (
            <button
              className="clear-filters"
              onClick={() => onFilterChange("clear")}
            >
              Clear All Filters
            </button>
          )}
        </div>
      </div>

      <div className="sort-section">
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          value={activeSort}
          onChange={handleSortChange}
          className="sort-select"
        >
          {sortOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterSort;
