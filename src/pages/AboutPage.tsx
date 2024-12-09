import { Truck, Leaf, Users, BarChart3 } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About EcoWaste</h1>
        
        <div className="prose prose-green">
          <p className="text-lg text-gray-600 mb-8">
            EcoWaste is revolutionizing waste management through technology and community engagement. 
            Our platform connects residents with local waste collectors while promoting sustainable practices 
            and environmental consciousness.
          </p>

          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-8">
            To create a cleaner, more sustainable future by making waste management efficient, 
            accessible, and rewarding for everyone. We believe in the power of technology to 
            drive positive environmental change.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <Truck className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Collection</h3>
              <p className="text-gray-600">
                Real-time tracking and efficient routing for waste collection vehicles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Leaf className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Promoting recycling and responsible waste management practices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Users className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Building a network of environmentally conscious citizens.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <BarChart3 className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Impact Tracking</h3>
              <p className="text-gray-600">
                Measuring and visualizing our collective environmental impact.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">50K+</p>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">100+</p>
              <p className="text-gray-600">Cities</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">500K</p>
              <p className="text-gray-600">Pickups Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">1000+</p>
              <p className="text-gray-600">Waste Collectors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}