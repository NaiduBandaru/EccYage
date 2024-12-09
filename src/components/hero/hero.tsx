import { Recycle, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Smart Waste Management for a Cleaner Future
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Connect with local waste collectors, track pickups in real-time, and contribute to a sustainable environment. Join our community of eco-conscious citizens making a difference.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg">
                Schedule Pickup
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Track Collector
                <MapPin className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            alt="Waste collection vehicle"
          />
        </div>
      </div>
    </div>
  );
}