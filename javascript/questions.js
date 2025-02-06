// Array of questions grouped by category (25 questions each)

const questions = [
  {
    category: "HTML",
    questions: [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a correct way to declare a variable in JavaScript?",
        options: ["var x = 10;", "variable x = 10;", "int x = 10;", "let 10 = x;"],
        correctAnswer: 0,
      },
      {
        question: "How do you write comment in Python?",
        options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
        correctAnswer: 1,
      },
      {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Simple Sheets"],
        correctAnswer: 0,
      },
      {
        question: "In JavaScript, how do you create a function?",
        options: ["create function myFunction()", "def function myFunction()", "func myFunction()", "function myFunction()"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'typeof' operator do in JavaScript?",
        options: ["Checks the type of a variable", "Declares a variable", "Assigns a value to a variable", "Converts a variable to another type"],
        correctAnswer: 0,
      },
      {
        question: "In C, how do you define a function?",
        options: ["function myFunction()", "def myFunction()", "void myFunction()", "func myFunction()"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is a characteristic of Python?",
        options: ["Compiled language", "Dynamic typing", "Low-level language", "Static typing"],
        correctAnswer: 3,
      },
      {
        question: "Which language is used for Android development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'forEach()' method in JavaScript?",
        options: ["Removes duplicate elements from an array", "Filters elements in an array", "Sorts an array", "Iterates through each element in an array"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'return' keyword do in a function?",
        options: ["Ends the function and returns a value", "Continues the function", "Exits the function without value", "Ends the program execution"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is NOT a semantic HTML element?",
        options: ["<header>", "<footer>", "<div>", "<article>"],
        correctAnswer: 2,
      },
      {
        question: "What is the primary purpose of a 'for' loop in programming?",
        options: ["Repeat code for a specified number of times", "Repeat code until a condition is true", "Define a function", "Evaluate conditions in the loop"],
        correctAnswer: 0,
      },
      {
        question: "Which data structure is ideal for LIFO (Last In First Out)?",
        options: ["Queue", "Stack", "Linked list", "Array"],
        correctAnswer: 1,
      },
      {
        question: "Which command is used in Git to store changes in the repository?",
        options: ["git commit", "git push", "git pull", "git add"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'map()' function do in JavaScript?",
        options: ["Sorts an array", "Filters out items", "Creates a new array", "Modifies the original array"],
        correctAnswer: 2,
      },
      {
        question: "What is an IDE?",
        options: ["An Integrated Development Environment", "A function for code execution", "An interpreter", "An input method for writing code"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a feature of object-oriented programming?",
        options: ["Encapsulation", "Modularity", "Recursion", "Memory Management"],
        correctAnswer: 0,
      },
      {
        question: "What does SQL stand for?",
        options: ["Simple Question Language", "Systematic Query Language", "Standard Question Language", "Structured Query Language"],
        correctAnswer: 3,
      },
      {
        question: "Which of these is an example of a non-relational database?",
        options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
        correctAnswer: 0,
      },
      {
        question: "How do you write comment in CSS?",
        options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following algorithms is used to sort an array by comparing elements?",
        options: ["Bubble sort", "Insertion sort", "Quick sort", "Merge sort"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'finally' block in Java do?",
        options: ["Handles all exceptions", "Attempts to handle runtime exceptions", "Executes code after try-catch", "Defines execution start point"],
        correctAnswer: 2,
      },
      {
        question: "Which data structure is best for searching elements quickly?",
        options: ["Binary search tree", "Array", "Linked list", "Queue"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct syntax for a JavaScript if statement?",
        options: ["if (condition) {}", "if condition {}", "if {} else", "if {condition}"],
        correctAnswer: 0,
      },
    ],
  },

  {
    category: "CSS",
    questions: [
      {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Simple Sheets"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is NOT a valid CSS property?",
        options: ["font-size", "text-color", "background-color", "border-radius"],
        correctAnswer: 1,
      },
      {
        question: "What does the 'margin' property in CSS do?",
        options: ["Sets the space between the border and content", "Sets the space between elements", "Sets the space between the border and the margin", "Sets the space between the content and padding"],
        correctAnswer: 1,
      },
      {
        question: "What does the 'display: none;' property do in CSS?",
        options: ["Hides an element", "Shows an element", "Centers an element", "Aligns an element"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is NOT a valid CSS unit of measurement?",
        options: ["px", "em", "pt", "cm"],
        correctAnswer: 2,
      },
      {
        question: "What does the 'padding' property in CSS do?",
        options: ["Sets the space between the border and content", "Sets the space between elements", "Sets the space between the border and the margin", "Sets the space between the content and padding"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'background-color' property in CSS do?",
        options: ["Sets the color of the text", "Sets the color of the background", "Sets the color of the border", "Sets the color of the padding"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a valid CSS selector?",
        options: ["#id", ".class", "$element", "&tag"],
        correctAnswer: 1,
      },
      {
        question: "What does the 'border' property in CSS do?",
        options: ["Sets the space between the border and content", "Sets the space between elements", "Sets the space between the border and the margin", "Sets the border around an element"],
        correctAnswer: 3,
      },
    ],
  },  

  {
    category: "Javascript",
    question: [
      {
        question: "Which of the following is a correct way to declare a variable in JavaScript?",
        options: ["var x = 10;", "variable x = 10;", "int x = 10;", "let 10 = x;"],
        correctAnswer: 0,
      },
      {
        question: "How do you write comment in Python?",
        options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
        correctAnswer: 1,
      },
      {
        question: "In JavaScript, how do you create a function?",
        options: ["create function myFunction()", "def function myFunction()", "func myFunction()", "function myFunction()"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'typeof' operator do in JavaScript?",
        options: ["Checks the type of a variable", "Declares a variable", "Assigns a value to a variable", "Converts a variable to another type"],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the 'forEach()' method in JavaScript?",
        options: ["Removes duplicate elements from an array", "Filters elements in an array", "Sorts an array", "Iterates through each element in an array"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'return' keyword do in a function?",
        options: ["Ends the function and returns a value", "Continues the function", "Exits the function without value", "Ends the program execution"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'map()' function do in JavaScript?",
        options: ["Sorts an array", "Filters out items", "Creates a new array", "Modifies the original array"],
        correctAnswer: 2,
      },
      {
        question: "What is an IDE?",
        options: ["An Integrated Development Environment", "A function for code execution", "An interpreter", "An input method for writing code"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct syntax for a JavaScript if statement?",
        options: ["if (condition) {}", "if condition {}", "if {} else", "if {condition}"],
        correctAnswer: 0,
      },
    ],
  },
];
