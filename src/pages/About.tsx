

const About = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">About ElectroStore</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We are your one-stop technical hub. Born from a passion for premium electronics, we strive to deliver the absolute best in modern gadgets, straight to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <img 
            src="https://images.unsplash.com/photo-1550009158-9ebf6d1736eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Storefront" 
            className="rounded-2xl shadow-lg w-full h-80 object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2020, we realized that finding high-quality electronics with robust customer support was too difficult. We set out to change that by curating only the top-tier devices and standing by every single sale with our iron-clad warranty.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-1">50k+</div>
                <div className="text-sm text-gray-500 font-medium">Happy Customers</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                <div className="text-sm text-gray-500 font-medium">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
