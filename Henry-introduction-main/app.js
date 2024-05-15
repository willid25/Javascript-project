// let btn = document.querySelector('.btn');

// btn.addEventListener('click', function() {
//     let Name = prompt("what is your name?")
//     if (Name !== null && Name !== '') {
//         document.querySelector('.mytext').innerHTML = Name
//     }else{
//         document.querySelector('.mytext').innerHTML = 'please enter your name'
//     }
// })

// Arrays, Objects

let Resturants = [
  "shoprite",
  "Mr Bigs",
  "Chicken Republic",
  "Tastial",
  "Mr Good",
];
let person = ["shoprite", "Mr Bigs", "Chicken Republic", "Tastial", "Mr Good"];
console.log(Resturants.length);
console.log(Resturants.push("mama iya beans"));
console.log(Resturants.concat(person));

let personItems = ["bag", "Iphone", "Nokia", "Nike", "Vr Glasses"];
// console.log(personItems.pop(2));
// console.log(personItems.shift());
// console.log(personItems.unshift('Nokia'));
console.log(personItems.slice(2));
// personItems.splice(0, 1, 'fish');
console.log(personItems);

// Writing to a Web Page Using Arrays
// let NewText = document.querySelector(".New");
// NewText.innerHTML = "Hello World";

// document.write("<h1>Hello World</h1>");

// Comments
// this is a comment

// conditional statement in js
// if
// while
// tenary if

let num = 200;

if (num !== 50 || num > 100) {
  console.log("greater than 100");
} else {
  console.log("lesser than 100");
}

if (num !== 50) {
  console.log("greater than 100");
} else if (num < 100) {
  console.log("lesser than 100");
} else {
  console.log("end");
}

num > 100 ? console.log("greater than") : console.log(" less than");

num > 100
  ? (console.log("greater than"),
    num < 100 ? console.log("lesser than") : console.log("zero"))
  : null;

let day = 1;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(`Today is ${dayName}`);

console.log("Today is" + dayName);

// Loops in javascript
// for loop
// for of loop
// for in loop
// while loop

let new_array = ["1", "2", "3", "4", "5"];

// for (let index = 0; index < new_array.length; index++) {
//    console.log(new_array[index]);
// }

// for( x in new_array) {
//     console.log(new_array[x]);
// }

let IOT = { Name: "testing", Project: "Robotics" };

let values = Object.values(IOT);
for (const x of values) {
  console.log(x);
}

let string = "education";
for (const x of string) {
  console.log(x.toUpperCase());
}

let zero = 0;
while (zero <= 500) {
  console.log(zero);
  zero++;
}

// do {
//     console.log(zero);
//     zero++;
// } while (zero <= 500);

//quiz app
const quizContainer = document.querySelector("#quiz-container");
const questionElement = document.querySelector("#question");
const optionsElement = document.querySelector("#options");
const submitButton = document.querySelector("#submit-btn");

let currentQuestion = 0;
let score = 0;
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the capital of Germany?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Berlin",
  },
  {
    question: "What is the capital of Spain?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Madrid",
  },
];

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.textContent = currentQuizData.question;
  optionsElement.innerHTML = "";
  currentQuizData.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", function () {
      selectAnswer(option);
    });
    optionsElement.appendChild(button);
  });
}

function selectAnswer(selectedOption) {
  const currentQuizData = quizData[currentQuestion];
  if (selectedOption == currentQuizData.answer) {
    score = score + 1
  }
}

function showNextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    alert(`quiz finished! Your score is ${score}`);
  }
}

submitButton.addEventListener("click", showNextQuestion);

loadQuestion();
