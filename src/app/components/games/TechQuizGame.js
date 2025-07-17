'use client';
import { useState, useEffect } from 'react';

const QUESTION_BANK = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which company developed React?",
    options: ["Google", "Facebook", "Microsoft"],
    answer: "Facebook",
  },
  {
    question: "What is JSX?",
    options: ["A CSS framework", "A JavaScript syntax extension", "A database"],
    answer: "A JavaScript syntax extension",
  },
  {
    question: "Which hook is used for side effects in React?",
    options: ["useState", "useEffect", "useContext"],
    answer: "useEffect",
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Colorful Style Syntax", "Computer Style Structure"],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What is the command to initialize a Git repository?",
    options: ["git init", "git start", "git create"],
    answer: "git init",
  },
  {
    question: "What is Node.js?",
    options: ["A frontend framework", "A backend runtime environment", "A database system"],
    answer: "A backend runtime environment",
  },
  {
    question: "What is the extension of a React Component file?",
    options: [".js", ".jsx", ".html"],
    answer: ".jsx",
  },
  {
    question: "Which database is NoSQL?",
    options: ["MySQL", "MongoDB", "PostgreSQL"],
    answer: "MongoDB",
  },
  {
    question: "What is a REST API?",
    options: ["A frontend component", "A database", "An architectural style for APIs"],
    answer: "An architectural style for APIs",
  },
  {
    question: "Which CSS framework uses utility-first classes?",
    options: ["Bootstrap", "Material UI", "Tailwind CSS"],
    answer: "Tailwind CSS",
  },
  {
    question: "Which method is used to render elements in React?",
    options: ["render()", "display()", "show()"],
    answer: "render()",
  },
  {
    question: "What does CRUD stand for?",
    options: ["Create, Read, Update, Delete", "Compute, Read, Upload, Deploy", "Control, Run, Update, Debug"],
    answer: "Create, Read, Update, Delete",
  },
  {
    question: "Which is used to manage state globally in React?",
    options: ["React Router", "Redux", "Tailwind"],
    answer: "Redux",
  },
  {
    question: "What does `npm` stand for?",
    options: ["Node Project Manager", "Node Package Manager", "New Project Module"],
    answer: "Node Package Manager",
  },
  {
    question: "Which HTTP method is used to send data?",
    options: ["GET", "POST", "DELETE"],
    answer: "POST",
  },
  {
    question: "What is the default port of React development server?",
    options: ["3000", "8000", "8080"],
    answer: "3000",
  },
  {
    question: "What is the purpose of useState in React?",
    options: ["To fetch data", "To manage state", "To create components"],
    answer: "To manage state",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Microsoft", "Google"],
    answer: "Netscape",
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>"],
    answer: "<a>",
  },
];

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function TechQuizGame() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const randomFive = shuffle(QUESTION_BANK).slice(0, 5);
    setQuestions(randomFive);
  }, []);

  const handleAnswer = (option) => {
    if (option === questions[currentIndex].answer) {
      setScore(score + 1);
    }
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  if (questions.length === 0) return <div className="text-white">Loading...</div>;

  return (
    <div className="text-white space-y-6">
      {showResult ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold">🎉 Quiz Completed!</h2>
          <p className="mt-4 text-lg">Your Score: <span className="text-cyan-400">{score} / 5</span></p>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Q{currentIndex + 1}: {questions[currentIndex].question}
          </h3>
          <div className="grid gap-3">
            {questions[currentIndex].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt)}
                className="bg-cyan-600 py-2 px-4 rounded hover:bg-cyan-700 transition"
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
