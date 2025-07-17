'use client';
import { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      type: 'text',
      text: '👋 Hey there! What are you looking for?',
    },
  ]);

  const bottomRef = useRef(null); // ✅ Ref for auto-scroll

  useEffect(() => {
    // ✅ Scroll to the bottom on every new message
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = (customText) => {
    const finalText = customText || input.trim();
    if (!finalText) return;

    const userMessage = { from: 'user', type: 'text', text: finalText };
    const reply = getBotReply(finalText.toLowerCase());

    setMessages((prev) => [...prev, userMessage, { from: 'bot', ...reply }]);
    setInput('');
  };

  const getBotReply = (text) => {
    if (text.includes('certification') || text.includes('course')) {
      return {
        type: 'text',
        text: `🎓 Certifications:\n• PG Diploma in Full Stack Development\n• Pg Diploma in Embedded Systems\n• Python & Machine Learning Basics`,
      };
    }

    if (text.includes('education') || text.includes('college') || text.includes('cgpa')) {
      return {
        type: 'text',
        text: `🎓 Education:\nBachelor of Technology (B.Tech) in Computer Science in BPUT, Odisha\n• 8.1 Cgpa`,
      };
    }

    if (text.includes('job') || text.includes('open to work')) {
      return {
        type: 'text',
        text: `Yes! I'm currently open to exciting opportunities in full-stack development, preferably with React, Angular, or Django.`,
      };
    }

    if (text.includes('experience') || text.includes('work')) {
      return {
        type: 'text',
        text: `🧪 Experience:\n• Software Developer\n• Built full-stack projects\n• Integrated AI with FullStack Development\n• Worked with real-time data, APIs, and backend integrations`,
      };
    }

    if (text.includes('project')) {
      return {
        type: 'options',
        text: '🛠️ Which type of project are you interested in?',
        options: [
          { label: 'React', value: 'react' },
          { label: 'Angular', value: 'angular' },
          { label: 'Django', value: 'django' },
          { label: 'Backend', value: 'backend' },
        ],
      };
    }

    if (text.includes('about')) {
      return {
        type: 'text',
        text: `🧑‍💻 About Me:\nI'm Ayesh Ranjan Bhuyan, a passionate Full-Stack Developer with 1.5+ years of experience.\nI build responsive and performant web apps using React, Angular, Django, and Node.js.\nI love turning ideas into real-world projects that help people.`,
      };
    }

    if (text.includes('resume')) {
      return {
        type: 'link',
        text: '📄 Click below to download my resume:',
        links: [{ label: 'Download Resume', url: '/aresume.pdf' }],
      };
    }

    if (text.includes('react')) {
      return {
        type: 'link',
        text: '🧪 React Projects:',
        links: [
          { label: 'Feedback System', url: 'https://github.com/ayesh03/feedback-system' },
          { label: 'Sales Email Generator', url: 'https://github.com/ayesh03/Sales-Email-Generator' },
          { label: 'Animated Portfolio', url: 'https://github.com/ayesh03/animated-portfolio-ayesh' },
        ],
      };
    }

    if (text.includes('angular')) {
      return {
        type: 'link',
        text: '⚡ Angular Project:',
        links: [{ label: 'Mood Music App', url: 'https://github.com/ayesh03/Mood-Music-App' }],
      };
    }

    if (text.includes('django') || text.includes('python')) {
      return {
        type: 'link',
        text: '🐍 Django Project:',
        links: [
          { label: 'Twitter Clone', url: 'https://github.com/ayesh03/ayesh-tweet' },
          { label: 'Web-Hook', url: 'https://github.com/ayesh03/webhook-repo' },
          { label: 'Word List Generator', url: 'https://github.com/ayesh03/GeoWords' },
        ],
      };
    }

    if (text.includes('backend')) {
      return {
        type: 'link',
        text: '💻 Backend Projects:',
        links: [
          { label: 'Node.js App', url: 'https://github.com/ayesh03/Sales-Email-Generator' },
          { label: 'Django App', url: 'https://github.com/ayesh03/ayesh-tweet' },
          { label: 'Node.js Backend', url: 'https://github.com/ayesh03/food-app-backend' },
        ],
      };
    }

    if (text.includes('linkedin') || text.includes('github')) {
      return {
        type: 'link',
        text: '🔗 My Profiles:',
        links: [
          { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ayesh03' },
          { label: 'GitHub', url: 'https://github.com/ayesh03' },
        ],
      };
    }

    if (text.includes('contact')) {
      return {
        type: 'text',
        text: `📞 Contact Info:\nPhone: 7894152448\nEmail: ayeshbhuyan180@gmail.com`,
      };
    }

    if (text.includes('skills')) {
      return {
  type: 'text',
  text: `🧰 Skills:\n• Languages: JavaScript, Python, C++,Typescript,C#,C\n• Frameworks: React, Angular, Django, Node.js,.Net,Asp.net\n• Tools: Git, VSCode, Postman, MongoDB,Docker`
};
    }

    return {
      type: 'text',
      text: '🤖 Sorry, I didn’t understand. Try keywords like: resume, react, django, angular, linkedin, github, contact.',
    };
  };

  return (
    <div className="chatbot-container">
      {open && (
        <div className="chatbox">
          <div className="chat-header">💬 Ask Me Anything</div>
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.from}`}>
                {msg.type === 'text' ? (
                  msg.text.split('\n').map((line, j) => <div key={j}>{line}</div>)
                ) : msg.type === 'link' ? (
                  <>
                    <div>{msg.text}</div>
                    <ul className="chat-links">
                      {msg.links.map((link, index) => (
                        <li key={index}>
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            🔗 {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : msg.type === 'options' ? (
                  <>
                    <div>{msg.text}</div>
                    <div className="chat-options">
                      {msg.options.map((opt, idx) => (
                        <button key={idx} onClick={() => handleSend(opt.value)} className="chat-option">
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            ))}
            <div ref={bottomRef}></div> 
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={input}
              placeholder="Type something..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={() => handleSend()}>➤</button>
          </div>
        </div>
      )}

      <button
  className="chat-toggle"
  onClick={() => {
    if (open) {
      // When closing: reset messages
      setMessages([
        {
          from: 'bot',
          type: 'text',
          text: '👋 Hey there! What are you looking for?',
        },
      ]);
    }
    setOpen(!open);
  }}
>

        {open ? '✖' : '🤖'}
      </button>
    </div>
  );
}
