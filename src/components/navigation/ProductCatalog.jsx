import ProductCategories from './product-page/ProductCategories.jsx';
import ProductSearchBar from './product-page/ProductSearchBar.jsx';
import ProductSorting from './product-page/ProductSorting.jsx';

const ProductCatalog = () => {
  return (
    <div style={{ marginTop: '90px', paddingTop: '50px', textAlign: 'center' }}>
      <ProductCategories />
      <ProductSearchBar />
      <ProductSorting />
    </div>
  );
};

export default ProductCatalog;
