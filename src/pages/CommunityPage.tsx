import { Users, Award, Calendar, MessageSquare } from 'lucide-react';

export function CommunityPage() {
  const events = [
    {
      id: 1,
      title: "Community Cleanup Drive",
      date: "2024-03-20",
      location: "Central Park",
      participants: 45
    },
    {
      id: 2,
      title: "Recycling Workshop",
      date: "2024-03-25",
      location: "Community Center",
      participants: 30
    }
  ];

  const forums = [
    {
      id: 1,
      title: "Tips for Composting",
      author: "GreenThumb",
      replies: 24,
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      title: "Reducing Plastic Waste",
      author: "EcoWarrior",
      replies: 18,
      lastActive: "5 hours ago"
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Community Hub</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Calendar className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-xl font-semibold">Upcoming Events</h2>
          </div>
          <div className="space-y-4">
            {events.map(event => (
              <div key={event.id} className="border-b pb-4">
                <h3 className="font-medium">{event.title}</h3>
                <p className="text-sm text-gray-600">Date: {event.date}</p>
                <p className="text-sm text-gray-600">Location: {event.location}</p>
                <div className="flex items-center mt-2">
                  <Users className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-600">{event.participants} participants</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <MessageSquare className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-xl font-semibold">Discussion Forums</h2>
          </div>
          <div className="space-y-4">
            {forums.map(forum => (
              <div key={forum.id} className="border-b pb-4">
                <h3 className="font-medium">{forum.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-gray-600">By {forum.author}</span>
                  <span className="text-sm text-gray-600">{forum.replies} replies</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Last active {forum.lastActive}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}