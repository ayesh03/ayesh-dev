'use client';
import { useState, useEffect } from 'react';
import hackChallenges from './hackChallenges';

export default function HackConsoleGame() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Shuffle 5 questions from 20
  useEffect(() => {
    const shuffled = [...hackChallenges].sort(() => 0.5 - Math.random()).slice(0, 5);
    setQuestions(shuffled);
  }, []);

  const handleSubmit = () => {
    const currentQuestion = questions[currentIndex];
    let isCorrect = false;

    try {
      isCorrect = currentQuestion.test(input.trim());
    } catch (e) {
      isCorrect = false;
    }

    if (isCorrect) setScore((prev) => prev + 1);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setInput('');
    } else {
      setShowResult(true);
    }
  };

  const handlePlayAgain = () => {
    const shuffled = [...hackChallenges].sort(() => 0.5 - Math.random()).slice(0, 5);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setInput('');
    setScore(0);
    setShowResult(false);
    setSubmitted(false);
  };

  if (!questions.length) return <p className="text-white text-center">Loading...</p>;

  return (
    <div className="text-white space-y-6">
      {!showResult ? (
        <>
          <h2 className="text-xl font-bold text-cyan-400">
            🖥️ Challenge {currentIndex + 1} of {questions.length}
          </h2>

          <div className="bg-gray-800 p-4 rounded text-sm">
            {questions[currentIndex].prompt}
          </div>

          <textarea
            rows={4}
            className="w-full bg-black border border-gray-600 p-2 rounded mt-2"
            placeholder="Enter your JavaScript code here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="bg-green-600 px-6 py-2 rounded hover:bg-green-700 transition font-medium"
          >
            ✅ Submit
          </button>
        </>
      ) : (
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">🎉 Game Over!</h2>
          <p className="text-lg">
            Your Score: <span className="text-green-400">{score}</span> /{' '}
            <span className="text-cyan-400">{questions.length}</span>
          </p>
          <button
            onClick={handlePlayAgain}
            className="bg-cyan-600 px-4 py-2 rounded hover:bg-cyan-700 transition"
          >
            🔁 Play Again
          </button>
        </div>
      )}
    </div>
  );
}
