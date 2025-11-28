import React, { useState } from 'react';
import './ProductSorting.scss';
import { filterOptions } from '../../../data/FilterOptions.js';

const ProductSorting = () => {
  const [filters, setFilters] = useState({
    price: '',
    size: '',
    color: '',
    brand: '',
    material: '',
    style: '',
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  return (
    <div className="sort-module">
      <div className="filters-container">
        <span className="sort-label">SORT by:</span>

        <select
          name="price"
          value={filters.price}
          onChange={(e) => handleFilterChange('price', e.target.value)}
          className={`filter-dropdown ${!filters.price ? 'placeholder' : ''}`}>
          <option value="" className="placeholder-option">
            Price
          </option>

          {filterOptions.price.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          name="size"
          value={filters.size}
          onChange={(e) => handleFilterChange('size', e.target.value)}
          className={`filter-dropdown ${!filters.size ? 'placeholder' : ''}`}>
          <option value="" className="placeholder-option">
            Size
          </option>
          {filterOptions.size.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          name="color"
          value={filters.color}
          onChange={(e) => handleFilterChange('color', e.target.value)}
          className={`filter-dropdown ${!filters.color ? 'placeholder' : ''}`}>
          <option value="" className="placeholder-option">
            Color
          </option>
          {filterOptions.color.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          name="brand"
          value={filters.brand}
          onChange={(e) => handleFilterChange('brand', e.target.value)}
          className={`filter-dropdown ${!filters.brand ? 'placeholder' : ''}`}>
          <option value="" className="placeholder-option">
            Brand
          </option>
          {filterOptions.brand.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          name="material"
          value={filters.material}
          onChange={(e) => handleFilterChange('material', e.target.value)}
          className={`filter-dropdown ${!filters.material ? 'placeholder' : ''}`}>
          <option value="" className="placeholder-option">
            Material
          </option>
          {filterOptions.material.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          name="style"
          value={filters.style}
          onChange={(e) => handleFilterChange('style', e.target.value)}
          className={`filter-dropdown ${!filters.style ? 'placeholder' : ''}`}>
          <option value="" className="placeholder-option">
            Style
          </option>
          {filterOptions.style.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <button className="apply-filters-btn">Apply Filters</button>
      </div>
    </div>
  );
};

export default ProductSorting;
