
interface FilterSidebarProps {
  categories: string[];
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
  maxPrice: number;
  setMaxPrice: (price: number) => void;
}

const FilterSidebar = ({
  categories,
  activeCategory,
  setActiveCategory,
  maxPrice,
  setMaxPrice
}: FilterSidebarProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-3">
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input 
              type="radio" 
              name="category"
              className="w-4 h-4 text-blue-600 focus:ring-blue-500 cursor-pointer"
              checked={activeCategory === null}
              onChange={() => setActiveCategory(null)}
            />
            <span className={`text-sm ${activeCategory === null ? 'font-semibold text-blue-600' : 'text-gray-600 group-hover:text-blue-600'}`}>All Products</span>
          </label>
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-3 cursor-pointer group">
              <input 
                type="radio" 
                name="category"
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 cursor-pointer"
                checked={activeCategory === category}
                onChange={() => setActiveCategory(category)}
              />
              <span className={`text-sm ${activeCategory === category ? 'font-semibold text-blue-600' : 'text-gray-600 group-hover:text-blue-600'}`}>{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Max Price: ₹{maxPrice}</h3>
        <input 
          type="range" 
          min="0" 
          max="3000" 
          step="50"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>₹0</span>
          <span>₹3000+</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
