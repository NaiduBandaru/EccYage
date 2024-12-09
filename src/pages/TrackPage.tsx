import { LiveMap } from '@/components/map/LiveMap';

export function TrackPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Track Waste Collection</h1>
      <LiveMap />
    </div>
  );
}