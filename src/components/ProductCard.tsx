import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, rating, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col">
      <div className="relative overflow-hidden pt-[100%]">
        <img 
          src={image} 
          alt={name} 
          className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm font-bold text-gray-800 shadow-sm">
          ${price.toFixed(2)}
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{name}</h3>
        <div className="flex items-center mb-4 mt-auto">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
          ))}
          <span className="text-xs text-gray-500 ml-2">({rating})</span>
        </div>
        <button className="w-full flex items-center justify-center space-x-2 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white py-2 rounded-lg font-medium transition-colors">
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
