var startButton = document.querySelector("#startbtn");
var countDownTimer = document.querySelector("#timer");
var heading = document.querySelector(".heading");
var timer = document.querySelector(".timer-container");
var clock = document.querySelector("#timer");
var quiz = document.querySelector(".questions");
var questionIndex = 0;
var seconds = 60;
var score = 0;

//identify JavaScript questions and create two booleian and two multiple choice questions
//create questions array where each item is an object
//store answers to multiple choice in an array and create coresponding values displayed as buttons
//asign a value of 25 points per question
var questions = [
  {
    Q: "The sky is blue",
    A: ["true", "false"],
    correctIndex: 0,
  },
  {
    Q: "The sky is blue",
    A: ["true", "false"],
    correctIndex: 0,
  },
  {
    Q: "The sky is blue",
    A: ["true", "false"],
    correctIndex: 0,
  },
  {
    Q: "The sky is blue",
    A: ["true", "false"],
    correctIndex: 0,
  },
];

startButton.addEventListener("click", startQuiz);

//Time calculations in seconds
// var seconds = Math.floor((distance % (1000 * 120)) / 1000);

function startQuiz() {
  //hide the .heading
  heading.style.display = "none";
  //unhide the timer
  timer.style.display = "block";
  quiz.style.display = "block";
  //start timer countdown
  //startTimer();
  //begin the takeQuiz function
  takeQuiz();
}

function takeQuiz() {
  //display first question
  var currentQuestion = questions[questionIndex];
  //create for loop
  //log results and compare to correct answer
  //if answer is correct add 25 points to score
  //if else subtract 15 seconds from timer
  //if timer reaches zero set sc0re tp zero
  //prompt next question
  //continue until all questions are answered
  //at conclusion of test or timer, display score and prompt to enter initials
  //store results locally
  //return to start page
}

function startTimer() {
  var timeInterval = setInterval(function () {
    // As long as the `seconds` is greater than 1
    if (seconds > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = seconds + " seconds remaining";
      // Decrement `seconds` by 1
      seconds--;
    } else if (seconds === 1) {
      // When `seconds` is equal to 1, rename to 'second' instead of 'seconds'
      clock.textContent = seconds + " second remaining";
      seconds--;
    } else {
      // Once `seconds` gets to 0, set `clock` to an empty string
      clock.textContent = "";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage("Times UP!");
    }
  }, 1000);
}
