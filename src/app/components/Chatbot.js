"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaBrain,
  FaBriefcase,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaProjectDiagram,
  FaRedo,
  FaRobot,
  FaTimes,
} from "react-icons/fa";

import "./Chatbot.css";

const INITIAL_MESSAGE = {
  id: "welcome",
  from: "bot",
  type: "text",
  text: "Hey! I'm Ayesh AI. I can help you explore Ayesh's experience, projects, GenAI work, skills, education, resume, and contact details.",
  time: getTime(),
};

const quickActions = [
  {
    label: "Experience",
    value: "Tell me about Ayesh's experience",
    icon: FaBriefcase,
  },
  {
    label: "GenAI",
    value: "Tell me about his GenAI experience",
    icon: FaBrain,
  },
  {
    label: "Projects",
    value: "Show me his projects",
    icon: FaProjectDiagram,
  },
  {
    label: "Tech Stack",
    value: "What technologies does he use?",
    icon: FaCode,
  },
];

function getTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function createMessage(from, data) {
  return {
    id: `${Date.now()}-${Math.random()}`,
    from,
    time: getTime(),
    ...data,
  };
}

function getBotReply(text) {
  const query = text.toLowerCase().trim();

  /* =========================================================
     GREETINGS
  ========================================================= */

  if (
    /^(hi|hello|hey|hey there|hii|hiii|good morning|good evening)\b/.test(
      query
    )
  ) {
    return {
      type: "text",
      text: "Hey! 👋 I'm Ayesh AI. What would you like to know about Ayesh?",
      suggestions: [
        "Tell me about his experience",
        "What GenAI work has he done?",
        "Show me his projects",
      ],
    };
  }

  /* =========================================================
     EXPERIENCE
  ========================================================= */

  if (
    query.includes("experience") ||
    query.includes("work history") ||
    query.includes("career") ||
    query.includes("worked")
  ) {
    return {
      type: "text",
      text:
        "Ayesh has 2.6+ years of professional software development experience.\n\n" +
        "• Areca Embedded System Pvt Ltd — Gen AI Application Developer\n" +
        "• Retrack Pvt Ltd — Software Developer\n" +
        "• Xyonyx Pvt Ltd — Freelance Full-Stack Developer\n\n" +
        "His work spans frontend engineering, backend systems, databases, system integration, real-time communication, and Generative AI applications.",
      suggestions: [
        "Tell me about his current role",
        "What is his GenAI experience?",
        "What backend technologies does he use?",
      ],
    };
  }

  /* =========================================================
     CURRENT ROLE
  ========================================================= */

  if (
    query.includes("current role") ||
    query.includes("current job") ||
    query.includes("current company") ||
    query.includes("areca")
  ) {
    return {
      type: "text",
      text:
        "Ayesh is currently working as a Gen AI Application Developer at Areca Embedded System Pvt Ltd.\n\n" +
        "His work includes modern web applications, backend services, AI-enabled workflows, system integration, databases, desktop applications, and deployment environments.\n\n" +
        "His current technology exposure includes React.js, Node.js, Fastify, LLMs, RAG, AI agents, semantic search, embeddings, OCR, document intelligence, SQL Server, WebSocket, C++, and AWS.",
      suggestions: [
        "Tell me about his AI work",
        "What projects has he built?",
        "What is his tech stack?",
      ],
    };
  }

  /* =========================================================
     GENAI
  ========================================================= */

  if (
    query.includes("genai") ||
    query.includes("generative ai") ||
    query.includes("artificial intelligence") ||
    query.includes("ai experience") ||
    query.includes("llm") ||
    query.includes("rag") ||
    query.includes("agent")
  ) {
    return {
      type: "text",
      text:
        "AI is one of Ayesh's primary engineering areas, with 2+ years of GenAI experience.\n\n" +
        "His work includes:\n" +
        "• LLM application development\n" +
        "• Retrieval-Augmented Generation (RAG)\n" +
        "• AI agents\n" +
        "• LangChain\n" +
        "• LangGraph\n" +
        "• LlamaIndex\n" +
        "• Prompt engineering\n" +
        "• Semantic search\n" +
        "• Embeddings\n" +
        "• Vector databases\n" +
        "• OCR and document intelligence\n" +
        "• OpenAI and Gemini APIs\n\n" +
        "The focus is on integrating AI into complete applications rather than treating AI as an isolated component.",
      suggestions: [
        "Show me his AI projects",
        "Explain his RAG experience",
        "What is his backend stack?",
      ],
    };
  }

  /* =========================================================
     PROJECTS
  ========================================================= */

  if (
    query.includes("project") ||
    query.includes("projects") ||
    query.includes("built") ||
    query.includes("portfolio projects")
  ) {
    return {
      type: "options",
      text: "Here are some of the main projects. What would you like to explore?",
      options: [
        {
          label: "AI Resume Shortlist",
          value: "Tell me about the AI Resume Shortlist project",
        },
        {
          label: "KAVACH / TCAS",
          value: "Tell me about the KAVACH project",
        },
        {
          label: "Mood Music AI",
          value: "Tell me about the Mood Music project",
        },
        {
          label: "AI Sales Email",
          value: "Tell me about the AI Sales Email Generator",
        },
      ],
    };
  }

  /* =========================================================
     AI RESUME PROJECT
  ========================================================= */

  if (
    query.includes("resume shortlist") ||
    query.includes("resume screening") ||
    query.includes("candidate matching")
  ) {
    return {
      type: "text",
      text:
        "AI Resume Shortlist System is an AI-powered recruitment platform.\n\n" +
        "It automates resume screening by extracting candidate information, matching profiles against job descriptions, and ranking candidates according to role-specific requirements.\n\n" +
        "The system covers frontend, backend, AI/NLP processing, authentication, recruiter workflows, semantic matching, and candidate ranking.",
      suggestions: [
        "What AI technologies were used?",
        "Show me another AI project",
        "Tell me about the KAVACH system",
      ],
    };
  }

  /* =========================================================
     KAVACH PROJECT
  ========================================================= */

  if (
    query.includes("kavach") ||
    query.includes("tcas") ||
    query.includes("network monitoring")
  ) {
    return {
      type: "text",
      text:
        "The TCAS / KAVACH Network Monitoring System is a large-scale enterprise monitoring platform for railway infrastructure.\n\n" +
        "Ayesh worked across the web platform, backend services, real-time communication, database layer, binary packet processing, reporting, and system integration.\n\n" +
        "Technology involved includes React.js, Node.js, Fastify, SQL Server, C++, WebSocket, UDP, Docker, and AWS.",
      suggestions: [
        "What was his role in the system?",
        "Tell me about his real-time systems experience",
        "Show me his other projects",
      ],
    };
  }

  /* =========================================================
     MOOD MUSIC
  ========================================================= */

  if (
    query.includes("mood music") ||
    query.includes("spotify") ||
    query.includes("music recommendation")
  ) {
    return {
      type: "link",
      text:
        "Mood Music Recommendation System uses AI-assisted emotion analysis to generate personalized Spotify playlists.",
      links: [
        {
          label: "View Mood Music on GitHub",
          url: "https://github.com/ayesh03/Mood-Music-App",
        },
      ],
      suggestions: [
        "Tell me about another AI project",
        "What frontend technologies does he use?",
      ],
    };
  }

  /* =========================================================
     SALES EMAIL
  ========================================================= */

  if (
    query.includes("sales email") ||
    query.includes("email generator")
  ) {
    return {
      type: "link",
      text:
        "The AI Sales Email Generator is a Generative AI application that transforms structured user input into personalized sales communication using an LLM-powered workflow.",
      links: [
        {
          label: "View Sales Email Generator",
          url: "https://github.com/ayesh03/Sales-Email-Generator",
        },
      ],
      suggestions: [
        "What other AI projects does he have?",
        "Tell me about his GenAI experience",
      ],
    };
  }

  /* =========================================================
     FRONTEND
  ========================================================= */

  if (
    query.includes("frontend") ||
    query.includes("front end") ||
    query.includes("react") ||
    query.includes("angular")
  ) {
    return {
      type: "text",
      text:
        "Ayesh's frontend stack includes:\n\n" +
        "• React.js\n" +
        "• Next.js\n" +
        "• Angular\n" +
        "• JavaScript\n" +
        "• TypeScript\n" +
        "• Redux Toolkit\n" +
        "• React Query\n" +
        "• Tailwind CSS\n" +
        "• Bootstrap\n" +
        "• HTML5\n" +
        "• CSS3",
      suggestions: [
        "What backend technologies does he use?",
        "Show me his React projects",
        "What is his complete stack?",
      ],
    };
  }

  /* =========================================================
     BACKEND
  ========================================================= */

  if (
    query.includes("backend") ||
    query.includes("back end") ||
    query.includes("api")
  ) {
    return {
      type: "text",
      text:
        "Ayesh's backend and API experience includes:\n\n" +
        "• Node.js\n" +
        "• Express.js\n" +
        "• Fastify\n" +
        "• Python\n" +
        "• Django\n" +
        "• REST APIs\n" +
        "• WebSocket\n" +
        "• Socket.IO\n" +
        "• JWT authentication\n\n" +
        "He works across business logic, authentication, APIs, real-time communication, database integration, and application architecture.",
      suggestions: [
        "What databases does he use?",
        "Tell me about his real-time systems experience",
        "What is his complete stack?",
      ],
    };
  }

  /* =========================================================
     DATABASE
  ========================================================= */

  if (
    query.includes("database") ||
    query.includes("databases") ||
    query.includes("sql") ||
    query.includes("mongodb")
  ) {
    return {
      type: "text",
      text:
        "His database experience includes:\n\n" +
        "• PostgreSQL\n" +
        "• MongoDB\n" +
        "• SQL Server\n" +
        "• MySQL\n" +
        "• Firebase\n" +
        "• Redis\n\n" +
        "He also works with data preprocessing, NLP workflows, document processing, and AI pipeline development.",
      suggestions: [
        "Tell me about his AI experience",
        "What backend technologies does he use?",
      ],
    };
  }

  /* =========================================================
     SKILLS
  ========================================================= */

  if (
    query.includes("skills") ||
    query.includes("technology") ||
    query.includes("tech stack") ||
    query.includes("technologies")
  ) {
    return {
      type: "text",
      text:
        "Ayesh's core engineering stack combines Full-Stack Development and GenAI.\n\n" +
        "Frontend: React.js, Next.js, Angular, JavaScript, TypeScript\n\n" +
        "Backend: Node.js, Express.js, Fastify, Python, Django\n\n" +
        "AI: LLMs, RAG, LangChain, LangGraph, LlamaIndex, AI Agents, Semantic Search, Embeddings, OCR\n\n" +
        "Databases: PostgreSQL, MongoDB, SQL Server, MySQL, Firebase, Redis\n\n" +
        "Cloud & DevOps: AWS, GCP, Docker, Kubernetes, CI/CD, Git, Linux",
      suggestions: [
        "Tell me about his GenAI experience",
        "Tell me about his backend experience",
        "Show me his projects",
      ],
    };
  }

  /* =========================================================
     EDUCATION
  ========================================================= */

  if (
    query.includes("education") ||
    query.includes("college") ||
    query.includes("degree") ||
    query.includes("btech") ||
    query.includes("b.tech")
  ) {
    return {
      type: "text",
      text:
        "Ayesh has a B.Tech in Computer Science & Engineering from Biju Pattnaik University of Technology, Odisha.\n\n" +
        "He also completed specialized training in Full Stack Development from Scalar Academy.",
      suggestions: [
        "Tell me about his experience",
        "What technologies does he use?",
        "Show me his resume",
      ],
    };
  }

  /* =========================================================
     RESUME
  ========================================================= */

  if (
    query.includes("resume") ||
    query.includes("cv") ||
    query.includes("download resume")
  ) {
    return {
      type: "link",
      text: "Here is Ayesh's latest resume:",
      links: [
        {
          label: "Download Resume",
          url: "/aresume.pdf",
        },
      ],
      suggestions: [
        "Tell me about his experience",
        "What is his GenAI experience?",
      ],
    };
  }

  /* =========================================================
     GITHUB
  ========================================================= */

  if (query.includes("github")) {
    return {
      type: "link",
      text: "You can explore Ayesh's code and projects here:",
      links: [
        {
          label: "GitHub Profile",
          url: "https://github.com/ayesh03",
        },
      ],
      suggestions: [
        "Show me his projects",
        "Tell me about his React projects",
      ],
    };
  }

  /* =========================================================
     LINKEDIN
  ========================================================= */

  if (query.includes("linkedin")) {
    return {
      type: "link",
      text: "You can connect with Ayesh on LinkedIn:",
      links: [
        {
          label: "LinkedIn Profile",
          url: "https://www.linkedin.com/in/ayesh03",
        },
      ],
      suggestions: [
        "Tell me about his experience",
        "Show me his projects",
      ],
    };
  }

  /* =========================================================
     CONTACT
  ========================================================= */

  if (
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("hire") ||
    query.includes("reach")
  ) {
    return {
      type: "contact",
      text: "Ayesh is open to professional opportunities and collaborations.",
      links: [
        {
          label: "Email Ayesh",
          url: "mailto:ayeshbhuyan180@gmail.com",
        },
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/ayesh03",
        },
      ],
      suggestions: [
        "Show me his resume",
        "Tell me about his experience",
      ],
    };
  }

  /* =========================================================
     OPEN TO WORK
  ========================================================= */

  if (
    query.includes("open to work") ||
    query.includes("looking for job") ||
    query.includes("job") ||
    query.includes("opportunity")
  ) {
    return {
      type: "text",
      text:
        "Yes. Ayesh is currently open to software engineering opportunities, particularly roles involving Full-Stack Development, backend engineering, and Generative AI.",
      suggestions: [
        "What technologies does he use?",
        "Show me his resume",
        "How can I contact him?",
      ],
    };
  }

  /* =========================================================
     ABOUT
  ========================================================= */

  if (
    query.includes("about him") ||
    query === "about" ||
    query.includes("who is ayesh") ||
    query.includes("who is he")
  ) {
    return {
      type: "text",
      text:
        "Ayesh Ranjan Bhuyan is a Full-Stack Software Engineer with 2.6+ years of professional experience.\n\n" +
        "His engineering focus combines modern web development, backend systems, databases, system integration, and Generative AI application development.\n\n" +
        "He particularly enjoys working across multiple layers of a system rather than being limited to a single technology.",
      suggestions: [
        "Tell me about his GenAI work",
        "Show me his projects",
        "What technologies does he use?",
      ],
    };
  }

  /* =========================================================
     THANK YOU
  ========================================================= */

  if (
    query.includes("thank you") ||
    query.includes("thanks") ||
    query === "thank"
  ) {
    return {
      type: "text",
      text: "You're welcome! 🤖 If you want to explore more, ask me about Ayesh's projects, experience, GenAI work, or resume.",
      suggestions: [
        "Show me his projects",
        "Tell me about his experience",
      ],
    };
  }

  /* =========================================================
     FALLBACK
  ========================================================= */

  return {
    type: "text",
    text:
      "I'm not completely sure what you're looking for yet. I can help with Ayesh's experience, projects, GenAI work, technology stack, education, resume, GitHub, LinkedIn, or contact details.",
    suggestions: [
      "Tell me about his experience",
      "What GenAI work has he done?",
      "Show me his projects",
      "What technologies does he use?",
    ],
  };
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [open]);

  const sendMessage = (customText = "") => {
    const finalText = (customText || input).trim();

    if (!finalText || typing) return;

    const userMessage = createMessage("user", {
      type: "text",
      text: finalText,
    });

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);

    const delay = Math.min(
      1100,
      Math.max(500, finalText.length * 12)
    );

    fetch("/api/chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
  message: finalText,
  history: messages
  .filter(
    (msg) =>
      msg.from === "user" || msg.from === "bot"
  )
  .slice(-10)
  .map((msg) => ({
    role: msg.from === "user" ? "user" : "model",
    text: msg.text,
  })),
}),
})
  .then(async (response) => {
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Chat API failed");
    }

    return data;
  })
  .then((data) => {
    setMessages((prev) => [
      ...prev,
      createMessage("bot", {
        type: "text",
        text: data.reply,
      }),
    ]);
  })
  .catch((error) => {
    console.error("Chatbot error:", error);

    setMessages((prev) => [
      ...prev,
      createMessage("bot", {
        type: "text",
        text: "Sorry, I couldn't connect to Ayesh AI right now. Please try again.",
      }),
    ]);
  })
  .finally(() => {
    setTyping(false);
  });
  };

  const clearChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setInput("");
  };

  const renderMessage = (msg) => {
    if (msg.type === "text") {
  const renderLine = (line, index) => {
    const urlRegex =
      /(https?:\/\/[^\s]+|\/aresume\.pdf)/g;

    const parts = line.split(urlRegex);

    return (
      <div key={index}>
        {parts.map((part, partIndex) => {
          if (
            part.startsWith("http://") ||
            part.startsWith("https://") ||
            part === "/aresume.pdf"
          ) {
            return (
              <a
                key={partIndex}
                href={part}
                target={
                  part.startsWith("/aresume")
                    ? "_blank"
                    : "_blank"
                }
                rel="noopener noreferrer"
                className="chat-inline-link"
              >
                {part}
              </a>
            );
          }

          return (
            <span key={partIndex}>
              {part}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="chat-text">
        {msg.text.split("\n").map(renderLine)}
      </div>

      {msg.suggestions?.length > 0 && (
        <div className="chat-suggestions">
          {msg.suggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => sendMessage(suggestion)}
              disabled={typing}
            >
              {suggestion}
              <FaArrowRight />
            </button>
          ))}
        </div>
      )}
    </>
  );
}

    if (msg.type === "options") {
      return (
        <>
          <div className="chat-text">
            {msg.text}
          </div>

          <div className="chat-options">
            {msg.options.map((option) => (
              <button
                key={option.label}
                onClick={() => sendMessage(option.value)}
                disabled={typing}
              >
                {option.label}
                <FaArrowRight />
              </button>
            ))}
          </div>
        </>
      );
    }

    if (msg.type === "link" || msg.type === "contact") {
      return (
        <>
          <div className="chat-text">
            {msg.text}
          </div>

          <div className="chat-links">
            {msg.links?.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={
                  link.url.startsWith("mailto:")
                    ? undefined
                    : "_blank"
                }
                rel={
                  link.url.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
              >
                {link.label}

                {link.url.includes("github") ? (
                  <FaGithub />
                ) : link.url.includes("linkedin") ? (
                  <FaLinkedin />
                ) : link.url.includes("mailto") ? (
                  <FaEnvelope />
                ) : (
                  <FaArrowRight />
                )}
              </a>
            ))}
          </div>

          {msg.suggestions?.length > 0 && (
            <div className="chat-suggestions">
              {msg.suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => sendMessage(suggestion)}
                  disabled={typing}
                >
                  {suggestion}
                  <FaArrowRight />
                </button>
              ))}
            </div>
          )}
        </>
      );
    }

    return null;
  };

  return (
    <div className="chatbot-container">
      {open && (
        <div className="chatbox">
          {/* =================================================
              HEADER
          ================================================= */}

          <div className="chat-header">
            <div className="chat-brand">
              <div className="chat-ai-icon">
                <FaBrain />
              </div>

              <div>
                <div className="chat-title">
                  Ayesh AI
                </div>

                <div className="chat-status">
                  <span />
                  Portfolio assistant
                </div>
              </div>
            </div>

            <div className="chat-header-actions">
              <button
                onClick={clearChat}
                aria-label="Clear conversation"
                title="Clear conversation"
              >
                <FaRedo />
              </button>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close chatbot"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* =================================================
              AI CONTEXT BAR
          ================================================= */}

          <div className="chat-context">
            <FaRobot />

            <span>
              Ask about experience, projects, GenAI or skills
            </span>
          </div>

          {/* =================================================
              MESSAGES
          ================================================= */}

          <div className="chat-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-message-row ${msg.from}`}
              >
                {msg.from === "bot" && (
                  <div className="chat-avatar">
                    <FaBrain />
                  </div>
                )}

                <div className={`chat-bubble ${msg.from}`}>
                  {renderMessage(msg)}

                  <span className="chat-time">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}

            {typing && (
              <div className="chat-message-row bot">
                <div className="chat-avatar">
                  <FaBrain />
                </div>

                <div className="chat-bubble bot typing-bubble">
                  <div className="typing-indicator">
                    <span />
                    <span />
                    <span />
                  </div>

                  <span className="typing-text">
                    Ayesh AI is thinking
                  </span>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* =================================================
              QUICK ACTIONS
          ================================================= */}

          {messages.length === 1 && !typing && (
            <div className="chat-quick-actions">
              {quickActions.map((action) => {
                const Icon = action.icon;

                return (
                  <button
                    key={action.label}
                    onClick={() => sendMessage(action.value)}
                  >
                    <Icon />
                    {action.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* =================================================
              INPUT
          ================================================= */}

          <div className="chat-input-wrapper">
            <div className="chat-input">
              <input
                ref={inputRef}
                type="text"
                value={input}
                placeholder="Ask Ayesh AI..."
                onChange={(event) =>
                  setInput(event.target.value)
                }
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" &&
                    !event.shiftKey
                  ) {
                    event.preventDefault();
                    sendMessage();
                  }
                }}
                disabled={typing}
              />

              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || typing}
                aria-label="Send message"
              >
                <FaArrowRight />
              </button>
            </div>

            <p className="chat-powered">
              AI portfolio assistant
            </p>
          </div>
        </div>
      )}

      {/* =====================================================
          FLOATING BUTTON
      ===================================================== */}

      <button
        className={`chat-toggle ${open ? "active" : ""}`}
        onClick={() => setOpen((previous) => !previous)}
        aria-label={
          open
            ? "Close Ayesh AI"
            : "Open Ayesh AI"
        }
      >
        {!open && (
          <span className="chat-toggle-pulse" />
        )}

        {open ? <FaTimes /> : <FaBrain />}

        {!open && (
          <span className="chat-toggle-label">
            Ayesh AI
          </span>
        )}
      </button>
    </div>
  );
}