import { Bell } from 'lucide-react';
import { useState } from 'react';
import { format } from 'date-fns';

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Pickup Scheduled',
    message: 'Your waste pickup has been scheduled for tomorrow at 10:00 AM',
    timestamp: new Date(),
    read: false,
  },
  {
    id: '2',
    title: 'Points Earned',
    message: 'You earned 50 points for your last recycling session!',
    timestamp: new Date(Date.now() - 86400000),
    read: true,
  },
];

export function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-gray-900"
      >
        <Bell className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="p-4">
            <h3 className="text-lg font-medium">Notifications</h3>
            <div className="mt-4 space-y-4">
              {notifications.map(notification => (
                <div
                  key={notification.id}
                  className={`p-3 rounded-lg ${
                    notification.read ? 'bg-gray-50' : 'bg-green-50'
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-medium">{notification.title}</h4>
                    <span className="text-xs text-gray-500">
                      {format(notification.timestamp, 'PP')}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{notification.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}