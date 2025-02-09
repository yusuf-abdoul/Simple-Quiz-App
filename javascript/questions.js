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
        question: "Which of the following is NOT a semantic HTML element?",
        options: ["<header>", "<footer>", "<div>", "<article>"],
        correctAnswer: 2,
      },
      {
        "question": "What does HTML stand for?",
        "options": ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "None of the above"],
        "correctAnswer": 0
      },
      {
        "question": "Which HTML element is used to define the title of a web page?",
        "options": ["<title>", "<header>", "<meta>", "<h1>"],
        "correctAnswer": 0
      },
      {
        "question": "Which HTML tag is used to create a hyperlink?",
        "options": ["<a>", "<link>", "<href>", "<url>"],
        "correctAnswer": 0
      },
      {
        "question": "Which tag is used to define an image in HTML?",
        "options": ["<image>", "<img>", "<picture>", "<src>"],
        "correctAnswer": 1
      },
      {
        "question": "What does the <p> tag in HTML represent?",
        "options": ["Paragraph", "Picture", "Program", "Property"],
        "correctAnswer": 0
      },
      {
        "question": "Which attribute is used to specify the source of an image?",
        "options": ["src", "href", "alt", "link"],
        "correctAnswer": 0
      },
      {
        "question": "Which tag is used to display a list of items in HTML?",
        "options": ["<list>", "<ul>", "<ol>", "<li>"],
        "correctAnswer": 1
      },
      {
        "question": "Which tag is used to define an ordered list?",
        "options": ["<ul>", "<ol>", "<li>", "<list>"],
        "correctAnswer": 1
      },
      {
        "question": "Which of the following elements is used to create a form in HTML?",
        "options": ["<form>", "<input>", "<button>", "<label>"],
        "correctAnswer": 0
      },
      {
        "question": "Which attribute is used to specify a form submission URL in HTML?",
        "options": ["action", "method", "type", "name"],
        "correctAnswer": 0
      },
      {
        "question": "Which tag is used to define a table in HTML?",
        "options": ["<table>", "<tr>", "<td>", "<th>"],
        "correctAnswer": 0
      },
      {
        "question": "Which tag is used to define a row in an HTML table?",
        "options": ["<table>", "<th>", "<tr>", "<td>"],
        "correctAnswer": 2
      },
      {
        "question": "Which tag is used to create a text input field in HTML?",
        "options": ["<input>", "<textbox>", "<textarea>", "<field>"],
        "correctAnswer": 0
      },
      {
        "question": "Which attribute is used to specify a hyperlink target in HTML?",
        "options": ["target", "href", "action", "link"],
        "correctAnswer": 0
      },
      {
        "question": "Which tag is used to define a dropdown list in HTML?",
        "options": ["<dropdown>", "<select>", "<option>", "<list>"],
        "correctAnswer": 1
      },
      {
        "question": "Which HTML tag is used to add a comment?",
        "options": ["<!-- comment -->", "// comment", "<comment>", "<!-- comment -->"],
        "correctAnswer": 0
      },
      {
        "question": "What is the default value for the 'type' attribute in the <input> element?",
        "options": ["text", "password", "button", "checkbox"],
        "correctAnswer": 0
      },
      {
        "question": "Which tag is used to define a heading in HTML?",
        "options": ["<header>", "<h1>", "<heading>", "<head>"],
        "correctAnswer": 1
      },
      {
        "question": "Which tag is used to define a division in HTML?",
        "options": ["<div>", "<span>", "<section>", "<article>"],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following HTML tags are used to define hyperlinks?",
        "options": ["<a>", "<href>", "<link>", "<url>"],
        "correctAnswer": 0
      }
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
    questions: [
      {
        "question": "Which of the following is a correct way to declare a variable in JavaScript?",
        "options": ["var x = 10;", "variable x = 10;", "int x = 10;", "let 10 = x;"],
        "correctAnswer": 0
      },
      {
        "question": "Which method is used to round a number to the nearest integer in JavaScript?",
        "options": ["round()", "Math.round()", "Math.ceil()", "Math.floor()"],
        "correctAnswer": 1
      },
      {
        "question": "What does the 'typeof' operator do in JavaScript?",
        "options": ["Returns the type of a variable", "Converts a variable to a string", "Creates a new variable", "Defines a function"],
        "correctAnswer": 0
      },
      {
        "question": "What is the output of 'console.log(2 + '2')' in JavaScript?",
        "options": ["4", "22", "Error", "NaN"],
        "correctAnswer": 1
      },
      {
        "question": "Which of the following is NOT a valid JavaScript data type?",
        "options": ["String", "Number", "Integer", "Boolean"],
        "correctAnswer": 2
      },
      {
        "question": "What is the result of '5 === 5' in JavaScript?",
        "options": ["true", "false", "undefined", "NaN"],
        "correctAnswer": 0
      },
      {
        "question": "What does 'console.log()' do in JavaScript?",
        "options": ["Logs data to the console", "Returns data to the function", "Displays a pop-up alert", "Sets the value of a variable"],
        "correctAnswer": 0
      },
      {
        "question": "How do you write a comment in JavaScript?",
        "options": ["// comment", "/ comment", "<!-- comment -->", "/* comment */"],
        "correctAnswer": 0
      },
      {
        "question": "Which symbol is used for a strict equality comparison in JavaScript?",
        "options": ["=", "==", "===", "!="],
        "correctAnswer": 2
      },
      {
        "question": "What will be the output of 'typeof NaN' in JavaScript?",
        "options": ["number", "string", "undefined", "NaN"],
        "correctAnswer": 0
      },
      {
        "question": "How can you create a function in JavaScript?",
        "options": ["function myFunction()", "create function myFunction()", "def myFunction()", "function = myFunction()"],
        "correctAnswer": 0
      },
      {
        "question": "Which method is used to convert a string to an integer in JavaScript?",
        "options": ["parseInt()", "parseString()", "toInteger()", "int()"],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following is a correct way to add a comment in a JavaScript function?",
        "options": ["/* comment */", "// comment", "/* comment", "comment //"],
        "correctAnswer": 1
      },
      {
        "question": "What is the purpose of the 'break' statement in JavaScript?",
        "options": ["Stops the loop", "Skips an iteration", "Exits the function", "Terminates the program"],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following is used to handle errors in JavaScript?",
        "options": ["try-catch", "catch-finally", "throw-catch", "error-catch"],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following data types are considered 'primitive' in JavaScript?",
        "options": ["String", "Object", "Function", "Array"],
        "correctAnswer": 0
      },
      {
        "question": "What does the 'alert()' method do in JavaScript?",
        "options": ["Displays a message box", "Logs a message to the console", "Executes a function", "Creates a variable"],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following operators is used to assign a value to a variable?",
        "options": ["=", "==", "===", "!=="],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following is NOT a valid JavaScript variable name?",
        "options": ["_myVar", "$myVar", "myVar!", "myVar1"],
        "correctAnswer": 2
      },
      {
        "question": "What is the default value of an uninitialized variable in JavaScript?",
        "options": ["null", "undefined", "NaN", "false"],
        "correctAnswer": 1
      },
      {
        "question": "What will '5 + null' return in JavaScript?",
        "options": ["5", "null", "undefined", "NaN"],
        "correctAnswer": 0
      },
      {
        "question": "Which loop would you use if you want to iterate over an array in JavaScript?",
        "options": ["for", "while", "forEach", "do-while"],
        "correctAnswer": 2
      },
      {
        "question": "Which of the following is used to define a constant variable in JavaScript?",
        "options": ["const", "constant", "let", "var"],
        "correctAnswer": 0
      },
      {
        "question": "How do you check if a variable is an array in JavaScript?",
        "options": ["Array.isArray()", "isArray()", "Array.check()", "checkArray()"],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following methods is used to add an item to the end of an array in JavaScript?",
        "options": ["push()", "pop()", "shift()", "unshift()"],
        "correctAnswer": 0
      },
      {
        "question": "What is the purpose of the 'this' keyword in JavaScript?",
        "options": ["Refers to the current object", "Refers to the global object", "Refers to the function", "Refers to the parent object"],
        "correctAnswer": 0
      },
      {
        "question": "Which statement is used to stop a loop in JavaScript?",
        "options": ["stop", "halt", "break", "exit"],
        "correctAnswer": 2
      },
      {
        "question": "Which method is used to remove the first element of an array in JavaScript?",
        "options": ["pop()", "shift()", "unshift()", "splice()"],
        "correctAnswer": 1
      },
      {
        "question": "Which operator is used to compare values and types in JavaScript?",
        "options": ["=", "==", "===", "!="],
        "correctAnswer": 2
      },
      {
        "question": "What will 'false + 1' return in JavaScript?",
        "options": ["false", "0", "1", "NaN"],
        "correctAnswer": 1
      },
      {
        "question": "Which method would you use to join two arrays in JavaScript?",
        "options": ["concat()", "merge()", "join()", "combine()"],
        "correctAnswer": 0
      },
      {
        "question": "What is the result of 'undefined == null' in JavaScript?",
        "options": ["true", "false", "NaN", "undefined"],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following is used to create a new object in JavaScript?",
        "options": ["{}", "new Object()", "Object.create()", "All of the above"],
        "correctAnswer": 3
      },
      {
        "question": "What is the correct syntax for calling a function named 'myFunction'?",
        "options": ["myFunction()", "call myFunction()", "myFunction{}()", "call myFunction()"],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following methods can be used to parse a JSON string into a JavaScript object?",
        "options": ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.toJSON()"],
        "correctAnswer": 0
      },
      {
        "question": "How can you detect if a variable is undefined in JavaScript?",
        "options": ["typeof var === 'undefined'", "var === undefined", "var === null", "typeof var === null"],
        "correctAnswer": 0
      },
      {
        "question": "What will 'null == undefined' return in JavaScript?",
        "options": ["true", "false", "NaN", "undefined"],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following is a JavaScript framework?",
        "options": ["Angular", "Python", "React", "Both Angular and React"],
        "correctAnswer": 3
      },
      {
        "question": "Which of the following can store multiple values in a single variable in JavaScript?",
        "options": ["Array", "Object", "String", "Both Array and Object"],
        "correctAnswer": 3
      },
      {
        "question": "Which of the following is the correct way to write an 'if' statement in JavaScript?",
        "options": ["if (x == 10) {}", "if x == 10 {}", "if x = 10 then {}", "if (x = 10): {}"],
        "correctAnswer": 0
      },
      {
        "question": "How do you check if an object has a specific property in JavaScript?",
        "options": ["object.hasOwnProperty(property)", "object.checkProperty(property)", "object[property] == true", "object.property.exists()"],
        "correctAnswer": 0
      },
      {
        "question": "What is the result of 'Boolean(0)' in JavaScript?",
        "options": ["false", "true", "undefined", "NaN"],
        "correctAnswer": 0
      },
      {
        "question": "Which statement is used to handle asynchronous code in JavaScript?",
        "options": ["async", "await", "promise", "All of the above"],
        "correctAnswer": 3
      },
      {
        "question": "Which of the following is used to convert a number to a string in JavaScript?",
        "options": ["toString()", "parseString()", "String()", "number.toString()"],
        "correctAnswer": 0
      },
      {
        "question": "Which function can be used to generate a random number in JavaScript?",
        "options": ["Math.random()", "Math.randomize()", "random()", "generateRandom()"],
        "correctAnswer": 0
      },
      {
        "question": "How do you declare a variable that cannot be reassigned in JavaScript?",
        "options": ["const", "let", "var", "static"],
        "correctAnswer": 0
      },
      {
        "question": "What will '3 + 2 + '5'' output in JavaScript?",
        "options": ["15", "35", "12", "NaN"],
        "correctAnswer": 1
      },
      {
        "question": "What does 'null' represent in JavaScript?",
        "options": ["Empty value", "Undefined", "NaN", "None of the above"],
        "correctAnswer": 0
      },
      {
        "question": "Which method is used to remove the last element of an array in JavaScript?",
        "options": ["pop()", "shift()", "unshift()", "splice()"],
        "correctAnswer": 0
      },
      {
        "question": "What does 'isNaN()' do in JavaScript?",
        "options": ["Checks if a value is a number", "Checks if a value is not a number", "Converts a value to a number", "None of the above"],
        "correctAnswer": 1
      },
      {
        "question": "What is the correct syntax to create an array in JavaScript?",
        "options": ["[]", "{}", "()", "<>"],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following is used to add a property to an object in JavaScript?",
        "options": ["object.property = value", "object.setProperty(value)", "object.addProperty(value)", "object['property'] = value"],
        "correctAnswer": 0
      },
      {
        "question": "How do you write an infinite loop in JavaScript?",
        "options": ["for(;;)", "while(true)", "do{}while(true)", "All of the above"],
        "correctAnswer": 3
      },
      {
        "question": "Which of the following can be used to stop the execution of a function?",
        "options": ["return", "exit", "break", "continue"],
        "correctAnswer": 0
      },
      {
        "question": "What will be the output of 'console.log(5 + \"5\")' in JavaScript?",
        "options": ["55", "10", "NaN", "undefined"],
        "correctAnswer": 0
      },
      {
        "question": "What is the correct way to create a new empty object in JavaScript?",
        "options": ["new Object()", "{}", "Object.create()", "All of the above"],
        "correctAnswer": 3
      },
      {
        "question": "Which of the following methods is used to find the length of a string in JavaScript?",
        "options": ["length()", "size()", "length", "getLength()"],
        "correctAnswer": 2
      },
      {
        "question": "What is the result of 'typeof null' in JavaScript?",
        "options": ["object", "null", "undefined", "boolean"],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following statements is true about JavaScript arrays?",
        "options": ["Arrays are ordered collections", "Arrays can hold mixed types", "Arrays are objects", "All of the above"],
        "correctAnswer": 3
      },
      {
        "question": "How do you create a new JavaScript object using a constructor function?",
        "options": ["var obj = new Object();", "var obj = new Function();", "var obj = createObject();", "var obj = Object.create();"],
        "correctAnswer": 0
      }
    ]
  }
]