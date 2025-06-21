import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-[#2D4F2B] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#FFEB00]">Get In Touch</h2>
          <p className="text-white text-sm max-w-md mx-auto">
            Have questions or want to start your urban farming journey? Send us a message!
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Form */}
          <form className="bg-white rounded-lg shadow p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#2D4F2B]">Name</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#059212]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D4F2B]">Email</label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#059212]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D4F2B]">Message</label>
              <textarea
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#059212]"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#059212] text-white font-semibold rounded px-4 py-2 hover:bg-[#2D4F2B] transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact info */}
          <div className="text-white flex flex-col justify-center space-y-4">
            <p><strong>Email:</strong> pocketfarm@urbanfarming.com</p>
            <p><strong>Phone:</strong> +254 712 345 678</p>
            <p><strong>Visit us:</strong> Nairobi, Kenya</p>
            <p className="mt-4 text-[#FFEB00] font-semibold">We’ll get back to you within 24 hours!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
