'use client';
import { useState, useEffect } from 'react';

export default function BinaryConverterGame() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [type, setType] = useState('decToBin'); // or binToDec

  // Generate 5 random questions
  useEffect(() => {
    const temp = [];
    for (let i = 0; i < 5; i++) {
      const randomNum = Math.floor(Math.random() * 100) + 1;
      const questionType = Math.random() < 0.5 ? 'decToBin' : 'binToDec';
      const value = questionType === 'decToBin' ? randomNum : randomNum.toString(2);
      const answer = questionType === 'decToBin' ? randomNum.toString(2) : parseInt(value, 2).toString();
      temp.push({ value, answer, questionType });
    }
    setQuestions(temp);
  }, []);

  const checkAnswer = () => {
    const correct = questions[currentIndex].answer;
    if (userInput.trim() === correct) {
      setScore((prev) => prev + 1);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setUserInput('');
    } else {
      setShowResult(true);
    }
  };

const resetGame = () => {
  const temp = [];
  for (let i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    const questionType = Math.random() < 0.5 ? 'decToBin' : 'binToDec';
    const value = questionType === 'decToBin' ? randomNum : randomNum.toString(2);
    const answer = questionType === 'decToBin' ? randomNum.toString(2) : parseInt(value, 2).toString();
    temp.push({ value, answer, questionType });
  }

  setQuestions(temp);
  setCurrentIndex(0);
  setUserInput('');
  setScore(0);
  setShowResult(false);
};


  if (!questions.length) return <p className="text-center">Loading...</p>;

  const current = questions[currentIndex];

  return (
    <div className="text-white">
      {showResult ? (
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">🎉 Game Over!</h2>
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
          <h3 className="text-lg font-semibold">Question {currentIndex + 1} of {questions.length}</h3>
          <p className="text-md">
            {current.questionType === 'decToBin'
              ? `Convert decimal ${current.value} to binary:`
              : `Convert binary ${current.value} to decimal:`}
          </p>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
            placeholder="Enter your answer..."
          />
          <button
            onClick={checkAnswer}
            className="bg-cyan-600 px-4 py-2 rounded hover:bg-cyan-700 transition"
          >
            ✅ Submit
          </button>
        </div>
      )}
    </div>
  );
}
