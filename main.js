console.log("I'm connected");
//Use this to select the button to start quiz//
var startB = document.querySelector("#start");
var timerEl = document.querySelector("#seconds");
var questions = document.getElementById("questions");
var startPage = document.getElementById("startpage");
var answerButton1 = document.getElementById("answerButton1");
var answerButton2 = document.getElementById("answerButton2");
var answerButton3 = document.getElementById("answerButton3");
var answerButton4 = document.getElementById("answerButton4");
var answers = document.getElementById("answer");
var questionIndex = 0;
// var youreCorrect = document.createElement(right);
// youreCorrect.textContent = "Youre Correct!";
// document.body.appendChild(youreCorrect);
var timer;
var secondsLeft = 300;
var questionsList = [
  {
    question: "How do you select a class?",
    choices: [".", "#", "None of the above", "Either A or B"],
    correctAnswer: ".",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<script", "<javascript>", "<js>", "Either A or B"],
    correctAnswer: ".",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["The <body> section", "The <head> section", "None of the above", "Either A or B"],
    correctAnswer: ".",
  },
  {
    question: "How do you create a function in JavaScript",
    choices: ["function functionx()", "createFunction = ", "None of the above", "Either A or B"],
    correctAnswer: ".",
  },
  {
    question: "How to write an IF statement in JavaScript?",
    choices: ["if (i == true)", "if i = true then", "None of the above", "Either A or B"],
    correctAnswer: ".",
  },
];

var i = 0;

function displayCurrentQuestion() {
  document.getElementById("question").textContent = questionsList[i].question;
  answerButton1.textContent = questionsList[i].choices[0];
  answerButton2.textContent = questionsList[i].choices[1];
  answerButton3.textContent = questionsList[i].choices[2];
  answerButton4.textContent = questionsList[i].choices[3];
  answerButton4.textContent = questionsList[i].choices[4];
  answerButton4.textContent = questionsList[i].choices[5];
}

function checkAnswer() {
  // // check if text content of clicked list item is equal to answer
  answers.addEventListener("click",
  function () {      if (questionsList[0] === questionsList.correctAnswer) {
    console.log("you're correct");
  } else (answers !== questionsList.correctAnswer);
  {
    console.log("you're incorrect");
    secondsLeft--;
  }
},
50
);   
// advance to next question
  advanceQuestion();
}

function advanceQuestion() {
  i++;
  if (i < questionsList.length) {
    displayCurrentQuestion();
  }
}

function startQuiz() {
  timer = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left";

    if (secondsLeft === 0 || i >= questionsList.length) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);

  // Hide unhide appropriate elements
  startPage.classList.add("hidden");

  questions.classList.remove("hidden");
  displayCurrentQuestion();
}
function endGame() {
  console.log("Game is over");
}

//Used to start quiz//
startB.addEventListener("click", startQuiz);
answerButton1.addEventListener("click", checkAnswer);
answerButton2.addEventListener("click", checkAnswer);
answerButton3.addEventListener("click", checkAnswer);
answerButton4.addEventListener("click", checkAnswer);
