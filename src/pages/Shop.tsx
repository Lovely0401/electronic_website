
import { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { PRODUCTS } from '../data/products';
import { Filter } from 'lucide-react';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<number>(3000);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const categories = Array.from(new Set(PRODUCTS.map(p => p.category)));

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory);
    }
    
    result = result.filter(p => p.price <= maxPrice);

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 'featured' - keep original order
        break;
    }

    return result;
  }, [activeCategory, maxPrice, sortBy]);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shop All Products</h1>
            <p className="text-gray-500 mt-2">Showing {filteredAndSortedProducts.length} results</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button 
              className="md:hidden flex items-center justify-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm flex-1 text-gray-700"
              onClick={() => setShowMobileFilter(!showMobileFilter)}
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
            
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 md:w-48 appearance-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className={`md:w-64 shrink-0 ${showMobileFilter ? 'block' : 'hidden md:block'}`}>
            <FilterSidebar 
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAndSortedProducts.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
                <button 
                  onClick={() => { setActiveCategory(null); setMaxPrice(3000); }}
                  className="mt-6 text-blue-600 font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;