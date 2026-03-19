
import { Truck, ShieldCheck, Clock, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: "Free & Fast Delivery",
    description: "Enjoy free shipping on all orders above $100. Delivery within 2-3 business days.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "Your transactions are 100% secure with enterprise-grade encryption.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Clock,
    title: "1-Year Warranty",
    description: "Shop with peace of mind. All our products come with a 1-year authentic warranty.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Premium Support",
    description: "Our tech experts are always available to help you with your queries online.",
    color: "bg-orange-100 text-orange-600"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose ElectroStore</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-50 hover:shadow-lg transition-shadow">
                <div className={`p-4 rounded-full ${feature.color} mb-5`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
