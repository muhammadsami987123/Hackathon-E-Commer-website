"use client";
import React, { useState } from 'react';
import { CiHeart, CiShare2, CiSliderHorizontal } from "react-icons/ci";
import FeatureSection from '../FeatureSection';
import Link from 'next/link';

function ProductSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const products = [
    { name: 'Sytherine', description: 'Stylish cafe chair', price: 'Rp 2.500.000', image: '/product1.jpg' },
    { name: 'Chair', description: 'Will Executive chair', price: 'Rp 1.500.000', image: '/product2.jpg' },
    { name: 'Lotto', description: 'Luxury big safa', price: 'Rp 7.000.000', image: '/product3.jpg' },
    { name: 'Respirs', description: 'Outdoor bar table and stool', price: 'Rp 5.000.000', image: '/product4.jpg' },
    { name: 'Grifo', description: 'Night lamp', price: 'Rp 1.500.000', image: '/product5.jpg' },
    { name: 'Muggo', description: 'Small mug', price: 'Rp 1.500.000', image: '/product6.jpg' },
    { name: 'Pingky', description: 'Cute bed set', price: 'Rp 7.000.000', image: '/product7.jpg' },
    { name: 'Potty', description: 'Minimalist flower pot', price: 'Rp 5.000.000', image: '/product8.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('/shop.jpg')" }}>
        <div className="absolute inset-0 bg-opacity-50"></div>
      </header>

      {/* Controls Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Filter Button */}
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">
            Filter
          </button>

          {/* Results Summary */}
          <p className="text-gray-600">Showing 1–10 of 42 results</p>

          {/* Actions: Show & Sort */}
          <div className="flex items-center space-x-4">
            {/* Show Dropdown */}
            <div className="flex items-center space-x-2">
              <label htmlFor="show" className="text-gray-600">Show:</label>
              <select id="show" className="border border-gray-300 rounded-md p-2">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2">
              <label htmlFor="sort" className="text-gray-600">Sort by:</label>
              <select id="sort" className="border border-gray-300 rounded-md p-2">
                <option value="default">Default</option>
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="p-2 px-10 rounded-lg">
        <h2 className="mx-auto py-1 text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-gray-50 p-4 rounded-lg hover:shadow-xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link href={`/product/${product.name.toLowerCase()}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover mb-4 rounded-lg"
                />
              </Link>
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
      </div>

      {/* Feature Section */}
      <FeatureSection />

    </div>
  );
}

export default ProductSection;
