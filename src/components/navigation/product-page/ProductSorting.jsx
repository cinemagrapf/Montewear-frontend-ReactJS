import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import './ProductSorting.scss';

const ProductSorting = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    sortBy: 'Price',
    size: 'Size',
    color: 'Color',
    brand: 'Brand',
    material: 'Material',
    style: 'Style',
  });

  const containerRef = useRef(null);

  const filterOptions = {
    sortBy: ['Price: Low to High', 'Price: High to Low', 'Newest', 'Most Popular', 'Rating'],
    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    color: ['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Gray'],
    brand: ['Nike', 'Adidas', 'Puma', 'Reebok', 'Under Armour', 'New Balance'],
    material: ['Cotton', 'Polyester', 'Wool', 'Silk', 'Leather', 'Denim'],
    style: ['Casual', 'Formal', 'Sport', 'Vintage', 'Modern', 'Classic'],
  };

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const selectOption = (filterKey, option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterKey]: option,
    }));
    setOpenDropdown(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderDropdown = (key, label) => {
    const isOpen = openDropdown === key;
    const displayValue = selectedFilters[key];
    const isDefault = displayValue === label;

    return (
      <div className="filter-item" key={key}>
        <button
          className={`filter-button ${isOpen ? 'active' : ''} ${!isDefault ? 'selected' : ''}`}
          onMouseDown={(e) => {
            e.preventDefault();
            toggleDropdown(key);
          }}>
          <span className="filter-label">{displayValue}</span>
          <ChevronDown size={16} className={`chevron ${isOpen ? 'rotate' : ''}`} />
        </button>

        {isOpen && (
          <div className="dropdown-menu" onMouseDown={(e) => e.stopPropagation()}>
            {filterOptions[key].map((option, idx) => (
              <div
                key={idx}
                className={`dropdown-item ${selectedFilters[key] === option ? 'active' : ''}`}
                onMouseDown={() => selectOption(key, option)}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="filter-sort-container" ref={containerRef}>
      <div className="filter-bar">
        <div className="sort-section">
          <span className="sort-label">SORT by:</span>
        </div>

        <div className="filters-section">
          {renderDropdown('sortBy', 'Price')}
          {renderDropdown('size', 'Size')}
          {renderDropdown('color', 'Color')}
          {renderDropdown('brand', 'Brand')}
          {renderDropdown('material', 'Material')}
          {renderDropdown('style', 'Style')}
        </div>

        <button className="more-filters-button">More filters</button>
      </div>
    </div>
  );
};

export default ProductSorting;
