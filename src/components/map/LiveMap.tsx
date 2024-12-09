import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useStore } from '@/store/useStore';
import 'leaflet/dist/leaflet.css';

export function LiveMap() {
  const { collectors, activePickups } = useStore();

  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {collectors.map((collector) => (
          <Marker
            key={collector.id}
            position={[collector.location.lat, collector.location.lng]}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold">{collector.name}</h3>
                <p className="text-sm text-gray-600">Vehicle ID: {collector.vehicleId}</p>
                <p className="text-sm text-gray-600">Status: {collector.status}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}