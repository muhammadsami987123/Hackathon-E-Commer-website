"use client";

import React, { useState, useEffect } from "react";
import { CiHeart, CiShare2, CiSliderHorizontal } from "react-icons/ci";
import FeatureSection from "../FeatureSection";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import sanityClient from "@/sanity/lib/sanity";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

function ProductSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        _id,
        name,
        description,
        price,
        "image": image.asset->url // Resolve image URL
      }`;

      try {
        const sanityProducts = await sanityClient.fetch(query);
        const formattedProducts = sanityProducts.map((product: any) => ({
          id: product._id,
          name: product.name,
          description: product.description,
          price: product.price,
          image: product.image || "/placeholder.jpg", // Use placeholder for missing images
        }));
        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (productId: string) => {
    try {
      router.push(`/addtocard`);
    } catch (error) {
      console.error("Failed to redirect to cart:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header
        className="relative bg-cover bg-center h-64"
        style={{ backgroundImage: "url('/shop.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">
            Filter
          </button>
          <p className="text-gray-600">Showing {products.length} products</p>
        </div>
      </div>

      <div className="p-2 px-10 rounded-lg">
        <h2 className="mx-auto py-1 text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="relative bg-gray-50 p-4 rounded-lg hover:shadow-xl transition-all"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link href={`/product/${product.name.toLowerCase()}`} passHref>
                <div>
                  <Image
                    src={product.image} // Image source
                    alt={product.name || "Product"}
                    width={500}
                    height={500}
                    className="w-full h-60 object-cover mb-4 rounded-lg transition-all"
                  />
                </div>
              </Link>
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-bold mb-4">Rp {product.price}</p>
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
      </div>

      <FeatureSection />
    </div>
  );
}

export default ProductSection;
