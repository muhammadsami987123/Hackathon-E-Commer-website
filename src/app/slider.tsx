import React from "react";

const Slider = () => {
  return (
    <div className="bg-[#fff3e3] mx-auto py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Section - Text */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-gray-800">
              50+ Beautiful rooms<br/> inspiration
            </h2>
            <p className="mt-4 text-gray-600">
            Our designer already made a lot of beautiful<br/> prototipe of rooms that inspire you
            </p>
            <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-medium rounded-lg shadow-md hover:bg-yellow-600 transition">
              Explore More
            </button>
          </div>

          {/* Right Section - Carousel */}
          <div className="relative">
            {/* Slide Images */}
            <div className="flex space-x-4 overflow-hidden">
              {/* Slide 1 */}
              <div className="relative w-full">
                <img
                  src="/slider1.jpg"
                  alt="Room Inspiration"
                  className="rounded-lg shadow-lg"
                />
                {/* <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">01 — Bed Room</p>
                  <h3 className="text-lg font-bold">Inner Peace</h3>
                </div> */}
              </div>

              {/* Slide 2 */}
              <div className="relative w-full">
                <img
                  src="/slider2.jpg"
                  alt="Room Inspiration"
                  className="rounded-lg shadow-lg"
                />
                {/* <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">02 — Dining Room</p>
                  <h3 className="text-lg font-bold">Minimal Design</h3>
                </div> */}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-100 text-gray-800 p-2 rounded-full shadow hover:bg-gray-200 transition">
              ❮
            </button>
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-100 text-gray-800 p-2 rounded-full shadow hover:bg-gray-200 transition">
              ❯
            </button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
