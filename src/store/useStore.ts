import { create } from 'zustand';
import { User, WastePickup, Collector } from '@/types';

interface State {
  user: User | null;
  activePickups: WastePickup[];
  collectors: Collector[];
  setUser: (user: User | null) => void;
  addPickup: (pickup: WastePickup) => void;
  updateCollectorLocation: (collectorId: string, location: { lat: number; lng: number }) => void;
}

export const useStore = create<State>((set) => ({
  user: null,
  activePickups: [],
  collectors: [],
  setUser: (user) => set({ user }),
  addPickup: (pickup) =>
    set((state) => ({ activePickups: [...state.activePickups, pickup] })),
  updateCollectorLocation: (collectorId, location) =>
    set((state) => ({
      collectors: state.collectors.map((collector) =>
        collector.id === collectorId ? { ...collector, location } : collector
      ),
    })),
}));