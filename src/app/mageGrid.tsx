import React from 'react';

export default function ImageGrid(){ 
  return (
    <div className="bg-white py-9 ">
      <h2 className="text-xl  font-semibold text-center ">Share your setup with</h2> 
      <h2 className="text-5xl font-extrabold text-center ">#FuniroFurniture</h2>
      <div className="md:grid-cols-2 lg:grid-cols-3 py-4 gap-4">
        <img src={"/grid.jpg"}  className="w-full h-[721px] object-cover" />
      </div>
    </div>
  );
}