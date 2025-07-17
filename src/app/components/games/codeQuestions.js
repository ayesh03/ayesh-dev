const codeQuestions = [
  {
    id: 1,
    language: "JavaScript",
    question: `console.log([] + {});`,
    options: ['"[object Object]"', '0', 'undefined', 'NaN'],
    correct: '[object Object]'
  },
  {
    id: 2,
    language: "JavaScript",
    question: `console.log({} + []);`,
    options: ['0', '[object Object]', 'undefined', 'NaN'],
    correct: '0'
  },
  {
    id: 3,
    language: "JavaScript",
    question: `let x = (function(){ return 1 }, 2);\nconsole.log(x);`,
    options: ['1', '2', 'undefined', 'function'],
    correct: '2'
  },
  {
    id: 4,
    language: "React",
    question: `const [count, setCount] = useState(0);\nuseEffect(() => setCount(count + 1), []);\nconsole.log(count);`,
    options: ['0', '1', 'infinite loop', 'undefined'],
    correct: '0'
  },
  {
    id: 5,
    language: "React",
    question: `What happens if you call setState inside render()?`,
    options: ['Updates state', 'Throws error', 'Causes infinite loop', 'Ignores call'],
    correct: 'Causes infinite loop'
  },
  {
    id: 6,
    language: "Angular",
    question: `What will happen if two components have same selector in Angular?`,
    options: ['Works fine', 'Throws error', 'Last one wins', 'Undefined behavior'],
    correct: 'Throws error'
  },
  {
    id: 7,
    language: "Angular",
    question: `What does this expression return?\ntrue && 'Angular' && false`,
    options: ['true', 'false', "'Angular'", 'undefined'],
    correct: 'false'
  },
  {
    id: 8,
    language: "REST API",
    question: `Which status code means "No Content"?`,
    options: ['204', '304', '200', '202'],
    correct: '204'
  },
  {
    id: 9,
    language: "REST API",
    question: `Which HTTP method is safe and idempotent?`,
    options: ['GET', 'POST', 'PUT', 'DELETE'],
    correct: 'GET'
  },
  {
    id: 10,
    language: "JavaScript",
    question: `console.log(0.1 + 0.2 === 0.3);`,
    options: ['true', 'false', 'NaN', 'undefined'],
    correct: 'false'
  },
  {
    id: 11,
    language: "JavaScript",
    question: `let a = [1, 2, 3];\na[10] = 99;\nconsole.log(a.length);`,
    options: ['3', '10', '11', '99'],
    correct: '11'
  },
  {
    id: 12,
    language: "React",
    question: `What does useRef return on every render?`,
    options: ['New object', 'Same object', 'DOM element', 'undefined'],
    correct: 'Same object'
  },
  {
    id: 13,
    language: "React",
    question: `Why should you not update state inside useEffect without a condition?`,
    options: ['Performance', 'Crash risk', 'Infinite loop', 'Memory leak'],
    correct: 'Infinite loop'
  },
  {
    id: 14,
    language: "Angular",
    question: `What will be the output?\ntypeof NaN`,
    options: ['number', 'NaN', 'undefined', 'object'],
    correct: 'number'
  },
  {
    id: 15,
    language: "Angular",
    question: `How do Angular pipes behave in terms of purity?`,
    options: ['All are pure', 'All are impure', 'Pure by default', 'Impure by default'],
    correct: 'Pure by default'
  },
  {
    id: 16,
    language: "REST API",
    question: `Which REST status code indicates a resource has been permanently deleted?`,
    options: ['204', '200', '410', '404'],
    correct: '410'
  },
  {
    id: 17,
    language: "JavaScript",
    question: `let a = "5", b = 3;\nconsole.log(a - b);`,
    options: ['2', '53', 'undefined', 'NaN'],
    correct: '2'
  },
  {
    id: 18,
    language: "React",
    question: `How to prevent re-renders when prop doesn’t change?`,
    options: ['React.memo', 'useEffect', 'useRef', 'useState'],
    correct: 'React.memo'
  },
  {
    id: 19,
    language: "Angular",
    question: `In Angular, what is Zone.js mainly used for?`,
    options: ['Change detection', 'Routing', 'Forms', 'HTTP'],
    correct: 'Change detection'
  },
  {
    id: 20,
    language: "REST API",
    question: `Which HTTP verb is used to apply partial update to a resource?`,
    options: ['PUT', 'PATCH', 'POST', 'HEAD'],
    correct: 'PATCH'
  }
];

export default codeQuestions;
