import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, ChevronLeft, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        <button onClick={() => navigate('/shop')} className="mt-4 text-blue-600 hover:underline">
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 mr-1" /> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 flex items-center justify-center">
          <img src={product.image} alt={product.name} className="max-h-[500px] object-contain" />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">
            {product.category}
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
              <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
              <span className="font-bold text-yellow-700">{product.rating}</span>
            </div>
            <span className="text-gray-500 text-sm">120+ Reviews</span>
          </div>

          <div className="text-3xl font-bold text-gray-900 mb-8">${product.price}</div>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            Experience the next level of technology with the {product.name}. Designed for 
            performance and reliability, this product features industry-leading specifications 
            tailored for your professional and personal needs.
          </p>

          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all transform active:scale-95 mb-8 shadow-lg shadow-blue-200"
          >
            Add to Cart
          </button>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <Truck className="w-6 h-6 text-blue-600" />
              <span className="text-sm text-gray-600">Free Delivery</span>
            </div>
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
              <span className="text-sm text-gray-600">1 Year Warranty</span>
            </div>
            <div className="flex items-center space-x-3">
              <RotateCcw className="w-6 h-6 text-blue-600" />
              <span className="text-sm text-gray-600">30-Day Return</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;