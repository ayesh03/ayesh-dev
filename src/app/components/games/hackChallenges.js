const hackChallenges = [
  {
    prompt: "Define a variable `x` with value 5 using `let`, and make sure it's not `const` or `var`.",
    test: (input) => {
      try {
        return Function(`"use strict"; ${input}; return x === 5 && !input.includes('const') && !input.includes('var');`)();
      } catch {
        return false;
      }
    }
  },
  {
    prompt: "Log only the word JavaScript (case-sensitive) using console.log().",
    test: (input) =>
      input.trim() === `console.log("JavaScript")` ||
      input.trim() === `console.log('JavaScript')`
  },
  {
    prompt: "Create a variable `arr` that is an array containing exactly [1, 2, 3], no more, no less.",
    test: (input) => {
      try {
        return Function(`"use strict"; ${input}; return JSON.stringify(arr) === "[1,2,3]";`)();
      } catch {
        return false;
      }
    }
  },
  {
    prompt: "Declare a function `sum` that returns the sum of two arguments `a` and `b`.",
    test: (input) => {
      try {
        return Function(`"use strict"; ${input}; return sum(2,3) === 5;`)();
      } catch {
        return false;
      }
    }
  },
  {
    prompt: "Create an object `user` with keys `name: 'Alice'` and `age: 30`.",
    test: (input) => {
      try {
        return Function(`"use strict"; ${input}; return user.name === 'Alice' && user.age === 30;`)();
      } catch {
        return false;
      }
    }
  },
  {
    prompt: "Declare a variable `flag` set to true and then flip it to false in the next line.",
    test: (input) => {
      try {
        return Function(`"use strict"; ${input}; return flag === false;`)();
      } catch {
        return false;
      }
    }
  },
  {
    prompt: "Write a for loop that runs exactly 3 times and pushes index values into `out` array.",
    test: (input) => {
      try {
        return Function(`"use strict"; let out=[]; ${input}; return JSON.stringify(out) === "[0,1,2]";`)();
      } catch {
        return false;
      }
    }
  },
  {
    prompt: "Use a template literal to create variable `msg` equal to Hello, Alice!",
    test: (input) => {
      try {
        return Function(`"use strict"; ${input}; return msg === "Hello, Alice!";`)();
      } catch {
        return false;
      }
    }
  },
  {
    prompt: "Create a constant `E` with value exactly 2.718.",
    test: (input) => {
      try {
        return Function(`"use strict"; ${input}; return E === 2.718;`)();
      } catch {
        return false;
      }
    }
  },
  {
    prompt: "Set variable `result` to true if 15 is divisible by both 3 and 5.",
    test: (input) => {
      try {
        return Function(`"use strict"; ${input}; return result === true;`)();
      } catch {
        return false;
      }
    }
  },
  {
    prompt: "Write an arrow function `triple` that multiplies input by 3.",
    test: (input) => {
      try {
        return Function(`"use strict"; ${input}; return triple(3) === 9;`)();
      } catch {
        return false;
      }
    }
  },
  {
    prompt: "Check if typeof undefined is actually 'undefined' using a variable `check`.",
    test: (input) => {
      try {
        return Function(`"use strict"; ${input}; return check === true;`)();
      } catch {
        return false;
      }
    }
  },
  {
    prompt: "Declare `status` as a boolean and then convert it into a string in the next line.",
    test: (input) => {
      try {
        return Function(`"use strict"; ${input}; return typeof status === 'string';`)();
      } catch {
        return false;
      }
    }
  },
  {
    prompt: "Declare variable `data` and assign it value `null` and confirm type is 'object'.",
    test: (input) => {
      try {
        return Function(`"use strict"; ${input}; return data === null && typeof data === 'object';`)();
      } catch {
        return false;
      }
    }
  },
  {
    prompt: "Declare `double` as an arrow function that doubles a number using implicit return.",
    test: (input) => {
      try {
        return Function(`"use strict"; ${input}; return double(10) === 20;`)();
      } catch {
        return false;
      }
    }
  },
  {
    prompt: "Create an array `nums` and use `.push()` to add number 42.",
    test: (input) => {
      try {
        return Function(`"use strict"; ${input}; return nums.includes(42);`)();
      } catch {
        return false;
      }
    }
  },
  {
    prompt: "Create a Set `mySet` and add 'a' and 'b' to it.",
    test: (input) => {
      try {
        return Function(`"use strict"; ${input}; return mySet.has('a') && mySet.has('b');`)();
      } catch {
        return false;
      }
    }
  },
  {
    prompt: "Create a Map `myMap` with two entries: (1 => 'one') and (2 => 'two')",
    test: (input) => {
      try {
        return Function(`"use strict"; ${input}; return myMap.get(1) === 'one' && myMap.get(2) === 'two';`)();
      } catch {
        return false;
      }
    }
  },
  {
    prompt: "Check if string 'Frontend' includes 'end' and store the result in `hasEnd`.",
    test: (input) => {
      try {
        return Function(`"use strict"; ${input}; return hasEnd === true;`)();
      } catch {
        return false;
      }
    }
  },
  {
    prompt: "Write a function `isEven` that returns true for even numbers and false otherwise.",
    test: (input) => {
      try {
        return Function(`"use strict"; ${input}; return isEven(2) === true && isEven(3) === false;`)();
      } catch {
        return false;
      }
    }
  }
];

export default hackChallenges;
