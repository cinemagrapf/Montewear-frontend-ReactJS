import ProductCategories from './product-page/ProductCategories.jsx';
import SearchBar from '../ui/SearchBar.jsx';
import ProductSorting from './product-page/ProductSorting.jsx';
import './ProductCatalog.scss';

const ProductCatalog = ({ onCategoryChange, onFilterChange }) => {
  return (
    <div className="product-catalog-container">
      <div className="top-bar">
        <ProductCategories onCategoryChange={onCategoryChange} />
        <SearchBar />
      </div>

      <div className="sorting-wrapper">
        <ProductSorting onFilterChange={onFilterChange} />
      </div>
    </div>
  );
};

export default ProductCatalog;
