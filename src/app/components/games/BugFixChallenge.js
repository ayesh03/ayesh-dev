'use client';
import { useState, useEffect } from 'react';
import bugFixQuestions from './bugFixQuestions';

export default function BugFixChallenge() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const shuffled = [...bugFixQuestions].sort(() => 0.5 - Math.random()).slice(0, 5);
    setQuestions(shuffled);
  }, []);

  const handleOptionClick = (option) => {
    setSelected(option);
    if (option === questions[currentIndex].fix) {
      setScore((prev) => prev + 1);
    }
    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetGame = () => {
    const shuffled = [...bugFixQuestions].sort(() => 0.5 - Math.random()).slice(0, 5);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  };

  if (!questions.length) return <p className="text-center">Loading questions...</p>;

  return (
    <div className="text-white">
      {showResult ? (
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">🚀 Finished!</h2>
          <p>Your score: <span className="text-cyan-400">{score} / {questions.length}</span></p>
          <button
            onClick={resetGame}
            className="bg-cyan-600 px-4 py-2 rounded hover:bg-cyan-700 transition"
          >
            🔄 Play Again
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Bug {currentIndex + 1} of {questions.length}</h3>
          <pre className="bg-red-950 p-4 rounded text-sm whitespace-pre-wrap overflow-x-auto">
            {questions[currentIndex].bug}
          </pre>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {questions[currentIndex].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(opt)}
                className={`px-4 py-3 rounded-lg font-medium text-left transition border ${
                  selected === opt
                    ? opt === questions[currentIndex].fix
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
