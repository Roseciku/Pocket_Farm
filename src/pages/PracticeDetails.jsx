
import React from 'react';
import { useParams } from 'react-router-dom';
import practicesData from '../data/practices.json';
import { Link } from 'react-router-dom';

const PracticeDetails = () => {
  const { id } = useParams();
  const method = practicesData.find((practice) => practice.id === id);

  if (!method) {
    return <div className="p-6 text-red-500 font-semibold">Farming method not found.</div>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="bg-[#2D4F2B] rounded-lg p-6 mb-8 shadow-md text-white">
        <h2 className="text-4xl font-bold text-[#FFEB00] mb-2">{method.name}</h2>
        <p className="text-lg">{method.description}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="bg-white p-4 rounded-lg shadow border-t-4 border-[#059212]">
          <h3 className="text-xl font-semibold text-[#2D4F2B] mb-3">🧰 Items Required</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            {method.items_required.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border-t-4 border-[#059212]">
          <h3 className="text-xl font-semibold text-[#2D4F2B] mb-3">🌱 Best Plants to Grow</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            {method.plants_suitable.map((plant, i) => (
              <li key={i}>{plant}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-[#059212]/10 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-[#2D4F2B] mb-3">📋 Step-by-Step Procedure</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-800">
          {method.step_by_step.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold text-[#2D4F2B] mb-2">🎥 Video Guide</h3>
        <a
          href={method.video_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#059212] text-white px-6 py-2 rounded shadow hover:bg-[#2D4F2B] transition"
        >
          Watch Tutorial
        </a>
      </div>
      <div className="mt-12 text-center">
  <Link
    to="/"
    className="inline-block text-[#2D4F2B] font-semibold border border-[#059212] px-6 py-2 rounded hover:bg-[#059212] hover:text-white transition"
  >
    ← Back to Home
  </Link>
</div>
    </div>
  );
};

export default PracticeDetails;
