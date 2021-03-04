var startButton = document.querySelector("#startbtn");
var countDownTimer = document.querySelector("#timer");
//heading containing loading page message and start button
var heading = document.querySelector(".heading");
//container for the clock for styling purposes
var timer = document.querySelector(".timer-container");
//variable for clock function
var clock = document.querySelector("#timer");
//container for all quiz elements
var quiz = document.querySelector("#questions");
//create variable for question text
var qTitle = document.querySelector("#questionTitle");
var qAnswers = document.querySelector("#answers");
// Reference to
//create variable for hidden documents
var hidden = document.querySelector(".hide");
//variable for defining question index starting point
var questionIndex = 0;
//variable defining clock couontdown starting point
var seconds = 60;
//variable defining score starting point
var score = 0;
var timeInterval;
//identify JavaScript questions and create two booleian and two multiple choice questions
//create questions array where each item is an object
//store answers to multiple choice in an array and create coresponding values displayed as buttons
//asign a value of 25 points per question
var questions = [
  //questionIndex 0
  {
    Q: "Java and JavaScript refer to the same coding language",
    A: ["true", "false"],
    correctAnswer: "false",
  },
  //questionIndex 1
  {
    Q: "A list of strings or objects in JavaScript is called a(n)...",
    A: ["function", "variable", "array", "index"],
    correctAnswer: "array",
  },
  //questionIndex 2
  {
    Q:
      "A good way of describing the role of JavaScript in Web Development is to call JS the ________ of the website",
    A: ["bones", "muscle", "mouth", "clothing"],
    correctAnswer: 1,
  },
  //questionIndex 3
  {
    Q: "I am going to pass and graduate from this Coding Bootcamp",
    A: ["true", "false"],
    correctAnswer: 0,
  },
];
//click begins startQuiz function declared below
startButton.addEventListener("click", startQuiz);
//Time calculations in seconds
// var seconds = Math.floor((distance % (1000 * 120)) / 1000);
function startQuiz() {
  //hide the .heading values
  heading.style.display = "none";
  //unhide the timer and quiz
  timer.style.display = "block";
  quiz.style.display = "block";
  //questions.style.display = "block;"
  //start clock countdown function
  startTimer();
  //begin the takeQuiz function
  renderQuestion();
}
function renderQuestion() {
  // reference current question
  //show each question one at a time starting at index 0
  var currentQuestion = questions[questionIndex];
  qTitle.textContent = currentQuestion.Q;
  qAnswers.innerHTML = "";
  for (var i = 0; i < currentQuestion.A.length; i++) {
    var answer = currentQuestion.A[i];
    // create a button
    var btn = document.createElement("button");
    // set button text content
    btn.textContent = answer;
    // append to the page
    qAnswers.append(btn);
  }
}
// Handle when a user clicks on a answer
qAnswers.addEventListener("click", function (e) {
  var currentQuestion = questions[questionIndex];
  // If the target was not a button, exit function early
  // Event Delegation For The Win!
  if (!e.target.matches("button")) return;
  // Value of the button that was clicked on
  var val = e.target.textContent;
  // if the answer was correct
  if (currentQuestion.correctAnswer === val) {
  }
  // if answer was wrong
  else {
  }
  questionIndex++;
  if (questionIndex === questions.length) {
    // We are out of questions
    // End the game
    endGame();
  } else {
    renderQuestion();
  }
});
function startTimer() {
  timeInterval = setInterval(function () {
    // As long as the `seconds` is greater than 1
    if (seconds > 1) {
      // Set the `textContent` of `clock` to show the remaining seconds
      clock.textContent = seconds + " seconds remaining";
      // Decrement `seconds` by 1
      seconds--;
    } else if (seconds === 1) {
      // When `seconds` is equal to 1, rename to 'second' instead of 'seconds'
      clock.textContent = seconds + " second remaining";
      seconds--;
    } else {
      // Once `seconds` gets to 0, set `clock` to an empty string
      clock.textContent = "";
      // Call the `endGame()` function
      endGame();
    }
  }, 1000);
}
function endGame() {
  // hide our quiz
  // stop our timer
  // Use `clearInterval()` to stop the timer
  clearInterval(timeInterval);
  // display a form for our user
}
