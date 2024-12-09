export interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  address: string;
}

export interface WastePickup {
  id: string;
  userId: string;
  status: 'scheduled' | 'in-progress' | 'completed';
  scheduledTime: string;
  wasteType: WasteType[];
  location: {
    lat: number;
    lng: number;
  };
}

export interface Collector {
  id: string;
  name: string;
  vehicleId: string;
  location: {
    lat: number;
    lng: number;
  };
  status: 'available' | 'busy';
}

export type WasteType = 'organic' | 'recyclable' | 'hazardous' | 'electronic';