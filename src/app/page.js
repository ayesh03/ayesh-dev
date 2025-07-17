'use client';
import { useState, useRef, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Chatbot from './components/Chatbot';
import RadarChart from './components/RadarChart';
import GamesHub from './components/games/GamesHub';
import Image from 'next/image';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-8 py-20 relative">

      {/* HIRE ME BUTTON */}
      <div className="fixed top-6 right-8 z-50">
        <button
          onClick={() => setShowPopup(true)}
          className="bg-[#0c1c3e] text-white px-6 py-2 rounded-full shadow hover:bg-cyan-700 transition"
        >
          Hire Me
        </button>
      </div>

      {/* MODAL */}
      {showPopup && (
  <div className="fixed inset-0 z-40 flex items-center justify-center">
    <div
      ref={modalRef}
      className="bg-white text-black rounded-xl shadow-2xl w-[90%] max-w-sm p-6 space-y-4 text-center"
    >

            <h2 className="text-xl font-bold">📬 Contact Me</h2>
            <p><strong>📞 :</strong> +91-7894152448</p>
            <p><strong>✉️ :</strong> ayeshbhuyan180@gmail.com</p>
            <p>
              <strong>🔗 LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/ayesh03"
                target="_blank"
                className="text-blue-600 underline"
              >
                Linkedin
              </a>
            </p>
            <a
              href="/aresume.pdf"
              download
              className="block text-center bg-cyan-600 text-white py-2 px-4 rounded-full hover:bg-cyan-700 transition"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">Hey, I&#39;m</h1>
          <h2 className="text-5xl md:text-6xl font-extrabold mt-2">AYESH RANJAN BHUYAN</h2>
          <p className="mt-4 text-lg">
            A <span className="text-cyan-400 font-semibold">Full-Stack</span> Web Developer.
            <br />
            I enjoy working with <span className="text-cyan-400 font-semibold">MERN STACK, MEAN STACK</span> and
            crafting beautiful front-end and back-end experiences.
          </p>

          <div className="flex gap-4 mt-6 text-2xl">
            <a href="https://github.com/ayesh03" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-cyan-400 cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/ayesh03" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-cyan-400 cursor-pointer" />
            </a>
            <a href="https://x.com/pearlvayesh" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-cyan-400 cursor-pointer" />
            </a>
            <a href="mailto:ayeshbhuyan180@gmail.com">
              <FaEnvelope className="hover:text-cyan-400 cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
  src="/man1.png"
  alt="Developer Illustration"
  className="w-[90%] md:w-[80%]"
  width={800} height={800}
/>
        </div>
      </div>


      <hr className="my-20 border-t border-gray-100 opacity-30" />

      {/* PROJECTS SECTION */}
<section id="projects" className="pt-10 w-full">
  <h1 className="text-center text-5xl md:text-6xl font-extrabold tracking-widest text-gray-400 mb-16">
    PROJECTS
  </h1>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
    {/* Mood Music App */}
    <div className="border border-gray-700 rounded-2xl p-6 hover:shadow-xl transition duration-300">
      <h2 className="text-2xl font-bold text-white mb-3">Mood Music App</h2>
      <p className="text-gray-300 mb-4">
        A smart app that detects your mood from a photo and suggests a playlist using Spotify.
        Built using Angular 17 and Node.js with Spotify Web Playback SDK.
      </p>
      <a
        href="https://github.com/ayesh03/Mood-Music-App"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-purple-600 px-4 py-2 rounded-full text-white hover:bg-purple-700 transition"
      >
        Source Code ⚙️
      </a>
    </div>

    {/* Sales Email Generator */}
    <div className="border border-gray-700 rounded-2xl p-6 hover:shadow-xl transition duration-300">
      <h2 className="text-2xl font-bold text-white mb-3">Sales Email Generator</h2>
      <p className="text-gray-300 mb-4">
        AI-powered tool to create personalized sales emails using minimal input.
        Built with Next.js and integrated with OpenAI&#39;s GPT API.
      </p>
      <a
        href="https://github.com/ayesh03/Sales-Email-Generator"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-purple-600 px-4 py-2 rounded-full text-white hover:bg-purple-700 transition"
      >
        Source Code ⚙️
      </a>
    </div>

    {/* Twitter Clone */}
    <div className="border border-gray-700 rounded-2xl p-6 hover:shadow-xl transition duration-300">
      <h2 className="text-2xl font-bold text-white mb-3">Twitter Clone</h2>
      <p className="text-gray-300 mb-4">
        A Django-based Twitter app with tweeting, liking, following, and user timelines. Clean UI using Bootstrap and Django templates.
      </p>
      <a
        href="https://github.com/ayesh03/ayesh-tweet"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-purple-600 px-4 py-2 rounded-full text-white hover:bg-purple-700 transition"
      >
        Source Code ⚙️
      </a>
    </div>

    {/* Feedback Management System */}
    <div className="border border-gray-700 rounded-2xl p-6 hover:shadow-xl transition duration-300">
      <h2 className="text-2xl font-bold text-white mb-3">Feedback Management System</h2>
      <p className="text-gray-300 mb-4">
        A React app for collecting and managing user feedback with ratings.
        Real-time UI updates, Tailwind CSS, and functional components.
      </p>
      <a
        href="https://github.com/ayesh03/feedback-system"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-purple-600 px-4 py-2 rounded-full text-white hover:bg-purple-700 transition"
      >
        Source Code ⚙️
      </a>
    </div>
  </div>
</section>

<hr className="my-10 border-t border-gray-100 opacity-30" />

{/* SKILLS SECTION */}
<section id="projects" className="pt-10 w-full">
  <h1 className="text-center text-5xl md:text-6xl font-extrabold tracking-widest text-gray-400 mb-16">
    PROGRAMMING SKILLS
  </h1>

  <div className="flex flex-col md:flex-row items-center justify-center gap-24">
    {/* Left Side: Sitting Man Image */}
    <div className="w-[250px] md:w-[300px]">
      <Image src="/man-2.png" alt="Man with Laptop" width={400} height={400} />
    </div>

    {/* Right Side: Concentric Rings with Skills */}
    <div className="relative w-[400px] h-[400px]">
      {/* CENTER: JavaScript */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <Image
  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  alt="JavaScript logo"
  className="w-14 h-14"
  width={56} // optional, for better performance
  height={56} // optional
/>
      </div>

      {/* INNER RING (4 icons) */}
<div className="absolute top-0 left-0 w-full h-full animate-spin-slow">
  {["react", "nodejs", "html5", "tailwindcss"].map((tech, i) => (
    <div
      key={i}
      className="absolute w-full h-full flex items-center justify-center"
      style={{ transform: `rotate(${i * 90}deg)` }}
    >
      <div
        className="absolute"
        style={{ transform: `translateY(-110px) rotate(${-i * 90}deg)` }}
      >
        <Image
  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
  alt={`${tech} logo`}  // ✅ alt added
  className="w-12 h-12"
  width={48}
  height={48}
/>
      </div>
    </div>
  ))}
</div>


      {/* OUTER RING (8 icons) */}
      <div className="absolute top-0 left-0 w-full h-full animate-spin-slower">
        {[
          "redux",
          "nextjs",
          "mongodb",
          "git",
          "python",
          "bootstrap",
          "angular",
          "typescript",
        ].map((tech, i) => (
          <div
            key={i}
            className="absolute w-full h-full flex items-center justify-center"
            style={{ transform: `rotate(${i * 45}deg)` }}
          >
            <div
              className="absolute"
              style={{ transform: `translateY(-200px) rotate(${-i * 45}deg)` }}
            >
              <Image
  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
  alt={`${tech} logo`}
  className="w-12 h-12"
  width={48}
  height={48}
/>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
<hr className="my-10 border-t border-gray-100 opacity-30" />

{/* TECH RADAR CHART */}
<section id="skills">
  <RadarChart />
</section>
<hr className="my-10 border-t border-gray-100 opacity-30" />

<GamesHub />

<hr className="my-10 border-t border-gray-100 opacity-30" />
<footer className="text-center text-gray-400 py-10 text-sm">
  Made by <span className="text-white font-semibold">Ayesh</span><br/> © 2025 using <span className="text-cyan-400 font-semibold">Next.js</span>
</footer>

<Chatbot />
    </main>
  );
}
