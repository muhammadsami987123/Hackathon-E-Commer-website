'use client';
import React, { useState } from 'react';
import { CiHeart, CiShare2, CiSliderHorizontal } from "react-icons/ci";

function ProductSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Explicitly typing state
  const [products, setProducts] = useState([
    { name: 'Sytherine', description: 'Stylish cafe chair', price: 'Rp 2.500.000', image: '/product1.jpg' },
    { name: 'Chair', description: 'Will Executive chair', price: 'Rp 1.500.000', image: '/product2.jpg' },
    { name: 'Lotto', description: 'Luxury big safa', price: 'Rp 7.000.000', image: '/product3.jpg' },
    { name: 'Respirs', description: 'Outdoor bar table and stool', price: 'Rp 5.000.000', image: '/product4.jpg' },
    { name: 'Grifo', description: 'Night lamp', price: 'Rp 1.500.000', image: '/product5.jpg' },
    { name: 'Muggo', description: 'Small mug', price: 'Rp 1.500.000', image: '/product6.jpg' },
    { name: 'Pingky', description: 'Cute bed set', price: 'Rp 7.000.000', image: '/product7.jpg' },
    { name: 'Potty', description: 'Minimalist flower pot', price: 'Rp 5.000.000', image: '/product8.jpg' },
  ]);

  const handleMouseEnter = (index: number) => { // Fix applied here
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleShowMore = () => {
    // Add logic to show more products
  };

  return (
    <div className="p-2 px-10 rounded-lg">
      <h2 className="mx-auto py-1 text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-gray-50 p-4 rounded-lg hover:shadow-xl"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mb-4">Rp {product.price}</p>

            {hoveredIndex === index && (
              <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 bg-gray-900 bg-opacity-40 rounded-lg">
                <button className="bg-white text-yellow-500 font-bold py-2 px-4 mx-auto">
                  Add to Cart
                </button>
                <div className="flex justify-center items-center gap-6 mx-auto">
                  <button className="text-white flex items-center gap-2">
                    <CiShare2 className="w-6 h-6" />
                    Share
                  </button>
                  <button className="text-white flex items-center gap-2">
                    <CiSliderHorizontal className="w-6 h-6" />
                    Compare
                  </button>
                  <button className="text-white flex items-center gap-2">
                    <CiHeart className="w-6 h-6" />
                    Like
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10 mx-auto">
        <button
          className="text-white px-4 py-2 rounded-md text-lg font-bold bg-yellow-600 hover:bg-yellow-800 mx-auto"
          onClick={handleShowMore}
        >
          Show More
        </button>
      </div>
    </div>
  );
}

export default ProductSection;
