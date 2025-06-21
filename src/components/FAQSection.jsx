import React, { useState } from 'react';

const faqs = [
  {
    question: 'Can I start urban farming if I only have a balcony?',
    answer: 'Absolutely! With containers, sacks, or hanging baskets, even a small balcony can produce fresh herbs and vegetables.'
  },
  {
    question: 'What materials can I recycle for urban farming?',
    answer: 'You can reuse buckets, barrels, old sacks, wooden crates, and even plastic bottles to create productive mini-gardens.'
  },
  {
    question: 'Is urban farming expensive to set up?',
    answer: 'Not at all. Many materials can be recycled, and seeds or seedlings are affordable. The initial setup can be as simple as a few containers and soil.'
  },
  {
    question: 'How much time does urban farming take?',
    answer: 'It depends on your setup, but a few minutes daily for watering and checking your plants is often enough to get started.'
  },
  {
    question: 'Where can I get materials if I do not have them?',
    answer: (
      <>
        You can get affordable sacks, containers, tools, and more at{' '}
        <a
          href="https://agromateweb.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#059212] underline hover:text-[#2D4F2B]"
        >
          Agromate
        </a>
        . They have everything you need to start!
      </>
    )
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#059212]/10 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#2D4F2B]">Frequently Asked Questions</h2>
        <p className="text-[#2D4F2B] text-md max-w-xl mx-auto mt-2">
          Get answers to common questions about starting and maintaining your urban garden.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-white rounded shadow hover:shadow-lg transition duration-300"
          >
            <button 
              className="w-full text-left p-4 font-medium text-[#2D4F2B] flex justify-between items-center"
              onClick={() => toggle(index)}
            >
              {faq.question}
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 pt-0 text-[#2D4F2B] text-md">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
