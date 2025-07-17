'use client';
import { useState, useRef, useEffect } from 'react';
import TechStackMemoryGame from './TechStackMemoryGame';
import TechQuizGame from './TechQuizGame';
import CodeOutputPredictor from './CodeOutputPredictor';
import BugFixChallenge from './BugFixChallenge';
import BinaryConverterGame from './BinaryConverterGame';
import WhichTechToUseGame from './WhichTechToUseGame';
import HackConsoleGame from './HackConsoleGame';
import JourneyTimeline from '../JourneyTimeline';
import HireMeModal from './HireMeModal';

export default function GamesHub() {
  const [showGames, setShowGames] = useState(false);
  const [activeGame, setActiveGame] = useState(null);
  const [showJourney, setShowJourney] = useState(false);
  const [showHireModal, setShowHireModal] = useState(false);

  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowGames(false);
        setActiveGame(null);
        setShowJourney(false);
      }
    };
    if (showGames || showJourney) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showGames, showJourney]);

  return (
    <>
      <div className="flex justify-center mt-6 gap-4">
  <button
    onClick={() => setShowGames(true)}
    className="bg-cyan-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-cyan-600 transition"
  >
    🎮 Play Games
  </button>

  <button
    onClick={() => setShowJourney(true)}
    className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-yellow-500 transition"
  >
    🎓 Visit My Journey
  </button>

  <button
    onClick={() => setShowHireModal(true)}
    className="bg-teal-600 text-black px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-yellow-600 transition"
  >
    📢 Why Hire Ayesh?
  </button>
</div>


      {/* Games Modal */}
      {showGames && (
        <div className="fixed inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] z-50 flex items-center justify-center">
          <div
            ref={modalRef}
            className="w-[95%] max-w-3xl p-6 rounded-xl border border-gray-600 text-white shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setShowGames(false);
                  setActiveGame(null);
                }}
                className="text-sm text-gray-300 hover:text-white"
              >
                ❌ Close
              </button>
            </div>

            {!activeGame && (
              <>
                <h2 className="text-2xl font-bold text-center mb-6">🎯 Choose a Game</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setActiveGame('memory')}
                    className="bg-yellow-500 text-black py-4 rounded-lg font-semibold hover:bg-yellow-600 transition"
                  >
                    🧠 Tech Stack Memory Game
                  </button>
                  <button
                    onClick={() => setActiveGame('quiz')}
                    className="bg-purple-600 py-4 rounded-lg font-semibold hover:bg-purple-700 transition"
                  >
                    ❓ Tech Quiz Game
                  </button>
                  <button
                    onClick={() => setActiveGame('predictor')}
                    className="bg-green-600 py-4 rounded-lg font-semibold hover:bg-green-700 transition col-span-1 sm:col-span-2"
                  >
                    💻 Code Output Predictor
                  </button>
                  <button
                    onClick={() => setActiveGame('bugfix')}
                    className="bg-pink-600 py-4 rounded-lg font-semibold hover:bg-pink-700 transition"
                  >
                    🧠 Bug Fix Challenge
                  </button>
                  <button
                    onClick={() => setActiveGame('binary')}
                    className="bg-indigo-600 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition"
                  >
                    🧮 Binary Converter Game
                  </button>
                  <button
                    onClick={() => setActiveGame('whichtech')}
                    className="bg-black py-4 rounded-lg font-semibold hover:bg-pink-700 transition"
                  >
                    🧠 Which Tech to Use?
                  </button>
                  <button
                    onClick={() => setActiveGame('console')}
                    className="bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-gray-900 transition"
                  >
                    🖥️ Hack the Console
                  </button>
                </div>
              </>
            )}

            {/* Game views */}
            {activeGame === 'memory' && (
              <>
                <button onClick={() => setActiveGame(null)} className="mt-4 mb-2 bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition">
                  🔙 Back to Menu
                </button>
                <TechStackMemoryGame />
              </>
            )}
            {activeGame === 'quiz' && (
              <>
                <button onClick={() => setActiveGame(null)} className="mt-4 mb-2 bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition">
                  🔙 Back to Menu
                </button>
                <TechQuizGame />
              </>
            )}
            {activeGame === 'predictor' && (
              <>
                <button onClick={() => setActiveGame(null)} className="mt-4 mb-2 bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition">
                  🔙 Back to Menu
                </button>
                <CodeOutputPredictor />
              </>
            )}
            {activeGame === 'bugfix' && (
              <>
                <button onClick={() => setActiveGame(null)} className="mt-4 mb-2 bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition">
                  🔙 Back to Menu
                </button>
                <BugFixChallenge />
              </>
            )}
            {activeGame === 'binary' && (
              <>
                <button onClick={() => setActiveGame(null)} className="mt-4 mb-2 bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition">
                  🔙 Back to Menu
                </button>
                <BinaryConverterGame />
              </>
            )}
            {activeGame === 'whichtech' && (
              <>
                <button onClick={() => setActiveGame(null)} className="mb-4 bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition">
                  🔙 Back to Menu
                </button>
                <WhichTechToUseGame />
              </>
            )}
            {activeGame === 'console' && (
              <>
                <button onClick={() => setActiveGame(null)} className="mt-4 mb-2 bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition">
                  🔙 Back to Menu
                </button>
                <HackConsoleGame />
              </>
            )}
          </div>
        </div>
      )}

      {/* Journey Modal */}
      {showJourney && (
  <JourneyTimeline onClose={() => setShowJourney(false)} />
)}

{showHireModal && <HireMeModal onClose={() => setShowHireModal(false)} />}


    </>
  );
}
