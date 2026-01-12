import './App.css';
import Card from './products/Card';
import Header from './products/Header';
import Product from './products/Product';
import ProductItems from './products/ProductItems';
import Slider from './products/Silder';

function App() {
  return (
    <div className="App">
        <Header />
        <Slider />
        <Product />
        <ProductItems />
        <Card />
    </div>
  );
}

export default App;