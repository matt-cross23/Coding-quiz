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
var timer;
var secondsLeft = 1000;
var questionsList = [
  {
    question: "How do you select a class",
    choices: [".", "#", "None of the above", "Either A or B"],
    correctAnswer: "."
  },
  {
    question: "How do you select a class2",
    choices: [".", "#", "None of the above", "Either A or B"],
    correctAnswer: "."
  },
  {
    question: "How do you select a class3",
    choices: [".", "#", "None of the above", "Either A or B"],
    correctAnswer: "."
  },
]
// imgTag.setAttribute("src", "");
// startButtn.setAttribute("", "Start Test");

var i = 0;

function displayCurrentQuestion() {
  document.getElementById("question").textContent = questionsList[i].question;
  // finish populating answers
}

function checkAnswer() {
  // check if text content of clicked list item is equal to answer
  if( answerButton1=== choices(1))
  ;
  // advance to next question
  advanceQuestion()
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
    timerEl.textContent = secondsLeft  + " seconds left";

    if (secondsLeft === 0) {
      clearInterval(timer);
      sendMessage();
    }
  }, 1000);
  
  // Hide unhide appropriate elements
  startPage.classList.add('hidden');

  questions.classList.remove('hidden');
  displayCurrentQuestion();
}

//Used to start quiz//
startB.addEventListener("click", startQuiz);
answerButton1.addEventListener("click", checkAnswer);
answerButton2.addEventListener("click", checkAnswer);
answerButton3.addEventListener("click", checkAnswer);
answerButton4.addEventListener("click", checkAnswer);