import './ProductGrid.scss';
import { Col } from 'react-bootstrap';
import ProductCard from './ProductCard.jsx';

const products = [
  {
    id: '001',
    img: 'https://placehold.co/250x250',
    productName: 'Product 1',
    price: 100.0,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Red', 'Blue', 'Green'],
    category: 'Men',
    brand: 'Nike',
    material: 'Cotton',
    style: 'Casual',
  },
  {
    id: '002',
    img: 'https://placehold.co/250x250',
    productName: 'Product 2',
    price: 120.0,
    oldPrice: 180.0,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    category: 'Women',
    brand: 'Nike',
    material: 'Cotton',
    style: 'Casual',
  },
  {
    id: '003',
    img: 'https://placehold.co/250x250',
    productName: 'Product 3',
    price: 90.0,
    sizes: ['M', 'L', 'XL'],
    colors: ['Yellow', 'Pink'],
    category: 'Kid',
    brand: 'Nike',
    material: 'Cotton',
    style: 'Casual',
  },
  {
    id: '004',
    img: 'https://placehold.co/250x250',
    productName: 'Product 4',
    price: 110.0,
    oldPrice: 160.0,
    sizes: ['S', 'M', 'L'],
    colors: ['Gray', 'Brown'],
    category: 'Men',
    brand: 'Stüssy',
    material: 'Polyester',
    style: 'Streetwear',
  },
  {
    id: '005',
    img: 'https://placehold.co/250x250',
    productName: 'Product 5',
    price: 130.0,
    sizes: ['L', 'XL', 'XXL'],
    colors: ['Purple', 'Orange'],
    category: 'Men',
    brand: 'Gap',
    material: 'Wool',
    style: 'Sporty',
  },
  {
    id: '006',
    img: 'https://placehold.co/250x250',
    productName: 'Product 6',
    price: 140.0,
    oldPrice: 210.0,
    sizes: ['S', 'M', 'L'],
    colors: ['Cyan', 'Magenta'],
    category: 'Men',
  },
  {
    id: '007',
    img: 'https://placehold.co/250x250',
    productName: 'Product 7',
    price: 95.0,
    oldPrice: 145.0,
    sizes: ['M', 'L', 'XL'],
    colors: ['Teal', 'Navy'],
    category: 'Women',
  },
  {
    id: '008',
    img: 'https://placehold.co/250x250',
    productName: 'Product 8',
    price: 115.0,
    oldPrice: 175.0,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Olive', 'Maroon'],
    category: 'Women',
  },
  {
    id: '009',
    img: 'https://placehold.co/250x250',
    productName: 'Product 9',
    price: 105.0,
    sizes: ['S', 'M', 'L'],
    colors: ['Lime', 'Coral'],
    category: 'Kid',
  },
  {
    id: '010',
    img: 'https://placehold.co/250x250',
    productName: 'Product 10',
    price: 125.0,
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Silver', 'Gold'],
    category: 'Men',
  },
];

const ProductGrid = ({ currentPage, productsPerPage, category }) => {
  // Filtering by category
  const filteredProducts = products.filter((p) =>
    category ? p.category?.toLowerCase() === category.toLowerCase() : true,
  );
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;

  const visibleProducts = filteredProducts.slice(start, end);

  return (
    <div className="product-grid-container mx-auto my-3">
      <div className="row g-3">
        {visibleProducts.map((product) => (
          <Col key={product.id} className="d-flex justify-content-center">
            <ProductCard
              id={product.id}
              img={product.img}
              productName={product.productName}
              price={product.price}
              oldPrice={product.oldPrice}
              // color={product.colors}
              sizes={product.sizes}
              // Filtering props
              category={product.category}
              brand={product.brand}
              material={product.material}
              style={product.style}
            />
          </Col>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
