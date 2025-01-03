'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for app router
import { CiHeart, CiShare2, CiSliderHorizontal } from "react-icons/ci";

export default function ProductSection() {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleProductsCount, setVisibleProductsCount] = useState(4); // Start with 4 products visible

  const products = [
    { name: 'Sytherine', description: 'Stylish cafe chair', price: '2,500,000', image: '/product1.jpg' },
    { name: 'Chair', description: 'Will Executive chair', price: '1,500,000', image: '/product2.jpg' },
    { name: 'Lotto', description: 'Luxury big sofa', price: '7,000,000', image: '/product3.jpg' },
    { name: 'Respirs', description: 'Outdoor bar table and stool', price: '5,000,000', image: '/product4.jpg' },
    { name: 'Grifo', description: 'Night lamp', price: '1,500,000', image: '/product5.jpg' },
    { name: 'Muggo', description: 'Small mug', price: '1,500,000', image: '/product6.jpg' },
    { name: 'Pingky', description: 'Cute bed set', price: '7,000,000', image: '/product7.jpg' },
    { name: 'Potty', description: 'Minimalist flower pot', price: '5,000,000', image: '/product8.jpg' },
  ];

  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const handleShowMore = () => {
    setVisibleProductsCount((prevCount) => Math.min(prevCount + 4, products.length)); // Ensure it doesn't exceed total products
  };

  const handleAddToCart = () => {
    try {
      router.push('/addtocard');
    } catch (error) {
      console.error("Failed to redirect to cart:", error);
    }
  };

  return (
    <section className="p-4 px-10 rounded-lg">
      <h2 className="py-4 text-3xl font-bold text-center mb-8">Our Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
        {products.slice(0, visibleProductsCount).map((product, index) => (
          <div
            key={index}
            className="relative bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-lg mb-4"
              width={400}
              height={240}
              priority
            />
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold mb-4">Rp {product.price}</p>

            {/* Hover Overlay */}
            {hoveredIndex === index && (
              <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 bg-gray-900 bg-opacity-50 rounded-lg">
                <button
                  className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-md hover:bg-yellow-600"
                  aria-label="Add to Cart"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <div className="flex justify-center items-center gap-4">
                  <button className="text-white flex items-center gap-2" aria-label="Share product">
                    <CiShare2 className="w-6 h-6" /> Share
                  </button>
                  <button className="text-white flex items-center gap-2" aria-label="Compare products">
                    <CiSliderHorizontal className="w-6 h-6" /> Compare
                  </button>
                  <button className="text-white flex items-center gap-2" aria-label="Like product">
                    <CiHeart className="w-6 h-6" /> Like
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleProductsCount < products.length && (
        <div className="flex justify-center mt-10">
          <button
            className="text-white px-6 py-3 rounded-md text-lg font-bold bg-yellow-600 hover:bg-yellow-800 transition-colors"
            onClick={handleShowMore}
            aria-label="Show more products"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
}
