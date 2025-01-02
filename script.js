var questions = [
  {
    question: "What is the output of `console.log(typeof null)`?",
    options: ["'object'", "'null'", "'undefined'", "'string'"],
    answer: "'object'",
  },
  {
    question:
      "Which of the following is not a primitive data type in JavaScript?",
    options: ["String", "Number", "Boolean", "Object"],
    answer: "Object",
  },
  {
    question: "What does the `isNaN()` function do?",
    options: [
      "Checks if a value is NaN",
      "Converts a value to NaN",
      "Checks if a value is not a number",
      "Returns true for numbers",
    ],
    answer: "Checks if a value is NaN",
  },
  {
    question: "What will `console.log(1 + '1')` output?",
    options: ["'11'", "2", "NaN", "Error"],
    answer: "'11'",
  },
  {
    question: "Which method is used to remove the last element from an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: "pop()",
  },
  {
    question: "What is the purpose of `strict mode` in JavaScript?",
    options: [
      "To enable modern JavaScript features",
      "To catch common coding errors",
      "To make JavaScript faster",
      "To disable debugging",
    ],
    answer: "To catch common coding errors",
  },
  {
    question: "What will `console.log(0.1 + 0.2 === 0.3)` return?",
    options: ["true", "false", "undefined", "Error"],
    answer: "false",
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: ["var", "let", "const", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which of the following is a falsy value in JavaScript?",
    options: ["0", "'false'", "[]", "{}"],
    answer: "0",
  },
  {
    question: "What is the result of `typeof NaN`?",
    options: ["'number'", "'NaN'", "'undefined'", "'object'"],
    answer: "'number'",
  },
  {
    question:
      "Which method is used to convert a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.object()",
      "JSON.toObject()",
    ],
    answer: "JSON.parse()",
  },
  {
    question: "What does `Array.prototype.map()` return?",
    options: [
      "A new array with modified elements",
      "The original array",
      "A single value",
      "A string of all elements",
    ],
    answer: "A new array with modified elements",
  },
  {
    question: "What will `console.log(!!'false')` output?",
    options: ["true", "false", "undefined", "Error"],
    answer: "true",
  },
  {
    question: "What is the output of `console.log([] + [])`?",
    options: ["''", "[]", "undefined", "Error"],
    answer: "''",
  },
  {
    question: "Which keyword is used to create a class in JavaScript?",
    options: ["class", "function", "object", "new"],
    answer: "class",
  },
];
var ques = document.getElementById("ques");
var option1 = document.getElementById("q1");
var option2 = document.getElementById("q2");
var option3 = document.getElementById("q3");
var option4 = document.getElementById("q4");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var result = document.getElementById("result");
var center = document.querySelector(".center");
var submit = document.getElementById("submit");

var totalMarks = 0;

var nextCounter = -1;

var track = 0;

var ans = [];

function option(id) {
  track = nextCounter + 1;
  ans[track] = questions[nextCounter].options[id - 1];
  //   console.log(ans);
}

function sub() {
  var idx = 1;
  while (questions.length >= idx) {
    if (questions[idx - 1].answer === ans[idx]) {
      totalMarks++;
    }
    idx++;
  }
  center.style.display = "none";
  result.innerHTML = `Your total score = ${totalMarks}/${questions.length}`;
  // console.log(totalMarks);
}

var sessionTime = questions.length * 60 * 1000;

function timeout() {
  setTimeout(() => {
    center.style.display = "none";
    result.innerHTML = `Your total score = ${totalMarks}/${questions.length}`;
  }, sessionTime);
}

if (nextCounter === -1) {
  prev.style.display = "none";
}

function prevC() {
  nextCounter--;
  if (nextCounter === 0) {
    prev.style.display = "none";
  } else {
    prev.style.display = "block";
  }
  if (nextCounter !== questions.length - 1) {
    next.style.display = "block";
    submit.style.display = "none";
  }
  ques.innerHTML = questions[nextCounter].question;
  option1.innerHTML = questions[nextCounter].options[0];
  option2.innerHTML = questions[nextCounter].options[1];
  option3.innerHTML = questions[nextCounter].options[2];
  option4.innerHTML = questions[nextCounter].options[3];
}

function nextC() {
  if (nextCounter === -1) {
    prev.style.display = "none";
  } else {
    prev.style.display = "block";
  }
  nextCounter++;
  if (nextCounter === questions.length - 1) {
    next.style.display = "none";
    submit.style.display = "block";
  }
  ques.innerHTML = questions[nextCounter].question;
  option1.innerHTML = questions[nextCounter].options[0];
  option2.innerHTML = questions[nextCounter].options[1];
  option3.innerHTML = questions[nextCounter].options[2];
  option4.innerHTML = questions[nextCounter].options[3];
}

nextC();
timeout();
