var startB = document.querySelector("#start");
var timerEl = document.querySelector("#seconds");
var questions = document.getElementById("questions");
var startPage = document.getElementById("startpage");
var endquiz = document.getElementById("endquiz");
var answerButton1 = document.getElementById("answerButton1");
var answerButton2 = document.getElementById("answerButton2");
var answerButton3 = document.getElementById("answerButton3");
var answerButton4 = document.getElementById("answerButton4");
var answers = document.getElementById("answer");
var questionIndex = 0;
var timeLost = 75;
var score = 10;
var scoring = document.createElement("p");

var questionIndex = 0;
endquiz.classList.add("hidden");
var timer;
var secondsLeft = 500;
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
    question: "How do you create a function in JavaScript?",
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
  advanceQuestion();
}

function advanceQuestion() {
  i++;
  if (i < questionsList.length) {
    questionIndex++;
    displayCurrentQuestion();
}
else if (i>questionsList.length-1) {
  clearInterval(timer);
  endGame();
}
}

function startQuiz() {
  timer = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left";
    if (secondsLeft <= 0) {
      clearInterval(timer);
      
        endGame();
      }

    
    }
  , 1000);

  startPage.classList.add("hidden");
  questions.classList.add("hidden");

  questions.classList.remove("hidden");
  displayCurrentQuestion();
}

//Used to start quiz//
startB.addEventListener("click", startQuiz);
answerButton1.addEventListener("click", function () {
  if (answerButton1.textContent == questionsList[questionIndex].correctAnswer) {
    var right = document.createElement("p");
    right.innerHTML = "You're Correct";
    document.body.appendChild(right);
    var scoring = document.createElement("p");
    scoring.innerHTML = "Your Score is: " + score;
    score++;
    document.body.appendChild(scoring);
  } else {
    secondsLeft = secondsLeft - timeLost;
    var wrong = document.createElement("p");
    wrong.innerHTML = "You're Incorrect";
    document.body.appendChild(wrong);
    var scoring = document.createElement("p");
    scoring.innerHTML = "Your Score is: " + score;
    score--;
    document.body.appendChild(scoring);
  }

  advanceQuestion();
});
answerButton2.addEventListener("click", function () {
  if (answerButton2.textContent == questionsList[questionIndex].correctAnswer) {
    var right = document.createElement("p");
    right.innerHTML = "You're Correct";
    document.body.appendChild(right);
  } else {
    secondsLeft = secondsLeft - timeLost;
    var wrong = document.createElement("p");
    wrong.innerHTML = "You're Incorrect";
    document.body.appendChild(wrong);
    var scoring = document.createElement("p");
    scoring.innerHTML = "Your Score is: " + score;
    score--;
    document.body.appendChild(scoring);
  }
  advanceQuestion();
});
answerButton3.addEventListener("click", function () {
  if (answerButton3.textContent == questionsList[questionIndex].correctAnswer) {
    var right = document.createElement("p");
    right.innerHTML = "You're Correct";
    document.body.appendChild(right);
  } else {
    secondsLeft = secondsLeft - timeLost;
    var wrong = document.createElement("p");
    wrong.innerHTML = "You're Incorrect";
    document.body.appendChild(wrong);
    var scoring = document.createElement("p");
    scoring.innerHTML = "Your Score is: " + score;
    score--;
    document.body.appendChild(scoring);
  }
  advanceQuestion();
});
answerButton4.addEventListener("click", function () {
  if (answerButton4.textContent == questionsList[questionIndex].correctAnswer) {
    var right = document.createElement("p");
    right.innerHTML = "You're Correct";
    document.body.appendChild(right);
  } else {
    secondsLeft = secondsLeft - timeLost;
    var wrong = document.createElement("p");
    wrong.innerHTML = "You're Incorrect";
    document.body.appendChild(wrong);
    var scoring = document.createElement("p");
    scoring.innerHTML = "Your Score is: " + score;
    score--;
    document.body.appendChild(scoring);
  }
  advanceQuestion();
});


function endGame() {
  var quizOver= document.createElement("H3");
  quizOver.innerHTML = "Quiz Over!!"
  console.log(score);
  questions.classList.add("hidden");
  endquiz.classList.remove("hidden");
  startPage.classList.add("hidden");

 

}
