"use client";

import { useState } from "react";
import Image from "next/image";
import AIBackground from "./components/AIBackground";
import AIArchitecture from "./components/AIArchitecture";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaCode,
  FaServer,
  FaBrain,
  FaDatabase,
  FaCloud,
  FaMicrochip,
  FaBriefcase,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDjango,
  SiMongodb,
  // SiDatabase,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiRust,
  SiCplusplus,
} from "react-icons/si";

import { motion } from "framer-motion";

import Chatbot from "./components/Chatbot";
import GamesHub from "./components/games/GamesHub";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -35,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 35,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* =========================================================
   EXPERIENCE DATA
========================================================= */

const experiences = [
  {
    company: "Areca Embedded System Pvt Ltd",
    role: "Gen AI Application Developer",
    period: "Jul 2025 — Present",
    type: "Full-time",
    current: true,

    description:
      "Building and maintaining production software across modern web applications, backend services, AI-enabled workflows, system integration, desktop applications, and deployment environments. Working across frontend, backend, databases, and application architecture.",

    technologies: [
      "React.js",
      "Node.js",
      "Fastify",
      "LLMs",
      "Generative AI",
      "RAG",
      "Prompt Engineering",
      "Semantic Search",
      "Embeddings",
      "OCR",
      "Document Intelligence",
      "AI Agents",
      "SQL Server",
      "WebSocket",
      "C++",
      "AWS",
    ],
  },

  {
    company: "Retrack Pvt Ltd",
    role: "Software Developer",
    period: "Mar 2024 — May 2025",
    type: "Full-time",
    current: false,

    description:
      "Developed and maintained scalable web applications using modern frontend and backend technologies. Worked on REST APIs, application development, testing, CI/CD workflows, integrations, and production-focused software engineering.",

    technologies: [
      "React",
      "Angular",
      "Node.js",
      "REST APIs",
      "CI/CD",
      "Testing",
    ],
  },

  {
    company: "Xyonyx Pvt Ltd",
    role: "Freelance Full-Stack Developer",
    period: "Mar 2023 — Apr 2024",
    type: "Freelance",
    current: false,

    description:
      "Delivered client-focused full-stack applications involving responsive interfaces, REST APIs, database integration, application logic, UI implementation, and performance improvements.",

    technologies: [
      "React",
      "Node.js",
      "Django",
      "MongoDB",
      "REST APIs",
    ],
  },
];

/* =========================================================
   PROJECT DATA
========================================================= */

const featuredProjects = [
  {
    number: "01",
    title: "AI Resume Shortlist System",
    category: "GENAI • NLP • FULL STACK",
    description:
      "An AI-powered recruitment platform that automates resume screening by extracting candidate information, matching profiles against job descriptions, and ranking candidates based on role-specific requirements.",
    impact:
      "Built the platform across the frontend, backend, AI/NLP processing, authentication, and recruiter workflow layers.",
    stack: [
      "Python",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "NLP",
      "JWT",
      "REST APIs",
    ],
    icon: FaBrain,
    github: null,
    featured: true,
    highlights: [
      "Resume parsing and technical skill extraction",
      "Semantic candidate-to-job matching",
      "AI-based candidate ranking",
      "Recruiter search, filtering and review dashboards",
      "Role-based access and authentication",
      "Job-specific scoring and ranking workflows",
    ],
  },

  {
    number: "02",
    title: "TCAS / KAVACH Network Monitoring System",
    category: "REAL-TIME SYSTEMS • ENTERPRISE",
    description:
      "A large-scale Network Monitoring System for Indian Railways KAVACH (TCAS) infrastructure, designed to monitor locomotive and stationary communication devices in real time.",
    impact:
      "Worked across the web platform, backend services, real-time communication, database layer, binary packet processing, reporting and system integration.",
    stack: [
      "React.js",
      "Node.js",
      "Fastify",
      "SQL Server",
      "C++",
      "WebSocket",
      "UDP",
      "Docker",
      "AWS",
    ],
    icon: FaServer,
    github: null,
    featured: true,
    highlights: [
      "Migrated legacy Qt/C++ software into a React-based web platform",
      "Real-time monitoring using UDP and WebSocket communication",
      "High-performance C++ binary packet parsing",
      "Railway telemetry and communication protocol processing",
      "Enterprise reporting and analytics modules",
      "Excel, PDF and CSV export workflows",
      "Optimized BIN file processing pipelines",
    ],
  },

  {
    number: "03",
    title: "Mood Music Recommendation System",
    category: "AI • RECOMMENDATION • FULL STACK",
    description:
      "An AI-assisted web application that analyzes emotions from uploaded images and generates personalized Spotify playlists based on the detected mood.",
    impact:
      "Combined AI-driven mood analysis with a complete authentication, recommendation, music playback and responsive frontend experience.",
    stack: [
      "Angular 17",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Spotify API",
      "OAuth 2.0",
      "REST APIs",
      "AI Integration",
    ],
    icon: FaReact,
    github: "https://github.com/ayesh03/Mood-Music-App",
    featured: true,
    highlights: [
      "Image-based mood analysis workflow",
      "Personalized Spotify playlist generation",
      "Spotify OAuth 2.0 authentication",
      "Spotify Web Playback SDK integration",
      "Angular 17 responsive frontend",
      "Asynchronous API and state management",
    ],
  },

  {
    number: "04",
    title: "AI Sales Email Generator",
    category: "GENERATIVE AI • APPLICATION",
    description:
      "A Generative AI application designed to transform structured user input into personalized sales communication through an LLM-powered workflow.",
    impact:
      "Demonstrates practical integration of Generative AI into an application workflow rather than treating AI as an isolated experiment.",
    stack: [
      "Next.js",
      "JavaScript",
      "OpenAI API",
      "LLM Integration",
      "REST APIs",
    ],
    icon: FaBrain,
    github: "https://github.com/ayesh03/Sales-Email-Generator",
    featured: false,
    highlights: [
      "LLM-powered content generation",
      "Structured prompt-based workflow",
      "Modern web application interface",
      "API-driven AI integration",
    ],
  },
];

/* =========================================================
   SKILL DATA
========================================================= */

/* =========================================================
   SKILL DATA
========================================================= */

const skillGroups = [
  {
    title: "Full-Stack Development",
    icon: FaCode,
    description:
      "Building production-ready web applications across modern frontend frameworks, application architecture, state management, APIs, authentication, and end-to-end product development.",
    featured: true,
    skills: [
      ["React.js", FaReact],
      ["Next.js", SiNextdotjs],
      ["Angular", SiAngular],
      ["JavaScript", SiJavascript],
      ["TypeScript", SiTypescript],
      ["Redux Toolkit", FaCode],
      ["React Query", FaCode],
      ["Tailwind CSS", SiTailwindcss],
      ["Bootstrap", FaCode],
      ["HTML5", FaCode],
      ["CSS3", FaCode],
    ],
  },

  {
    title: "GenAI & AI Engineering — 2+ Years",
    icon: FaBrain,
    description:
      "Developing practical Generative AI applications and intelligent workflows using LLMs, RAG, AI agents, semantic search, embeddings, document intelligence, and modern AI APIs.",
    featured: true,
    skills: [
      ["LLMs", FaBrain],
      ["Generative AI", FaBrain],
      ["RAG", FaBrain],
      ["LangChain", FaBrain],
      ["LangGraph", FaBrain],
      ["LlamaIndex", FaBrain],
      ["AI Agents", FaBrain],
      ["Prompt Engineering", FaBrain],
      ["MCP", FaBrain],
      ["Semantic Search", FaBrain],
      ["Vector Databases", FaDatabase],
      ["Embeddings", FaBrain],
      ["OCR", FaBrain],
      ["Document Intelligence", FaBrain],
      ["OpenAI API", FaBrain],
      ["Gemini API", FaBrain],
    ],
  },

  {
    title: "Backend & API Engineering",
    icon: FaServer,
    description:
      "Designing backend services, REST APIs, business logic, authentication, real-time communication, workflow orchestration, and production application architecture.",
    featured: true,
    skills: [
      ["Node.js", FaNodeJs],
      ["Express.js", FaServer],
      ["Fastify", FaServer],
      ["Python", SiPython],
      ["Django", SiDjango],
      ["REST APIs", FaCode],
      ["WebSocket", FaServer],
      ["Socket.IO", FaServer],
      ["JWT Authentication", FaServer],
    ],
  },

  {
    title: "Data, Databases & ML",
    icon: FaDatabase,
    description:
      "Working with relational and NoSQL databases alongside data processing, NLP workflows, intelligent document processing, and AI pipeline development.",
    featured: false,
    skills: [
      ["PostgreSQL", FaDatabase],
      ["MongoDB", SiMongodb],
      ["SQL Server", FaDatabase],
      ["MySQL", FaDatabase],
      ["Firebase", FaDatabase],
      ["Redis", FaDatabase],
      ["Data Preprocessing", FaDatabase],
      ["Feature Engineering", FaDatabase],
      ["Model Evaluation", FaBrain],
      ["NLP Applications", FaBrain],
      ["Resume Parsing", FaBrain],
      ["AI Pipeline Development", FaBrain],
    ],
  },

  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    description:
      "Deploying and supporting production applications using cloud infrastructure, containers, orchestration, CI/CD workflows, and modern engineering tooling.",
    featured: false,
    skills: [
      ["AWS", FaCloud],
      ["GCP", FaCloud],
      ["Docker", SiDocker],
      ["Kubernetes", FaCloud],
      ["CI/CD", FaCloud],
      ["Git", SiGit],
      ["GitHub", FaGithub],
      ["Linux", FaCloud],
      ["Postman", FaCode],
      ["Jira", FaCode],
    ],
  },

  {
    title: "Programming & Systems",
    icon: FaMicrochip,
    description:
      "A broad programming foundation spanning application development, systems programming, embedded engineering, and performance-sensitive software.",
    featured: false,
    skills: [
      ["Python", SiPython],
      ["JavaScript", SiJavascript],
      ["TypeScript", SiTypescript],
      ["C++", SiCplusplus],
      ["Java", FaCode],
      ["SQL", FaDatabase],
      ["C#", FaCode],
      ["C", FaCode],
      ["Rust", SiRust],
    ],
  },
];
/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    value: "2.6+",
    label: "Years Experience",
  },

  {
    value: "2+",
    label: "Years in GenAI",
  },

  {
    value: "Full Stack",
    label: "Core Engineering",
  },

  {
    value: "GenAI",
    label: "AI Specialization",
  },
];

/* =========================================================
   CAPABILITIES
========================================================= */

const capabilities = [
  {
    icon: FaCode,

    title: "Product Engineering",

    text:
      "From UI architecture to backend services, I work across the application lifecycle and build production-focused software.",
  },

  {
    icon: FaBrain,

    title: "Generative AI Engineering",

    text:
      "Building practical AI applications using LLMs, RAG, AI agents, semantic search, embeddings, document intelligence, and AI APIs.",
  },

  {
    icon: FaServer,

    title: "Backend Systems",

    text:
      "REST APIs, business logic, authentication, database integration, system communication, and application architecture.",
  },

  {
    icon: FaCloud,

    title: "Deployment & Integration",

    text:
      "Connecting frontend, backend, databases, services, and deployment environments into reliable working systems.",
  },
];

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="mb-14 max-w-3xl"
    >
      <span className="section-label mb-5">
        {eyebrow}
      </span>

      <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-slate-400 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

function TechBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300">
      {children}
    </span>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

function Navbar({ onHire }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["AI", "#ai"],
    ["Skills", "#skills"],
    ["Contact", "#contact"],
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 md:px-8"
    >
      <nav className="mx-auto max-w-6xl rounded-2xl border border-white/[0.08] bg-slate-950/70 px-4 py-3 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <a
            href="#top"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-bold text-cyan-300 ring-1 ring-cyan-400/20">
              AB
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">
                Ayesh Ranjan Bhuyan
              </p>

              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Software Engineer
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                className="transition hover:text-white"
                href={href}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={onHire}
            className="hidden group items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-400/15 md:inline-flex"
          >
            Let&apos;s Connect

            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300 md:hidden"
          >
            <span className="relative flex h-5 w-5 flex-col items-center justify-center gap-1.5">
              <span
                className={`h-px w-5 bg-current transition-all duration-300 ${
                  menuOpen
                    ? "translate-y-[4px] rotate-45"
                    : ""
                }`}
              />

              <span
                className={`h-px w-5 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-px w-5 bg-current transition-all duration-300 ${
                  menuOpen
                    ? "-translate-y-[4px] -rotate-45"
                    : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-3 border-t border-white/[0.06] pt-3">
            <div className="flex flex-col gap-1">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
                >
                  {label}
                </a>
              ))}

              <button
                onClick={() => {
                  setMenuOpen(false);
                  onHire();
                }}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
              >
                Let&apos;s Connect
                <FaArrowRight className="text-xs" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero({ onHire }) {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-12 pt-32 md:px-8 md:pt-28"
    >
      <div className="pointer-events-none absolute left-[8%] top-[20%] h-72 w-72 rounded-full bg-cyan-400/[0.08] blur-[110px]" />

      <div className="pointer-events-none absolute right-[5%] top-[35%] h-80 w-80 rounded-full bg-violet-500/[0.08] blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6"
          >
            <span className="section-label">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

              Available for opportunities
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mb-4 font-mono text-sm tracking-wide text-cyan-300"
          >
            Hello, I&apos;m Ayesh.
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[78px]"
          >
            Software Engineer

            <span className="block gradient-text">
              building beyond the UI.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
          >
            I&apos;m a Full-Stack Software Engineer with 2.6+ years of
            professional experience building modern web applications,
            backend systems, and Generative AI applications across the stack.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Explore my work

              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/aresume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <FaDownload className="text-xs" />

              Resume
            </a>

            <button
              onClick={onHire}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 px-6 py-3 font-semibold text-cyan-200 transition hover:bg-cyan-400/[0.08]"
            >
              Let&apos;s talk
            </button>
          </motion.div>

          <motion.div
  variants={fadeUp}
  className="mt-10 mb-12 flex items-center gap-4"
>
            <a
              href="https://github.com/ayesh03"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-xl border border-white/10 bg-white/[0.025] p-3 text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ayesh03"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl border border-white/10 bg-white/[0.025] p-3 text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/pearlvayesh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="rounded-xl border border-white/10 bg-white/[0.025] p-3 text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-300"
            >
              <FaTwitter />
            </a>

            <a
              href="mailto:ayeshbhuyan180@gmail.com"
              aria-label="Email"
              className="rounded-xl border border-white/10 bg-white/[0.025] p-3 text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-300"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-cyan-400/[0.06] blur-3xl" />

            <div className="relative flex items-end justify-center">
              {/* Soft glow behind the person */}
              <div className="pointer-events-none absolute inset-0 rounded-full bg-cyan-400/[0.07] blur-[100px]" />

              <Image
                src="/man1.png"
                alt="Ayesh Ranjan Bhuyan"
                width={620}
                height={620}
                priority
                className="relative z-10 w-[250px] object-contain sm:w-[380px] md:w-[450px] lg:w-[500px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   STATS
========================================================= */

function Stats() {
  return (
    <section className="px-5 md:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`p-6 md:p-8 ${
              index !== stats.length - 1
                ? "border-b border-white/[0.07] md:border-b-0 md:border-r"
                : ""
            }`}
          >
            <p className="text-2xl font-bold text-white md:text-3xl">
              {stat.value}
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   ABOUT
========================================================= */

function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-5 py-12 md:py-12 md:px-8 "
    >
      <SectionHeading
        eyebrow="01 / Engineering Profile"
        title="I build across the stack."
        description="My strength is not being limited to one layer of an application. I enjoy understanding how the pieces connect — interface, API, database, system integration, deployment, and increasingly AI."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        variants={stagger}
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {capabilities.map((item) => {
          const Icon = item.icon || FaCode;

          return (
            <motion.div
              variants={fadeUp}
              key={item.title}
              className="premium-card group p-7"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/10 transition group-hover:bg-cyan-400/15">
                <Icon />
              </div>

              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {item.text}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

/* =========================================================
   EXPERIENCE
========================================================= */

function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl px-5 py-12 md:py-12 md:px-8"
    >
      <SectionHeading
        eyebrow="02 / EXPERIENCE"
        title="Engineering experience that goes beyond the UI."
        description="2.6+ years of hands-on software development across frontend engineering, backend systems, databases, system integration, and AI-enabled applications."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[17px] top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent md:block" />

        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -35 : 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="relative md:pl-14"
            >
              {/* Timeline node */}
              <div className="absolute left-[11px] top-8 hidden md:flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-cyan-300 bg-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.65)]">
                <div className="h-1 w-1 rounded-full bg-cyan-300" />
              </div>

              {/* Experience card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl md:p-8"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.045] blur-[90px] transition duration-500 group-hover:bg-cyan-400/[0.09]" />

                {/* Top accent */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-cyan-300 to-violet-400 transition-all duration-500 group-hover:w-full" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        {experience.current && (
                          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-300">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                            Current Role
                          </span>
                        )}

                        <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                          {experience.type}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-base font-medium text-cyan-300">
                        {experience.company}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 text-sm text-slate-500">
                      <FaBriefcase className="text-xs text-cyan-400/70" />
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-7 h-px bg-white/[0.06]" />

                  {/* Description */}
                  <p className="max-w-4xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
                    {experience.description}
                  </p>

                  {/* Engineering focus */}
                  <div className="mt-7">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                      Technology & Engineering
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ y: -2 }}
                          className="inline-flex items-center rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/20 hover:bg-cyan-400/[0.04] hover:text-cyan-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Role number */}
                  <div className="pointer-events-none absolute bottom-0 right-0 hidden select-none font-mono text-7xl font-bold text-white/[0.025] md:block">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Experience summary */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mt-12 rounded-3xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.04] via-white/[0.02] to-violet-400/[0.04] p-6 md:p-8"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
              Engineering trajectory
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white md:text-2xl">
              From application development to full-stack & AI engineering.
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Experience across product development, APIs, databases,
              system integration, deployment and AI-enabled workflows.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 text-center">
              <p className="text-2xl font-bold text-white">2.6+</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-600">
                Years
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 text-center">
              <p className="text-2xl font-bold text-cyan-300">3</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-600">
                Roles
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   PROJECTS
========================================================= */

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-12"
    >
      <SectionHeading
        eyebrow="03 / SELECTED WORK"
        title="Systems I have built."
        description="A selection of AI, enterprise and full-stack systems spanning intelligent applications, real-time monitoring, backend engineering and modern web development."
      />

      <div className="space-y-8">
        {featuredProjects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl"
            >
              {/* Background glow */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/[0.035] blur-[110px] transition-all duration-700 group-hover:bg-cyan-400/[0.08]" />

              <div className="pointer-events-none absolute -bottom-40 -left-40 h-72 w-72 rounded-full bg-violet-500/[0.025] blur-[100px] transition-all duration-700 group-hover:bg-violet-500/[0.06]" />

              {/* Top gradient line */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative p-6 md:p-9 lg:p-10">
                {/* Header */}
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-5">
                    {/* Number */}
                    <div className="hidden shrink-0 font-mono text-sm font-medium text-cyan-400/70 sm:block">
                      {project.number}
                    </div>

                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.035] text-cyan-300 transition-all duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.07] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.08)]">
                      <Icon className="text-lg" />
                    </div>

                    <div>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                        {project.category}
                      </p>

                      <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* GitHub */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 text-xs font-semibold text-slate-400 transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
                    >
                      View Repository
                      <FaExternalLinkAlt className="text-[9px]" />
                    </a>
                  )}
                </div>

                {/* Description */}
                <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.85fr]">
                  <div>
                    <p className="max-w-3xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
                      {project.description}
                    </p>

                    <div className="mt-6 rounded-2xl border border-white/[0.06] bg-black/10 p-5">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-600">
                        Engineering Scope
                      </p>

                      <p className="text-sm leading-7 text-slate-400">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-600">
                      Key Contributions
                    </p>

                    <div className="space-y-3">
                      {project.highlights.map((highlight) => (
                        <motion.div
                          key={highlight}
                          initial={{ opacity: 0, x: 8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.35 }}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />

                          <p className="text-sm leading-6 text-slate-400">
                            {highlight}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technology stack */}
                <div className="mt-8 border-t border-white/[0.06] pt-6">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-600">
                    Technology Stack
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <TechBadge key={tech}>{tech}</TechBadge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* GitHub CTA */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
        }}
        className="mt-10 flex justify-center"
      >
        <a
          href="https://github.com/ayesh03"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.025] px-6 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.04] hover:text-cyan-300"
        >
          Explore more projects
          <FaGithub className="transition-transform duration-300 group-hover:rotate-6" />
          <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
}
/* =========================================================
   AI SECTION
========================================================= */


function AISection() {
  const aiCapabilities = [
    {
      title: "LLM Application Development",
      description:
        "Building production-oriented applications powered by Large Language Models, integrating intelligent generation and reasoning into real software workflows.",
      tag: "LLMs",
    },

    {
      title: "Retrieval-Augmented Generation",
      description:
        "Designing AI workflows around retrieval, semantic search, embeddings, and contextual information to improve the usefulness of LLM-powered applications.",
      tag: "RAG",
    },

    {
      title: "AI Agents & Orchestration",
      description:
        "Working with AI agent workflows and orchestration frameworks to connect models, tools, application logic, and external systems.",
      tag: "AI AGENTS",
    },

    {
      title: "Document Intelligence",
      description:
        "Building intelligent document-processing workflows involving OCR, document validation, structured extraction, resume parsing, and automated review processes.",
      tag: "DOCUMENT AI",
    },

    {
      title: "Semantic Search & Embeddings",
      description:
        "Using embeddings, semantic search, and vector databases to build intelligent matching, retrieval, and information-discovery workflows.",
      tag: "SEARCH",
    },

    {
      title: "Prompt Engineering",
      description:
        "Designing structured prompts and AI workflows that connect user requirements with reliable application-level outputs.",
      tag: "PROMPTING",
    },
  ];

  return (
    <section
      id="ai"
      className="mx-auto max-w-6xl px-5 py-12 md:py-12 md:px-8"
    >
      <SectionHeading
        eyebrow="04 / GENAI ENGINEERING"
        title="2+ years building with AI."
        description="My AI experience spans Generative AI applications, LLMs, RAG, AI agents, semantic search, embeddings, document intelligence, NLP, and AI-powered enterprise workflows."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        variants={stagger}
        className="grid grid-cols-1 gap-5 lg:grid-cols-[1.05fr_0.95fr]"
      >
        {/* LEFT — AI PROFILE */}
        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden rounded-[28px] border border-violet-400/15 bg-gradient-to-br from-violet-500/[0.09] via-slate-950/70 to-cyan-400/[0.06] p-7 md:p-9"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/[0.09] blur-[100px]" />

          <div className="relative">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/[0.08] text-violet-300">
                <FaBrain className="text-lg" />
              </div>

              <span className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-300">
                2+ Years
              </span>
            </div>

            <h3 className="mt-8 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Generative AI
              <span className="block gradient-text">
                Application Developer.
              </span>
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
              I build AI-powered applications by combining LLMs and modern
              AI frameworks with frontend interfaces, backend services,
              databases, APIs, and real enterprise workflows.
            </p>

            {/* AI FLOW */}
            <div className="mt-8">
  <AIArchitecture />
</div>

            {/* TECHNOLOGIES */}
            <div className="mt-7 flex flex-wrap gap-2">
              <TechBadge>LLMs</TechBadge>
              <TechBadge>Generative AI</TechBadge>
              <TechBadge>RAG</TechBadge>
              <TechBadge>LangChain</TechBadge>
              <TechBadge>LangGraph</TechBadge>
              <TechBadge>LlamaIndex</TechBadge>
              <TechBadge>AI Agents</TechBadge>
              <TechBadge>Prompt Engineering</TechBadge>
              <TechBadge>Semantic Search</TechBadge>
              <TechBadge>Embeddings</TechBadge>
              <TechBadge>Vector Databases</TechBadge>
              <TechBadge>OCR</TechBadge>
              <TechBadge>OpenAI API</TechBadge>
              <TechBadge>Gemini API</TechBadge>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — CAPABILITIES */}
        <div className="grid gap-4">
          {aiCapabilities.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:border-cyan-400/15 hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-400/70">
                    0{index + 1}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>

                <span className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-[9px] font-semibold tracking-[0.12em] text-slate-500 transition group-hover:border-cyan-400/15 group-hover:text-cyan-300">
                  {item.tag}
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* AI PROJECT STRIP */}
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
        }}
        className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
          <p className="text-[10px] uppercase tracking-[0.16em] text-slate-600">
            AI Project
          </p>

          <p className="mt-2 font-semibold text-white">
            AI Resume Shortlist
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            NLP-driven resume parsing, skill extraction, semantic matching,
            and candidate ranking.
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
          <p className="text-[10px] uppercase tracking-[0.16em] text-slate-600">
            AI Project
          </p>

          <p className="mt-2 font-semibold text-white">
            Mood Music Recommendation
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Emotion analysis connected to personalized music recommendation
            and playback.
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
          <p className="text-[10px] uppercase tracking-[0.16em] text-slate-600">
            GenAI Project
          </p>

          <p className="mt-2 font-semibold text-white">
            AI Sales Email Generator
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            LLM-powered personalized sales communication generation.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
/* =========================================================
   SKILLS
========================================================= */

function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-12"
    >
      <SectionHeading
        eyebrow="05 / TECHNOLOGY"
        title="A stack built for modern software engineering."
        description="My core engineering focus combines full-stack development with 2+ years of Generative AI experience, supported by backend engineering, databases, cloud infrastructure, and systems programming."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        variants={stagger}
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {skillGroups.map((group, index) => {
          const Icon = group.icon || FaCode;

          return (
            <motion.div
              variants={fadeUp}
              key={group.title}
              className={`group relative overflow-hidden rounded-3xl border ${group.featured
                  ? "border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.045] via-white/[0.025] to-violet-400/[0.025]"
                  : "border-white/[0.08] bg-white/[0.025]"
                } p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20`}
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/[0.035] blur-[80px] transition duration-500 group-hover:bg-cyan-400/[0.07]" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${group.featured
                          ? "bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/10"
                          : "bg-white/[0.04] text-slate-400 ring-1 ring-white/[0.08]"
                        }`}
                    >
                      <Icon />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {group.title}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <span className="hidden font-mono text-xs text-slate-700 sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Skills */}
                <div className="relative mt-7 flex flex-wrap gap-2">
                  {group.skills.map(([name, SkillIcon]) => {
                    const SafeSkillIcon = SkillIcon || FaCode;

                    return (
                      <motion.span
                        key={name}
                        whileHover={{
                          y: -2,
                        }}
                        className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-all duration-200 ${group.featured
                            ? "border-cyan-400/10 bg-cyan-400/[0.035] text-slate-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.07] hover:text-white"
                            : "border-white/[0.08] bg-white/[0.025] text-slate-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04] hover:text-white"
                          }`}
                      >
                        <SafeSkillIcon className="text-cyan-300" />
                        {name}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Primary stack summary */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
        }}
        className="mt-8 rounded-3xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.04] via-white/[0.02] to-violet-400/[0.04] p-6 md:p-8"
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
              Primary Engineering Stack
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              React · Angular · Node.js · Python · SQL · AI
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Building production-ready full-stack applications and Generative AI
              systems using modern frontend frameworks, backend services, LLM
              workflows, retrieval, intelligent document processing, and cloud
              infrastructure.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-xs font-medium text-emerald-300">
  Full-Stack + GenAI
</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   EDUCATION
========================================================= */

function Education() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-12">
      <SectionHeading
        eyebrow="06 / Foundation"
        title="Where the journey started."
        description="A computer science foundation followed by hands-on full-stack and systems-oriented development."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        variants={stagger}
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        <motion.div
          variants={fadeUp}
          className="premium-card p-7"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
            <FaGraduationCap />
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.16em] text-slate-500">
            2019 — 2023
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            B.Tech — Computer Science &amp; Engineering
          </h3>

          <p className="mt-2 text-cyan-300">
            Biju Pattnaik university of Technology          </p>

          <p className="mt-5 leading-7 text-slate-400">
            Built the foundation in programming, software engineering,
            computer science concepts, and application development.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="premium-card p-7"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
            <FaCode />
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.16em] text-slate-500">
            Specialized Training
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            Full Stack Development
          </h3>

          <p className="mt-2 text-cyan-300">
            Scalar Academy
          </p>

          <p className="mt-5 leading-7 text-slate-400">
            Completed a full-stack development program covering frontend
            frameworks, backend services, databases, and deployment.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   INTERACTIVE LAB
========================================================= */

function InteractiveLab() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-12">
      <SectionHeading
        eyebrow="07 / Interactive Lab"
        title="I like making engineering interactive."
        description="Explore a collection of small technical experiments and programming games built into the portfolio."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        variants={fadeUp}
        className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-10"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-[90px]" />

        <div className="relative mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
              Developer playground
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              Coding games &amp; technical challenges
            </h3>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500">
            Memory games, debugging challenges, output prediction, binary
            conversion, and JavaScript coding challenges.
          </p>
        </div>

        <GamesHub />
      </motion.div>
    </section>
  );
}

/* =========================================================
   CONTACT
========================================================= */

function Contact({ onHire }) {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-12"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        variants={fadeUp}
        className="relative overflow-hidden rounded-[32px] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.08] via-slate-950/70 to-violet-500/[0.08] p-8 text-center md:p-14"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[100px]" />

        <div className="relative">
          <span className="section-label">
            08 / Contact
          </span>

          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Have a problem worth{" "}
            <span className="gradient-text">
              building?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            I&apos;m open to opportunities where I can contribute across
            frontend, backend, AI-enabled applications, system integration,
            and software engineering.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={onHire}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Start a conversation

              <FaArrowRight className="text-xs" />
            </button>

            <a
              href="mailto:ayeshbhuyan180@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-white transition hover:border-white/20"
            >
              <FaEnvelope />

              Email me
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <a
              href="https://github.com/ayesh03"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ayesh03"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:text-white"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/pearlvayesh"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:text-white"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   HIRE MODAL
========================================================= */

function HireModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-md"
      onMouseDown={onClose}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.94,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        onMouseDown={(event) =>
          event.stopPropagation()
        }
        className="w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-7 shadow-2xl md:p-9"
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <span className="section-label">
              Let&apos;s connect
            </span>

            <h2 className="mt-5 text-2xl font-bold text-white md:text-3xl">
              Let&apos;s build something useful.
            </h2>
          </div>

          <button
            onClick={onClose}
            className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-400 transition hover:text-white"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <p className="mt-5 leading-7 text-slate-400">
          Looking for a developer who can move between frontend, backend,
          APIs, databases, system integration, and AI-enabled workflows?
          Let&apos;s talk.
        </p>

        <div className="mt-7 space-y-3">
          <a
            href="mailto:ayeshbhuyan180@gmail.com"
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-cyan-400/30"
          >
            <span className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-300" />

              <span className="text-sm text-slate-300">
                ayeshbhuyan180@gmail.com
              </span>
            </span>

            <FaArrowRight className="text-xs text-slate-600" />
          </a>

          <a
            href="https://www.linkedin.com/in/ayesh03"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-cyan-400/30"
          >
            <span className="flex items-center gap-3">
              <FaLinkedin className="text-cyan-300" />

              <span className="text-sm text-slate-300">
                LinkedIn
              </span>
            </span>

            <FaExternalLinkAlt className="text-xs text-slate-600" />
          </a>

          <a
            href="/aresume.pdf"
            download
            className="flex items-center justify-between rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-4 transition hover:bg-cyan-400/[0.1]"
          >
            <span className="flex items-center gap-3">
              <FaDownload className="text-cyan-300" />

              <span className="text-sm font-semibold text-cyan-200">
                Download Resume
              </span>
            </span>

            <FaArrowRight className="text-xs text-cyan-400" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-xs text-slate-600 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Ayesh Ranjan Bhuyan.
        </p>

        <p className="font-mono">
          Built with Next.js · React · curiosity
        </p>
      </div>
    </footer>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function Home() {
  const [showHireModal, setShowHireModal] =
    useState(false);

  return (
  <main className="relative min-h-screen overflow-x-hidden bg-transparent text-white">
    <AIBackground />

    <div className="relative z-10">
      <Navbar
        onHire={() => setShowHireModal(true)}
      />

      <Hero
        onHire={() => setShowHireModal(true)}
      />

      <Stats />

      <About />

      <Experience />

      <Projects />

      <AISection />

      <Skills />

      <Education />

      <InteractiveLab />

      <Contact
        onHire={() => setShowHireModal(true)}
      />

      <Footer />

      <Chatbot />

      {showHireModal && (
        <HireModal
          onClose={() => setShowHireModal(false)}
        />
      )}
      </div>
    </main>
  );
}