import React, { useEffect, useState } from 'react'

const heroSlides = [
  {
    image: '/images/Farming-in-a-balcony.jpg',
    caption: 'No Backyard? No Problem. Start on your balcony with just a few containers.'
  },
  {
    image: '/images/Vegetables-and-fruits.jpg',
    caption: 'Harvest Organic Food. Right From Your Balcony Or Sack Garden.'
  },
  {
    image: '/images/Container-gardening.jpg',
    caption: 'Grow More With Less — Use Recycled Sacks, Buckets, or Barrels.'
  },
  {
    image: '/images/woman-planting-vegetables-in-her-balcony.jpeg',
    caption: 'Control Your Nutrition, Save On Food — Make Your Space Work For You.'
  },
];


function HeroSection() {

const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroSlides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3s
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentIndex];

  return (
    <section>
      <div className="bg-[#059212]/10 py-12 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2D4F2B] mb-4">
          Grow Your Own Food, Right Where You Live
        </h2>
        <p className="text-base sm:text-lg text-[#2D4F2B] max-w-2xl mx-auto">
          Control your nutrition. Cut food costs. Use your balcony, sack, or container to start today.
        </p>
      </div>

      <div
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute bottom-0 w-full bg-black/40 p-4 sm:p-6">
          <p className="text-lg sm:text-xl font-semibold">{slide.caption}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection