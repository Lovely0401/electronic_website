
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<div className="p-16 text-center text-2xl font-semibold text-gray-500">Shop Page (Coming Soon)</div>} />
            <Route path="/categories" element={<div className="p-16 text-center text-2xl font-semibold text-gray-500">Categories Page (Coming Soon)</div>} />
            <Route path="/about" element={<div className="p-16 text-center text-2xl font-semibold text-gray-500">About Page (Coming Soon)</div>} />
            <Route path="/contact" element={<div className="p-16 text-center text-2xl font-semibold text-gray-500">Contact Page (Coming Soon)</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;