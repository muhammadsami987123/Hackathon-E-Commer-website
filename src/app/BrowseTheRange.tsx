import React from 'react';
import Image from 'next/image';
function BrowseTheRange() {
  const categories = [
    {
      title: 'Dining',
      image: '/browse1.jpg',
    },
    {
      title: 'Living',
      image: '/browse2.jpg',
    },
    {
      title: 'Bedroom',
      image: '/browse3.jpg',
    },
  ];

  return (
    <section className="container mx-auto flex flex-col justify-center items-center bg-white py-12">
      <h2 className="text-2xl font-extrabold text-center mb-8">Browse The Range</h2>
      <p className="text-center font-semibold mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
        {categories.map((category) => (
          <div key={category.title} className="relative group">
            <Image src={category.image} alt={category.title} className="w-full h-[400px] object-cover rounded-lg mb-4 mx-auto group-hover:scale-105 transition-transform duration-300" />
            <div className="text-center text-2xl p-4 text-semibold bg-white text-black rounded-lg">
              <p className="font-semibold">{category.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrowseTheRange;