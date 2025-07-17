import React from 'react';
import { Link } from 'react-router-dom';

const practices = [
  { id: 'container-gardening', name: 'Container Gardening', image: '/images/Container-gardening.jpg' },
  { id: 'sack-gardening', name: 'Sack Gardening', image: '/images/sack-gardening.jpg' },
  { id: 'barrel-gardening', name: 'Barrel Gardening', image: '/images/Barrel-gardening.jpg' },
  { id: 'layer-gardening', name: 'Layer Gardening', image: '/images/Layer-planting.jpg' },
  { id: 'bottle-gardening', name: 'Bottle Gardening', image: '/images/Bottle-Gardening.jpg' },
  { id: 'vertical-gardening', name: 'Vertical Gardening', image: '/images/Vertical-Gardening.jpg' },
];

const PracticesSection = () => {
  return (
    <section id="practices" className="bg-[#059212]/10 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#2D4F2B]">Urban Farming Practices</h2>
        <p className="text-[#2D4F2B] text-md max-w-xl mx-auto mt-2">
          Discover easy and practical methods to grow your own food even in small urban spaces.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 max-w-7xl mx-auto">
        {practices.map((practice, index) => (
          <Link to={`/practices/${practice.id}`} key={index}>
          <div 
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg hover:border-[#059212] border border-transparent transition duration-300 p-4 flex flex-col items-center text-center"
          >
            <img 
              src={practice.image} 
              alt={practice.name}
              className="h-70 w-full object-cover rounded mb-3"
            />
            <h3 className="text-lg font-semibold text-[#2D4F2B]">{practice.name}</h3>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PracticesSection;
