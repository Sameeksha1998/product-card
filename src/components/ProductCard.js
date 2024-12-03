import React from 'react';

const ProductCard = ({ product }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
    {/* Adjust the image container to make it responsive */}
    <div className="relative w-full h-60 sm:h-72 md:h-80 lg:h-96">
      <img
        className="w-full h-full object-cover object-center rounded-t-lg opacity-90 hover:opacity-80 transition-opacity"
        src={product.image}
        alt={product.name}
      />
    </div>

    <div className="p-4">
      <h3 className="text-xl font-semibold text-violet-500">{product.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{product.description}</p>
      
      <div className="flex justify-between items-center mt-4">
        <div className="text-lg font-bold text-gray-900">
          ${product.price} <span className="text-sm line-through text-gray-500">${product.originalPrice}</span>
        </div>
        <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-4 py-2 rounded-lg hover:from-fuchsia-500 hover:to-violet-500 transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  </div>
);

const ProductList = ({products}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
