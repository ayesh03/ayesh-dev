'use client';
import { useEffect, useRef, useState } from 'react';

const reasons = [
  "I deliver full-stack solutions with speed, precision, and adaptability.",
  "From hardware to cloud, I architect, code, and deploy with efficiency.",
  "I turn complex problems into elegant, maintainable code — fast.",
  "Frontend polish meets backend power — I bring both.",
  "I don’t just write code; I craft solutions that scale.",
  "Fast learner, faster debugger — always production-ready.",
  "I thrive in chaos, ship in silence, and deliver with impact.",
  "Pixels to packets — I handle every layer with precision.",
  "Code is my craft, quality is my culture.",
  "I turn specs into software, and deadlines into delivery.",
  "One developer, endless solutions — no excuses.",
  "Built for sprints, trained for marathons — I grow with your team.",
  "Your problems, my playground — I love building under pressure.",
  "Agile mindset, clean code, constant improvement.",
  "I write code that works — today, tomorrow, and six months from now.",
  "I ship features, fix bugs, and fuel innovation.",
  "Efficient with code, ruthless with bugs, kind with teammates.",
  "I take ownership — and deliver with pride.",
  "Good at deadlines, great at design, best at debugging.",
  "Hire me — I make tech simple, scalable, and stunning.",
];

export default function HireMeModal({ onClose }) {
  const modalRef = useRef();
  const [index, setIndex] = useState(0);

  const generateReason = () => {
    setIndex((prev) => (prev + 1) % reasons.length);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div
        ref={modalRef}
        className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white rounded-xl w-full max-w-md p-6 shadow-xl border border-gray-600 text-center"
      >
        <h2 className="text-xl font-bold mb-4">📢 Why Should You Hire Ayesh?</h2>
        <p className="mb-6 text-lg font-medium">{reasons[index]}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={generateReason}
            className="bg-cyan-500 px-4 py-2 rounded-full font-semibold text-white hover:bg-cyan-600 transition"
          >
            🔁 Show Another
          </button>
          <button
            onClick={onClose}
            className="bg-gray-700 px-4 py-2 rounded-full font-semibold text-white hover:bg-gray-800 transition"
          >
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  );
}
