import { format } from 'date-fns';
import { useStore } from '@/store/useStore';

export function PickupHistory() {
  const { activePickups } = useStore();

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-900">Pickup History</h2>
      </div>
      <ul className="divide-y divide-gray-200">
        {activePickups.map((pickup) => (
          <li key={pickup.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {format(new Date(pickup.scheduledTime), 'PPP')}
                </p>
                <p className="text-sm text-gray-500">
                  Waste Types: {pickup.wasteType.join(', ')}
                </p>
              </div>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  pickup.status === 'completed'
                    ? 'bg-green-100 text-green-800'
                    : pickup.status === 'in-progress'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}
              >
                {pickup.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}