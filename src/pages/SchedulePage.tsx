import { PickupForm } from '@/components/scheduling/PickupForm';
import { PickupHistory } from '@/components/dashboard/PickupHistory';

export function SchedulePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Schedule a Pickup</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PickupForm />
        <PickupHistory />
      </div>
    </div>
  );
}