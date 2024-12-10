import React from 'react';
import Image from 'next/image';
function FeatureSection() {
  const features = [
    {
      icon: 'Group1.svg',
      title: 'High Quality',
      description: 'Crafted from top-notch materials',
    },
    {
      icon: 'guarantee.svg',
      title: 'Warranty Protection',
      description: 'Over 2 years',
    },
    {
      icon: 'shipping.svg',
      title: 'Free Shipping',
      description: 'Order over 150$',
    },
    {
      icon: 'customer-support.svg',
      title: '24/7 Support',
      description: 'Dedicated support',
    },
  ];

  return (
    <section className="bg-[#faf3e3] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <Image src={feature.icon} alt={feature.title} className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;