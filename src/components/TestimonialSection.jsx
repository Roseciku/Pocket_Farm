import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Jane Doe',
    image: '/images/Jane-Doe.jpeg',
    text: 'Urban farming transformed my small balcony into a green oasis. I save money and eat healthier!'
  },
  {
    name: 'Alex Smith',
    image: '/images/Alex-Smith.jpeg',
    text: 'I never thought I could grow food in the city — but my container garden is thriving thanks to this site!'
  },
  {
    name: 'Maria Kim',
    image: '/images/Maria-Kim.jpeg',
    text: 'Easy guides, affordable materials — urban farming has never been this accessible.'
  },
  {
    name: 'James Lee',
    image: '/images/A-farmer-holding-vegetables.jpeg',
    text: 'From herbs to tomatoes, I now grow most of my veggies at home!'
  }
];

const TestimonialSection = () => {
  return (
    <section className="bg-[#059212]/10 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#2D4F2B]">What Our Growers Say</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4 max-w-7xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 p-4 flex flex-col items-center text-center"
          >
            <img 
              src={t.image} 
              alt={t.name}
              className="w-16 h-16 object-cover rounded-full mb-3"
            />
            <p className="text-sm text-[#2D4F2B] mb-2">"{t.text}"</p>
            <h4 className="text-sm font-semibold text-[#2D4F2B]">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
