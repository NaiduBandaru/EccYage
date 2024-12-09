import { Leaf, BarChart3, Users, Sparkles } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Waste Recognition',
    description: 'Use your camera to instantly identify and categorize different types of waste for proper disposal.',
    icon: Sparkles,
  },
  {
    name: 'Real-Time Analytics',
    description: 'Track your recycling impact and get personalized insights on your waste management habits.',
    icon: BarChart3,
  },
  {
    name: 'Community Engagement',
    description: 'Connect with eco-conscious neighbors and participate in local environmental initiatives.',
    icon: Users,
  },
  {
    name: 'Eco-Rewards Program',
    description: 'Earn points for responsible waste disposal and redeem them for sustainable products.',
    icon: Leaf,
  },
];

export function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Smart Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for efficient waste management
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform combines cutting-edge technology with community-driven solutions to make waste management easier and more effective.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}