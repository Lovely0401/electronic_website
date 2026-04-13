import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-500">We'd love to hear from you. Drop us a message and we'll get back as soon as possible.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Phone</h3>
                <p className="text-gray-500">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Email</h3>
                <p className="text-gray-500">support@electrostore.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Office</h3>
                <p className="text-gray-500">123 Tech Lane, Silicon Valley</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
