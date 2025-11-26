import { useState } from 'react';
import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import ProductGrid from '../../components/cards/ProductGrid.jsx';
import ProductCatalog from '../../components/navigation/ProductCatalog.jsx';
import ProductPagination from '../../components/navigation/ProductPagination.jsx';
import './Products.scss';

function Products() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('men');

  // Example: how many products per page(get product count from backend later)
  const productsPerPage = 20;

  return (
    <div className="App">
      <Header />

      <div className="products-page">
        <ProductCatalog onCategoryChange={setCategory} />

        <ProductGrid currentPage={page} productsPerPage={productsPerPage} category={category} />

        <ProductPagination
          currentPage={page}
          totalPages={5} // adjust based on real data length / productsPerPage
          onPageChange={setPage}
        />
      </div>

      <Footer />
    </div>
  );
}

export default Products;
