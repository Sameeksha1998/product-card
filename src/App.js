import React from 'react';
import ProductList from './components/ProductCard.js';

const products = [
  {
    id: 1,
    name: 'Organic Apples (1kg)',
    description: 'Fresh and juicy organic apples, perfect for snacks or baking.',
    price: '19.99',
    originalPrice: '29.99',
    image: 'https://www.nutritionadvance.com/wp-content/uploads/2017/12/whole-mango-and-half-a-mango-showing-flesh.jpg',  // Placeholder image for organic apples
  },
  {
    id: 2,
    name: 'Whole Wheat Bread (500g)',
    description: 'Nutritious whole wheat bread, perfect for sandwiches and toast.',
    price: '2.99',
    originalPrice: '4.99',
    image: 'https://media.gettyimages.com/id/185284489/photo/orange.jpg?s=612x612&w=gi&k=20&c=HZYbLyTgUgxD1WE-O-ltBo_Lui6pX6rQLHQJdYdyl_g=',  // Placeholder image for whole wheat bread
  },
  {
    id: 3,
    name: 'Fresh Broccoli (500g)',
    description: 'Crisp and healthy broccoli, a great addition to any meal.',
    price: '3.99',
    originalPrice: '5.99',
    image: 'https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvdXB3azYyMDUyMTcxLXdpa2ltZWRpYS1pbWFnZS1qb2I2MjFfMi5wbmc.png',  // Placeholder image for broccoli
  },
  {
    id: 4,
    name: 'Free-Range Eggs (12 pack)',
    description: 'High-quality, free-range eggs, ideal for cooking and baking.',
    price: '4.99',
    originalPrice: '6.99',
    image: 'https://www.realsimple.com/thmb/1Spsaf2YYmXnSLev1PvaNdVE6oA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hi-fiber-fruits-GettyImages-1278780734-47f47c8ce7e7495caa53fa482445e205.jpg',  // Placeholder image for eggs
  },
];


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header class="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-4 text-center text-2xl font-bold mb-4">
        Product Showcase
      </header>
      <main>
        <ProductList products={products} />
      </main>
    </div>
  );
};

export default App;
