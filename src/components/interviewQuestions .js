export const interviewQuestions = [
    {
      question: 'What is the output of typeof null?',
      options: ['"object"', '"null"', '"undefined"'],
      answer: '"object"'
    },
    {
      question: 'Which built-in method removes the last element from an array and returns that element?',
      options: ['pop()', 'push()', 'join()'],
      answer: 'pop()'
    },
    {
      question: 'What is the result of 3 + "2"?',
      options: ['"32"', '"5"', '"6"'],
      answer: '"32"'
    },
    // Add more questions here...
    {
      question: 'What is a closure in JavaScript?',
      options: ['A design pattern', 'A built-in function', 'A function that has access to its own scope, the scope of its parent function, and the global scope'],
      answer: 'A function that has access to its own scope, the scope of its parent function, and the global scope'
    },
    {
      question: 'What is the purpose of the "use strict" directive in JavaScript?',
      options: ['To enable strict mode for the entire application', 'To enable ECMAScript 6 features', 'To catch common coding mistakes and "unsafe" actions'],
      answer: 'To catch common coding mistakes and "unsafe" actions'
    }
  ];
  
  export default interviewQuestions;
  