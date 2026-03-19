
import { Smartphone, Laptop, Headphones, Watch, Speaker } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Mobiles', icon: Smartphone, color: 'bg-blue-100 text-blue-600', link: '/categories/mobiles' },
  { name: 'Laptops', icon: Laptop, color: 'bg-purple-100 text-purple-600', link: '/categories/laptops' },
  { name: 'Headphones', icon: Headphones, color: 'bg-pink-100 text-pink-600', link: '/categories/headphones' },
  { name: 'Smart Watches', icon: Watch, color: 'bg-green-100 text-green-600', link: '/categories/watches' },
  { name: 'Accessories', icon: Speaker, color: 'bg-orange-100 text-orange-600', link: '/categories/accessories' },
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Featured Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link 
                key={category.name} 
                to={category.link}
                className="flex flex-col items-center justify-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1 group"
              >
                <div className={`p-4 rounded-full ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-medium text-gray-800">{category.name}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
