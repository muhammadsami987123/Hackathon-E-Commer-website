import React from 'react';
import Image from 'next/image';
function HeroSection() {
  return (
    <section className="relative bg-white">
   <div className='bg-gray-200' ><div className="container mx-auto p-4 flex justify-center items-center">
        <div className="relative w-[1200px] h-[600px] bg-gray-200 rounded-lg overflow-hidden">
          {/* Background Image */}
          <Image src="/hero.jpg" alt="New Collection" className="w-full h-full object-cover" />
          </div>      
    {/* Text Overlay */}
          <div className="absolute top-28 left-[800px] w-[643px] h-[400px] bg-[#fdf5e6] flex flex-col justify-start items-start text-black text-left p-8 space-y-4 ">
            <h1 className="text-sm uppercase font-semibold text-gray-500 mb-2">New Arrival</h1>
            <h2 className="text-5xl font-extrabold text-[#7a6229] mb-6">Discover Our<br /> New Collection</h2>
            <p className="text-md text-gray-600 mb-6">
              Explore the latest trends and collections that bring style and comfort to your home. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="bg-[#7a6229] text-white font-bold py-3 px-6 rounded hover:bg-[#5c491f] transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
