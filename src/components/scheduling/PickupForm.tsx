import { useForm } from 'react-hook-form';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WasteType } from '@/types';

interface PickupFormData {
  scheduledTime: string;
  wasteTypes: WasteType[];
  notes: string;
}

export function PickupForm() {
  const { register, handleSubmit } = useForm<PickupFormData>();

  const onSubmit = (data: PickupFormData) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow">
      <div>
        <label className="block text-sm font-medium text-gray-700">Pickup Date & Time</label>
        <div className="mt-1 relative">
          <input
            type="datetime-local"
            {...register('scheduledTime')}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
          <Calendar className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Waste Types</label>
        <div className="mt-2 space-y-2">
          {['organic', 'recyclable', 'hazardous', 'electronic'].map((type) => (
            <div key={type} className="flex items-center">
              <input
                type="checkbox"
                {...register('wasteTypes')}
                value={type}
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <label className="ml-2 text-sm text-gray-600 capitalize">{type}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
        <textarea
          {...register('notes')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          rows={3}
        />
      </div>

      <Button type="submit" className="w-full">
        Schedule Pickup
      </Button>
    </form>
  );
}