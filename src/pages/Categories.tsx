import { Smartphone, Laptop, Headphones, Watch, Mouse } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Mobiles', icon: Smartphone, color: 'bg-orange-100 text-orange-600', items: '24 Items' },
  { name: 'Laptops', icon: Laptop, color: 'bg-blue-100 text-blue-600', items: '12 Items' },
  { name: 'Headphones', icon: Headphones, color: 'bg-purple-100 text-purple-600', items: '36 Items' },
  { name: 'Smart Watches', icon: Watch, color: 'bg-green-100 text-green-600', items: '18 Items' },
  { name: 'Accessories', icon: Mouse, color: 'bg-red-100 text-red-600', items: '40 Items' },
];

const Categories = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">All Categories</h1>
          <p className="text-lg text-gray-500">Browse our vast selection of premium electronics by category.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              to="/shop" 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className={`p-5 rounded-full ${category.color} mb-6 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-gray-500 font-medium">{category.items}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
