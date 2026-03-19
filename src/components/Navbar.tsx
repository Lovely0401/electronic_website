import { ShoppingCart, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900 tracking-tight">
          Electro<span className="text-blue-600">Store</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/shop" className="hover:text-blue-600 transition-colors">Shop</Link>
          <Link to="/categories" className="hover:text-blue-600 transition-colors">Categories</Link>
          <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-gray-700">
          <button className="hover:text-blue-600 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-blue-600 transition-colors relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </button>
          <div className="hidden md:flex items-center space-x-2 border-l pl-6">
            <button className="hover:text-blue-600 font-medium">Log In</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">Sign Up</button>
          </div>
          {/* Mobile Menu Toggle */}
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
