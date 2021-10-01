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
var score = 0;
var timeLost = 150;

var questionIndex = 0;

var timer;
var secondsLeft = 100;
var questionsList = [
  {
    question: "How do you select a class?",
    choices: [".", "#", "None of the above", "Either A or B"],
    correctAnswer: ".",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<script>", "<javascript>", "<js>", "Either A or B"],
    correctAnswer: "<script>",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: [
      "The <body> section",
      "The <head> section",
      "None of the above",
      "Either A or B",
    ],
    correctAnswer: "The <body> section",
  },
  {
    question: "How do you create a function in JavaScript",
    choices: [
      "function functionx()",
      "createFunction = ",
      "None of the above",
      "Either A or B",
    ],
    correctAnswer: "function functionx()",
  },
  {
    question: "How to write an IF statement in JavaScript?",
    choices: [
      "if (i == true)",
      "if i = true then",
      "None of the above",
      "Either A or B",
    ],
    correctAnswer: "if (i == true)",
  },
];

var i = 0;

function displayCurrentQuestion() {
  document.getElementById("question").textContent = questionsList[i].question;
  answerButton1.textContent = questionsList[i].choices[0];
  answerButton2.textContent = questionsList[i].choices[1];
  answerButton3.textContent = questionsList[i].choices[2];
  answerButton4.textContent = questionsList[i].choices[3];

}

function checkAnswer() {
  // // check if text content of clicked list item is equal to answer
  answerButton1.addEventListener(
    "click",
    function () {
      // console.log(answers.textContent)
      // console.log(questionsList[questionIndex].correctAnswer)
      if (answerButton1.textContent == questionsList[questionIndex].correctAnswer) {
       console.log("you're correct");
       var right = document.createElement("p");
       right.innerHTML= "You're Correct";
       document.body.appendChild(right);
      } else
      {
        console.log("you're incorrect");
        secondsLeft - timeLost;
        var wrong = document.createElement("p");
        wrong.innerHTML= "You're Incorrect";
        document.body.appendChild(wrong);
      }
    },
    50
  );
  answerButton2.addEventListener(
    "click",
    function () {
      // console.log(answers.textContent)
      // console.log(questionsList[questionIndex].correctAnswer)
      if (answerButton2.textContent == questionsList[questionIndex].correctAnswer) {
       var right = document.createElement("p");
       right.innerHTML= "You're Correct";
       document.body.appendChild(right);
       console.log(correct)
      } else
      {
        console.log("you're incorrect");
        secondsLeft - timeLost;
        var wrong = document.createElement("p");
        wrong.innerHTML= "You're Incorrect";
        document.body.appendChild(wrong);
      }
    },
    50
  );
  answerButton3.addEventListener(
    "click",
    function () {
      // console.log(answers.textContent)
      // console.log(questionsList[questionIndex].correctAnswer)
      if (answerButton3.textContent == questionsList[questionIndex].correctAnswer) {
        console.log("you're correct");
        var right = document.createElement("p");
       right.innerHTML= "You're Correct";
       document.body.appendChild(right);
      } else
      {
        console.log("you're incorrect");
        secondsLeft - timeLost;
        var wrong = document.createElement("p");
        wrong.innerHTML= "You're Incorrect";
        document.body.appendChild(wrong);
      }
    },
    50
  );
  answerButton4.addEventListener(
    "click",
    function () {
      // console.log(answers.textContent)
      // console.log(questionsList[questionIndex].correctAnswer)
      if (answerButton4.textContent == questionsList[questionIndex].correctAnswer) {
        console.log("you're correct");
       var right = document.createElement("p");
       right.innerHTML= "You're Correct";
       document.body.appendChild(right);
      } else
      {
        console.log("you're incorrect");
        secondsLeft - timeLost;
        var wrong = document.createElement("p");
        wrong.innerHTML= "You're Incorrect";
        document.body.appendChild(wrong);
      }
    },
    50
  );




  advanceQuestion();
}

function advanceQuestion() {
  i++;
  if (i < questionsList.length) {
    questionIndex++
    displayCurrentQuestion();
  }
}

function startQuiz() {
  timer = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left";

    if (secondsLeft == 0 || i >= questionsList.length) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);

  startPage.classList.add("hidden");

  questions.classList.remove("hidden");
  displayCurrentQuestion();
}
function endGame() {
  var gameOver = prompt("The game is over, please enter your initials");
  gameOver = localStorage.getItem("prompt", gameOver);
}

//Used to start quiz//
startB.addEventListener("click", startQuiz);
answerButton1.addEventListener("click", checkAnswer);
answerButton2.addEventListener("click", checkAnswer);
answerButton3.addEventListener("click", checkAnswer);
answerButton4.addEventListener("click", checkAnswer);
