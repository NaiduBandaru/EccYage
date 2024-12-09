import { io } from 'socket.io-client';
import { useStore } from '@/store/useStore';

const SOCKET_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const socket = io(SOCKET_URL);

export const initializeSocketListeners = () => {
  const updateCollectorLocation = useStore.getState().updateCollectorLocation;

  socket.on('collector:location', ({ collectorId, location }) => {
    updateCollectorLocation(collectorId, location);
  });

  socket.on('pickup:status', ({ pickupId, status }) => {
    // Handle pickup status updates
    console.log(`Pickup ${pickupId} status updated to ${status}`);
  });
};