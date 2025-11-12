'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    title: '🎓 B.Tech in Computer Science',
    date: '2019 - 2023',
    description: 'Completed my Bachelor’s with strong focus on programming, data structures in Computer Science.',
  },
  {
    title: '🧠 Learned Full Stack Development',
    date: '2023',
    description: 'Completed MERN stack, MEAN stack projects and worked on frontend and backend using React.js, Angular.js, Next.js, and Tailwind CSS.',
  },
  {
    title: '💼 Freelance Developer at Xyonyx Pvt Ltd',
    date: 'Mar 2023 – Apr 2024',
    description: 'Worked as a freelance full stack developer on client-based projects involving REST APIs, database integration, UI design, and performance optimization.',
  },
  {
    title: '👨‍💻 Software Developer at Retrack Pvt Ltd',
    date: 'Mar 2024 – May 2025',
    description: 'Joined as a full-time software developer, contributed to scalable web apps using React, Angular, Node.js, CI/CD, and testing.',
  },
  {
    title: '👨‍💻 Application Developer at Areca Embedded System Pvt Ltd',
    date: 'July 2025 – Present',
    description: 'Joined as a full-time Application developer, contributed to scalable web apps using React, Angular, Node.js, CI/CD, also deploying the apps in cloud platforms and now working on AI projects also maintaining the desktop application using Qt.',
  }
];

export default function JourneyTimeline({ onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex justify-center items-center p-4">
      <div
        ref={modalRef}
        className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white rounded-xl w-full max-w-6xl max-h-[90vh] p-6 shadow-2xl border border-gray-600 overflow-x-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">🎓 My Journey</h2>
          <button
            onClick={onClose}
            className="text-sm text-gray-400 hover:text-red-500"
          >
            ❌ Close
          </button>
        </div>

        <div className="flex space-x-10 overflow-x-auto pb-4">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="min-w-[250px] bg-[#1f1b3a] border border-cyan-500 p-4 rounded-xl shadow-lg"
            >
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-cyan-300">{item.date}</p>
              <p className="mt-2 text-sm text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
