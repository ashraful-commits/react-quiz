export const interviewQuestions = [
    {
    question: 'What is the output of typeof null?',
    options: ['"object"', '"null"', '"undefined"'],
    answer: '"object"',
    explanation: 'The typeof operator in JavaScript incorrectly returns "object" for null values due to historical reasons.'
  },
  {
    question: 'Which built-in method removes the last element from an array and returns that element?',
    options: ['pop()', 'push()', 'join()'],
    answer: 'pop()',
    explanation: 'The pop() method removes the last element from an array and returns it. It modifies the original array.'
  },
  {
    question: 'What is the result of 3 + "2"?',
    options: ['"32"', '"5"', '"6"'],
    answer: '"32"',
    explanation: 'When the + operator is used with a string and a number, JavaScript converts the number to a string and concatenates the two strings.'
  },
  {
    question: 'What is a closure in JavaScript?',
    options: ['A design pattern', 'A built-in function', 'A function that has access to its own scope, the scope of its parent function, and the global scope'],
    answer: 'A function that has access to its own scope, the scope of its parent function, and the global scope',
    explanation: 'A closure is a function that retains access to its lexical scope, even after the function has finished executing. It allows for encapsulation and private data.'
  },
  {
    question: 'What is the purpose of the "use strict" directive in JavaScript?',
    options: ['To enable strict mode for the entire application', 'To enable ECMAScript 6 features', 'To catch common coding mistakes and "unsafe" actions'],
    answer: 'To catch common coding mistakes and "unsafe" actions',
    explanation: 'The "use strict" directive enables strict mode in JavaScript, which helps catch common coding mistakes and makes JavaScript more secure.'
  },{
    question: 'What is the difference between null and undefined in JavaScript?',
    options: [
      'null is an object, while undefined is a primitive value',
      'null indicates the absence of a value, while undefined indicates a variable that has been declared but not assigned',
      'null and undefined are interchangeable and can be used interchangeably'
    ],
    answer: 'null indicates the absence of a value, while undefined indicates a variable that has been declared but not assigned',
    explanation: 'Null is used to indicate the intentional absence of any object value, while undefined is used to indicate the absence of a value due to an uninitialized variable.'
  },
  {
    question: 'What is the purpose of the JavaScript `bind()` method?',
    options: [
      'To create a new function with a specified context and parameters',
      'To execute a function immediately',
      'To bind a function to a specific DOM element'
    ],
    answer: 'To create a new function with a specified context and parameters',
    explanation: 'The `bind()` method creates a new function that, when invoked, has its `this` keyword set to a specified value and allows you to pre-fill some or all of the function’s arguments.'
  },
  {
    question: 'What is event delegation in JavaScript?',
    options: [
      'The process of attaching multiple event listeners to a single DOM element',
      'The process of removing event listeners from DOM elements',
      'The process of using a single event listener to handle events for multiple elements by utilizing event propagation'
    ],
    answer: 'The process of using a single event listener to handle events for multiple elements by utilizing event propagation',
    explanation: 'Event delegation involves attaching a single event listener to a common ancestor of several elements and using event propagation to handle events on multiple elements.'
  },
  {
    question: 'What is the difference between `null` and `undefined`?',
    options: [
      '`null` represents an uninitialized variable, while `undefined` represents the absence of a value',
      '`null` is a primitive value, while `undefined` is an object',
      '`null` and `undefined` are interchangeable and can be used interchangeably'
    ],
    answer: '`null` represents an uninitialized variable, while `undefined` represents the absence of a value',
    explanation: '`null` is often used to indicate intentional absence or removal of a value, while `undefined` usually indicates a variable that has been declared but not assigned a value.'
  },{
    question: 'What is the difference between `let`, `const`, and `var` in JavaScript?',
    options: [
      '`let` allows redeclaration of variables, `const` does not, and `var` is block-scoped',
      '`const` is used for defining constants, `let` allows reassignment, and `var` is block-scoped',
      '`let` is used for defining constants, `const` allows reassignment, and `var` is function-scoped'
    ],
    answer: '`let` allows redeclaration of variables, `const` does not, and `var` is function-scoped',
    explanation: '`let` allows you to declare variables that can be reassigned, `const` is used for constants whose values cannot be changed, and `var` is function-scoped and can lead to variable hoisting issues.'
  },
  {
    question: 'What is the purpose of a closure in JavaScript?',
    options: [
      'To create private variables and encapsulate functionality',
      'To improve memory efficiency by automatically deallocating unused variables',
      'To enhance code readability and maintainability'
    ],
    answer: 'To create private variables and encapsulate functionality',
    explanation: 'A closure is a function that has access to its own scope, the scope of its parent function, and the global scope. Closures are often used to create private variables and maintain data encapsulation.'
  },{
    question: 'What is the difference between `==` and `===` in JavaScript?',
    options: [
      '`==` performs type coercion, while `===` does not',
      '`===` performs type coercion, while `==` does not',
      '`==` and `===` are interchangeable and can be used interchangeably'
    ],
    answer: '`==` performs type coercion, while `===` does not',
    explanation: 'The `==` operator performs type coercion, which means it converts the operands to the same type before making the comparison. The `===` operator, also known as strict equality, compares values without performing type coercion.'
  },
  {
    question: 'What is the purpose of the `this` keyword in JavaScript?',
    options: [
      'To refer to the current instance of a class',
      'To refer to the previous instance of a class',
      'To create a new instance of a class'
    ],
    answer: 'To refer to the current instance of a class',
    explanation: 'The `this` keyword in JavaScript is used to refer to the object that is currently executing the code. In the context of a function, `this` refers to the global object in non-strict mode or `undefined` in strict mode.'
  },{
    question: 'What is the difference between `null` and `undefined`?',
    options: [
      '`null` represents the intentional absence of any value, while `undefined` represents the absence of a value or an uninitialized variable',
      '`null` is used to indicate a syntax error, while `undefined` is used to indicate logical errors',
      '`null` is a reserved keyword, while `undefined` is a built-in function'
    ],
    answer: '`null` represents the intentional absence of any value, while `undefined` represents the absence of a value or an uninitialized variable',
    explanation: '`null` is often used to indicate that a variable intentionally holds no value. `undefined` typically indicates that a variable has been declared but hasn\'t been assigned a value yet.'
  },
  {
    question: 'What is the event loop in JavaScript?',
    options: [
      'A loop that handles synchronous events in the order they occur',
      'A loop that handles asynchronous events and callbacks',
      'A loop that handles user interactions and updates the DOM'
    ],
    answer: 'A loop that handles asynchronous events and callbacks',
    explanation: 'The event loop is a key concept in JavaScript\'s concurrency model. It continuously checks the call stack for tasks to execute and processes asynchronous events and callbacks, ensuring non-blocking behavior.'
  },{
    question: 'What is the purpose of the `bind` method in JavaScript?',
    options: [
      'To create a new function with a specified `this` value and initial arguments',
      'To bind a function to the global scope',
      'To bind a function to the context of its parent function'
    ],
    answer: 'To create a new function with a specified `this` value and initial arguments',
    explanation: 'The `bind` method allows you to create a new function that, when invoked, has its `this` value set to a specified value. It also allows you to provide initial arguments to the function.'
  },
  {
    question: 'What is the purpose of the `map` method in JavaScript?',
    options: [
      'To create a new array with the results of calling a provided function on every element in the original array',
      'To modify the existing array by applying a provided function to each element',
      'To filter out elements from the array that do not meet a specified condition'
    ],
    answer: 'To create a new array with the results of calling a provided function on every element in the original array',
    explanation: 'The `map` method iterates over an array and applies a provided function to each element. It returns a new array containing the results of applying the function to each element in the original array.'
  },{
    question: 'What is the purpose of the `reduce` method in JavaScript?',
    options: [
      'To apply a function against an accumulator and each element in an array to reduce it to a single value',
      'To create a new array with all elements that pass a test',
      'To sort the elements of an array in ascending or descending order'
    ],
    answer: 'To apply a function against an accumulator and each element in an array to reduce it to a single value',
    explanation: 'The `reduce` method iterates over an array and applies a function against an accumulator and each element in the array. It is used to reduce the array to a single value, such as the sum of all elements or any other operation that combines elements into a single result.'
  },
  {
    question: 'What is the purpose of the `Promise` object in JavaScript?',
    options: [
      'To represent a value that may not be available yet but will be resolved or rejected in the future',
      'To create a synchronous operation that blocks the event loop',
      'To provide a way to declare variables in JavaScript'
    ],
    answer: 'To represent a value that may not be available yet but will be resolved or rejected in the future',
    explanation: 'Promises are used in JavaScript to handle asynchronous operations and provide a way to deal with values that may not be available immediately but will be available at some point in the future. They help improve the readability and maintainability of asynchronous code.'
  },
  {
    question: 'What is the purpose of the `async/await` syntax in JavaScript?',
    options: [
      'To simplify working with asynchronous code and make it look more like synchronous code',
      'To execute code synchronously and block the event loop',
      'To create an asynchronous function that can be used as a regular function'
    ],
    answer: 'To simplify working with asynchronous code and make it look more like synchronous code',
    explanation: 'The `async/await` syntax is a modern feature in JavaScript that allows you to write asynchronous code in a more readable and structured way. It enables you to write asynchronous operations using a synchronous coding style, making it easier to reason about the flow of the code.'
  },
  {
    question: 'What is a JavaScript generator?',
    options: [
      'A function that can be exited and later re-entered, retaining its context',
      'A built-in object that represents an array-like collection of elements',
      'A function that generates random numbers in JavaScript'
    ],
    answer: 'A function that can be exited and later re-entered, retaining its context',
    explanation: 'A JavaScript generator is a special type of function that can be paused and resumed during its execution. It allows you to control the flow of execution manually and retain the context between re-entries. Generators are defined using the `function*` syntax and `yield` statements.'
  },{
    question: 'What is the difference between `null` and `undefined` in JavaScript?',
    options: [
      '`null` represents an intentional absence of any value, while `undefined` indicates a variable that has been declared but hasn\'t been assigned a value yet.',
      '`undefined` represents an intentional absence of any value, while `null` indicates a variable that has been declared but hasn\'t been assigned a value yet.',
      '`null` and `undefined` are the same and can be used interchangeably in JavaScript.'
    ],
    answer: '`null` represents an intentional absence of any value, while `undefined` indicates a variable that has been declared but hasn\'t been assigned a value yet.',
    explanation: 'In JavaScript, `null` is a value that represents the intentional absence of any object value, while `undefined` indicates that a variable has been declared but hasn\'t been assigned a value. They are distinct and have different meanings.'
  },
  {
    question: 'What is event delegation in JavaScript?',
    options: [
      'Event delegation is a technique where you attach a single event listener to a parent element and use it to handle events that occur on its child elements.',
      'Event delegation is a way to delegate event handling to the browser\'s default event handlers.',
      'Event delegation refers to using the `delegate()` method in JavaScript to bind events to elements.'
    ],
    answer: 'Event delegation is a technique where you attach a single event listener to a parent element and use it to handle events that occur on its child elements.',
    explanation: 'Event delegation is a common practice in JavaScript where you attach an event listener to a parent element and take advantage of event bubbling to handle events on its child elements. This approach can improve performance and reduce the number of event listeners attached to individual elements.'
  },
  {
    question: 'What is the difference between `let`, `const`, and `var` in JavaScript?',
    options: [
      '`let` and `const` are block-scoped and allow reassignment, while `var` is function-scoped and can be reassigned.',
      '`var` and `const` are block-scoped and allow reassignment, while `let` is function-scoped and cannot be reassigned.',
      '`const` and `let` are block-scoped and cannot be reassigned, while `var` is function-scoped and allows reassignment.'
    ],
    answer: '`let` and `const` are block-scoped and allow reassignment, while `var` is function-scoped and can be reassigned.',
    explanation: 'In JavaScript, `let` and `const` are introduced in ECMAScript 6 (ES6) and are block-scoped. They allow you to declare variables that can be reassigned (`let`) or cannot be reassigned (`const`). On the other hand, `var` is function-scoped and allows reassignment. Using `let` and `const` can help prevent unintended variable hoisting and scoping issues.'
  },
  {
    question: 'Explain the concept of hoisting in JavaScript.',
    options: [
      'Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during compilation.',
      'Hoisting is the process of creating a higher-order function in JavaScript.',
      'Hoisting is the process of automatically sorting variables and functions in alphabetical order.'
    ],
    answer: 'Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during compilation.',
    explanation: 'In JavaScript, variable and function declarations are hoisted, meaning they are moved to the top of their containing scope during compilation. This allows you to use variables and functions before they are declared in your code. However, only the declarations are hoisted, not the assignments or initializations.'
  },
  ];
  
  export default interviewQuestions;
  