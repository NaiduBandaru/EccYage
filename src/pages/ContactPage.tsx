import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-green-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">support@ecowaste.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-green-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-green-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">
                  123 Green Street<br />
                  Eco City, EC 12345
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              ></textarea>
            </div>
            <Button type="submit" className="w-full">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">How do I schedule a pickup?</h3>
              <p className="text-gray-600 mt-1">
                You can schedule a pickup through our app or website by clicking the "Schedule Pickup" button and following the prompts.
              </p>
            </div>
            <div>
              <h3 className="font-medium">What types of waste do you collect?</h3>
              <p className="text-gray-600 mt-1">
                We collect various types of waste including general waste, recyclables, organic waste, and hazardous materials.
              </p>
            </div>
            <div>
              <h3 className="font-medium">How does the rewards program work?</h3>
              <p className="text-gray-600 mt-1">
                You earn points for each pickup and responsible waste management practices. These points can be redeemed for eco-friendly products and services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}