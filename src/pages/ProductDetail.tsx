
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Star, ShoppingCart, ArrowLeft, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === Number(id));
  const [mainImage, setMainImage] = useState(product?.image || '');
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-blue-600 hover:underline flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link to="/shop" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-100">
              <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
            </div>
            {product.thumbnails && product.thumbnails.length > 0 && (
              <div className="flex gap-4">
                {product.thumbnails.map((thumb, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setMainImage(thumb)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${mainImage === thumb ? 'border-blue-600' : 'border-transparent'} hover:border-blue-400 transition-colors bg-gray-100`}
                  >
                    <img src={thumb} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <div className="mb-2 text-sm font-semibold text-blue-600 uppercase tracking-wider">{product.category}</div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">{product.name}</h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-500">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="text-3xl font-bold text-gray-900 mb-6">₹{product.price.toFixed(2)}</div>
            
            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

            {/* Specifications */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Specifications</h3>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                {product.specs && Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                    <span className="text-gray-500 font-medium">{key}</span>
                    <span className="text-gray-900 font-semibold">{value as string}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button 
                onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                className="flex-1 flex items-center justify-center space-x-2 bg-blue-50 text-blue-700 py-4 rounded-xl font-bold text-lg hover:bg-blue-100 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors">
                Buy Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
              <div className="flex flex-col items-center text-center">
                <Truck className="w-6 h-6 text-gray-400 mb-2" />
                <span className="text-xs text-gray-500 font-medium">Free Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="w-6 h-6 text-gray-400 mb-2" />
                <span className="text-xs text-gray-500 font-medium">1 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RefreshCcw className="w-6 h-6 text-gray-400 mb-2" />
                <span className="text-xs text-gray-500 font-medium">30-Day Return</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;