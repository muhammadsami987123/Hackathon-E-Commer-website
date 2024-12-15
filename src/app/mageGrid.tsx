import React from 'react';
import Image from 'next/image';

export default function ImageGrid() {
  return (
    <div className="bg-white py- 9">
      {/* Header */}
      <h2 className="text-xl font-semibold text-center">Share your setup with</h2>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center">#FuniroFurniture</h2>

      {/* Image Section */}
      <div className="flex justify-center py-6 px-4">
        <div className="relative w-full max-w-[1200px] h-[200px] md:h-[400px] lg:h-[600px]">
          <Image
            src="/grid.jpg"
            alt="Furniture Setup"
            className="object-cover rounded-lg shadow-lg"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}