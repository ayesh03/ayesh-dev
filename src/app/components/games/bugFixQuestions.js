const bugFixQuestions = [
  {
    id: 1,
    bug: `function greet(name) {
  return "Hello, " + name
}
console.log(greet());`,
    options: [
      'Add a default parameter: greet(name = "Guest")',
      'Change console.log to alert',
      'Replace + with -',
    ],
    fix: 'Add a default parameter: greet(name = "Guest")'
  },
  {
    id: 2,
    bug: `const arr = [1, 2, 3];
arr.push(4).unshift(0);`,
    options: [
      'Use arr.unshift(0); arr.push(4); separately',
      'Change push to pop',
      'Use arr.pop(4) instead',
    ],
    fix: 'Use arr.unshift(0); arr.push(4); separately'
  },
  {
    id: 3,
    bug: `const user = {name: "Ayesh"};
console.log(user.age.toString());`,
    options: [
      'Check if age exists before using: user.age?.toString()',
      'Remove the toString method',
      'Replace age with name',
    ],
    fix: 'Check if age exists before using: user.age?.toString()'
  },
  {
    id: 4,
    bug: `let x = 5;
if (x = 10) {
  console.log("Ten");
}`,
    options: [
      'Use comparison operator: if (x == 10)',
      'Remove if condition',
      'Declare x with const',
    ],
    fix: 'Use comparison operator: if (x == 10)'
  },
  {
    id: 5,
    bug: `const [count, setCount] = useState;
setCount(5);`,
    options: [
      'Call useState as a function: useState(0)',
      'Change setCount to count',
      'Remove the square brackets',
    ],
    fix: 'Call useState as a function: useState(0)'
  }
];

export default bugFixQuestions;
