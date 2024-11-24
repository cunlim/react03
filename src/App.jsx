import './App.css'

import ProductCard from './ProductCard'

const App = () => {
  const product = {
    name: "Laptop",
    price: 123.4567
  };

  return (
    <ProductCard
      {...product}
      formatPrice={(p) => `$${p.toFixed(2)}`}
    />
  );
}

export default App