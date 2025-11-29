import { useState } from 'react';
import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import CardSection from '../../components/cards/CardSection.jsx';
import ProductGrid from '../../components/cards/ProductGrid.jsx';

function Home() {
  const [choice, setChoice] = useState('');
  return (
    <div className="App">
      <Header />
      <CardSection onChoiceChange={setChoice} />
      <ProductGrid currentPage={1} productsPerPage={15} choice={choice} />
      <Footer />
    </div>
  );
}

export default Home;
