
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Electro<span className="text-blue-500">Store</span></h3>
          <p className="text-sm text-gray-400 mb-6">Your one-stop destination for the latest electronic gadgets and appliances. Premium quality at unbeatable prices.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Shop</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Categories</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Track Order</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Shipping Info</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Warranty</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 text-blue-500 mr-2 shrink-0" />
              <span>123 Tech Avenue, Silicon Valley, CA 94025</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-blue-500 mr-2 shrink-0" />
              <span>+1 (800) 123-4567</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 text-blue-500 mr-2 shrink-0" />
              <span>support@electrostore.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} ElectroStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
