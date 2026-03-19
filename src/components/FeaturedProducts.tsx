
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PREVIEW_PRODUCTS = [
  {
    id: 1,
    name: "iPhone 15 Pro Max - 256GB Titanium",
    price: 1199.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Sony WH-1000XM5 Wireless Headphones",
    price: 348.00,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "MacBook Pro 14-inch M3 Pro",
    price: 1999.00,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Samsung Galaxy Watch 6 Classic",
    price: 399.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-gray-600">Explore our handpicked tech gadgets for you.</p>
          </div>
          <Link to="/shop" className="hidden sm:flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
            View All <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PREVIEW_PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <Link to="/shop" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
            View All Products <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
