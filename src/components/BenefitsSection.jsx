import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    image: '/images/Herbs-farming-in-balcony.jpg',
    title: 'Grow More in Small Spaces',
    text: 'Turn balconies, rooftops, and small yards into productive gardens. Even the tiniest spaces can yield fresh herbs and vegetables.'
  },
  {
    image: '/images/A-farmer-holding-vegetables.jpeg',
    title: 'Save Money on Groceries',
    text: 'Reduce your grocery bills. Harvest your own organic food, free from chemicals, right at home.'
  },
  {
    image: '/images/Layer-planting.jpg',
    title: 'Sustainable & Eco-Friendly',
    text: 'Reuse containers, rubbers and barrels to create eco-friendly gardens that contribute to a greener environment.'
  }
];

const BenefitsSection = () => {
  return (
    <section className="bg-[#059212]/10 py-12">
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold text-[#2D4F2B]">Benefits of Urban Farming</h2>
  </div>
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 max-w-8xl mx-auto">
    {benefits.map((benefit, index) => (
      <div 
        key={index}
        className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
      >
        <img 
          src={benefit.image} 
          alt={benefit.title}
          className="h-70 w-full object-cover rounded mb-4"
        />
        <h3 className="text-xl font-semibold text-[#2D4F2B] mb-2">{benefit.title}</h3>
        <p className="text-[#2D4F2B] text-sm">{benefit.text}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default BenefitsSection;
