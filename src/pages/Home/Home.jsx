import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import CardSection from '../../components/cards/CardSection.jsx';
import ProductGrid from '../../components/cards/ProductGrid.jsx';

function Home() {
  return (
    <div className="App">
      <Header />
      <CardSection />
      <ProductGrid currentPage={1} productsPerPage={10} />
      <Footer />
    </div>
  );
}

export default Home;
