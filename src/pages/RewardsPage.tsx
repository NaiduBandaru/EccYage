import { Gift, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function RewardsPage() {
  const rewards = [
    {
      id: 1,
      title: "Eco-friendly Water Bottle",
      points: 500,
      description: "Reusable stainless steel water bottle",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      title: "Organic Market Voucher",
      points: 1000,
      description: "$20 voucher for local organic market",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Rewards Program</h1>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Your Points</h2>
            <p className="text-4xl font-bold text-green-600 mt-2">2,450</p>
          </div>
          <TrendingUp className="h-12 w-12 text-green-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map(reward => (
          <div key={reward.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src={reward.image}
              alt={reward.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold">{reward.title}</h3>
              <p className="text-gray-600 mt-2">{reward.description}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-green-600 mr-2" />
                  <span className="font-semibold">{reward.points} points</span>
                </div>
                <Button variant="outline" size="sm">
                  Redeem
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}