import React from 'react';
import { Products } from '../Products';

const NewArrival = () => {
  const filteredProducts = Products.filter((product) => product.category === 'clothes');

  return (
    <div className="p-5">  
      <h1 className="text-2xl font-bold mb-4">New Arrival Clothes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="relative border p-4 rounded-lg shadow-md overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-80 object-cover mb-2 transition-transform duration-300 transform hover:scale-105" // زيادة الارتفاع هنا
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price} $</p>
            </div>
          ))
        ) : (
          <p>No clothes available in the New Arrivals.</p>
        )}
      </div>
    </div>
  );
};

export default NewArrival;
