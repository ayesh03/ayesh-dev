'use client';
import { useState, useEffect } from 'react';

// Full list of 20 project scenarios
const allProjectQuestions = [
  {
    scenario: 'You need to build a real-time chat application.',
    options: ['React + Firebase', 'PHP + MySQL', 'JSP + Oracle'],
    correct: 'React + Firebase',
  },
  {
    scenario: 'You are building a scalable e-commerce platform.',
    options: ['Angular + .NET', 'React + Node.js + MongoDB', 'WordPress + WooCommerce'],
    correct: 'React + Node.js + MongoDB',
  },
  {
    scenario: 'A static marketing website for a small business.',
    options: ['Gatsby.js', 'React Native', 'Django'],
    correct: 'Gatsby.js',
  },
  {
    scenario: 'You want to create a RESTful API backend for mobile apps.',
    options: ['Node.js + Express', 'jQuery + PHP', 'React'],
    correct: 'Node.js + Express',
  },
  {
    scenario: 'You are building a mobile app for both iOS and Android.',
    options: ['React Native', 'Laravel', 'Bootstrap'],
    correct: 'React Native',
  },
  {
    scenario: 'You need to create a blogging platform with admin panel.',
    options: ['Next.js + Prisma', 'Vue.js + MySQL', 'Angular + Spring Boot'],
    correct: 'Next.js + Prisma',
  },
  {
    scenario: 'Need to build a dashboard with complex charts.',
    options: ['React + Recharts', 'jQuery + Bootstrap', 'Svelte + SQL'],
    correct: 'React + Recharts',
  },
  {
    scenario: 'Create a portfolio website for a developer.',
    options: ['HTML + CSS + JS', 'React + Tailwind CSS', 'Angular'],
    correct: 'React + Tailwind CSS',
  },
  {
    scenario: 'You want server-side rendering and SEO support.',
    options: ['Next.js', 'React Native', 'Vue 3'],
    correct: 'Next.js',
  },
  {
    scenario: 'You’re building a weather app with external API calls.',
    options: ['React + Axios', 'PHP + jQuery', 'Flutter'],
    correct: 'React + Axios',
  },
  {
    scenario: 'You need to manage a large set of real-time IoT sensors.',
    options: ['Node.js + MQTT', 'Flask + PostgreSQL', 'React Native'],
    correct: 'Node.js + MQTT',
  },
  {
    scenario: 'Build an admin panel with role-based access.',
    options: ['React + Redux + Node.js', 'Angular + Java', 'HTML + CSS'],
    correct: 'React + Redux + Node.js',
  },
  {
    scenario: 'Develop a scalable microservices backend.',
    options: ['Spring Boot', 'Node.js + Docker', 'Laravel'],
    correct: 'Node.js + Docker',
  },
  {
    scenario: 'Need a lightweight blog with markdown support.',
    options: ['Next.js + MDX', 'WordPress', 'VuePress'],
    correct: 'Next.js + MDX',
  },
  {
    scenario: 'Single-page application for task management.',
    options: ['Vue.js + Firebase', 'HTML only', 'PHP + XAMPP'],
    correct: 'Vue.js + Firebase',
  },
  {
    scenario: 'Developing a finance dashboard with secure login.',
    options: ['React + Firebase Auth', 'jQuery + LocalStorage', 'AngularJS'],
    correct: 'React + Firebase Auth',
  },
  {
    scenario: 'You want to create a PWA (Progressive Web App).',
    options: ['React + Workbox', 'PHP + HTML', 'Bootstrap'],
    correct: 'React + Workbox',
  },
  {
    scenario: 'You’re building a video conferencing app.',
    options: ['React + WebRTC', 'Laravel + SQL', 'Java Applet'],
    correct: 'React + WebRTC',
  },
  {
    scenario: 'You’re building a real-time multiplayer game.',
    options: ['Socket.io + Phaser.js', 'jQuery + HTML5', 'Bootstrap'],
    correct: 'Socket.io + Phaser.js',
  },
  {
    scenario: 'Create a lightweight landing page for startup.',
    options: ['Next.js + Tailwind CSS', 'Angular + Material', 'Vue + Vuetify'],
    correct: 'Next.js + Tailwind CSS',
  },
];

export default function WhichTechToUseGame() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Shuffle & pick 5 at a time from 20 total
  useEffect(() => {
    const shuffled = [...allProjectQuestions].sort(() => 0.5 - Math.random()).slice(0, 5);
    setQuestions(shuffled);
  }, []);

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === questions[currentIndex].correct) {
      setScore((prev) => prev + 1);
    }
    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((prev) => prev + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetGame = () => {
    const shuffled = [...allProjectQuestions].sort(() => 0.5 - Math.random()).slice(0, 5);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  };

  if (!questions.length) return <p className="text-center text-white">Loading questions...</p>;

  return (
    <div className="text-white">
      {showResult ? (
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">🏁 Quiz Finished!</h2>
          <p className="text-lg">Your score: <span className="text-cyan-400">{score} / {questions.length}</span></p>
          <button
            onClick={resetGame}
            className="bg-cyan-600 px-4 py-2 rounded hover:bg-cyan-700 transition"
          >
            🔄 Play Again
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Scenario {currentIndex + 1} of {questions.length}</h3>
          <p className="bg-gray-800 p-4 rounded text-base">{questions[currentIndex].scenario}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {questions[currentIndex].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt)}
                className={`px-4 py-3 rounded-lg font-medium text-left transition border ${
                  selected === opt
                    ? opt === questions[currentIndex].correct
                      ? 'bg-green-600 border-green-700'
                      : 'bg-red-600 border-red-700'
                    : 'bg-gray-700 hover:bg-gray-600 border-gray-500'
                }`}
                disabled={selected}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
