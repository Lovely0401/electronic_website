
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from './Home';
import Shop from './Shop';
import CartPage from './CartPage';
import ProductDetail from './ProductDetail';
import About from './About';
import Contact from './Contact';
import Categories from './Categories';


const App = () => {
  return (
    <BrowserRouter basename="/electronic_website">
      <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />}/>
            <Route path="/shop/:id" element={<ProductDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;