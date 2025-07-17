'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const techIcons = [
  'react',
  'nodejs',
  'mongodb',
  'html5',
  'css3',
  'tailwindcss',
  'javascript',
  'typescript',
];

const shuffleArray = (arr) => [...arr, ...arr].sort(() => 0.5 - Math.random());

export default function TechStackMemoryGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(techIcons);
    setCards(shuffled);
  }, []);

  const handleFlip = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [i1, i2] = newFlipped;
      if (cards[i1] === cards[i2]) {
        setMatched((prev) => [...prev, i1, i2]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-20 p-8 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-xl shadow-xl border border-gray-600">
      <h2 className="text-3xl text-center mb-6 font-bold text-white">🧠 Tech Stack Memory Game</h2>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((tech, index) => {
          const isFlipped = flipped.includes(index) || matched.includes(index);
          return (
            <div
              key={index}
              onClick={() => handleFlip(index)}
              className={`w-24 h-24 cursor-pointer relative rounded-lg transition-transform duration-500 ${
                isFlipped ? 'transform rotate-y-180' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center rounded-lg">
                {isFlipped ? (
                  <Image
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                    alt={tech}
                    width={40}
                    height={40}
                  />
                ) : (
                  <div className="bg-cyan-500 w-full h-full rounded-lg"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-center text-white">
        Matched: {matched.length / 2} / {techIcons.length}
      </p>
    </div>
  );
}
