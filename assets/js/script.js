var startButton = document.querySelector("#startbtn");
var countDownTimer = document.querySelector("#timer");
//heading containing loading page message and start button
var heading = document.querySelector(".heading");
//container for the clock for styling purposes
var timer = document.querySelector(".timer-container");
//variable for clock function
var clock = document.querySelector("#timer");
//container for all quiz elements
var quiz = document.querySelector(".questions");
//create variable for question text
var qTitle = document.querySelector("#questionTitle");
//show each question one at a time starting at index 0
var currentQuestion = questions[questionIndex];
//create a variable for each answer
var btn0 = document.querySelector("#Answer0");
var btn1 = document.querySelector("#Answer1");
var btn2 = document.querySelector("#Answer2");
var btn3 = document.querySelector("#Answer3");
//create variable for hidden documents
var hidden = document.querySelector(".hide");
//variable for defining question index starting point
var questionIndex = 0;
//variable defining clock couontdown starting point
var seconds = 60;
//variable defining score starting point
var score = 0;
//identify JavaScript questions and create two booleian and two multiple choice questions
//create questions array where each item is an object
//store answers to multiple choice in an array and create coresponding values displayed as buttons
//asign a value of 25 points per question
var questions = [
  //question index 0
  {
    Q: "Java and JavaScript refer to the same coding language",
    A: ["true", "false"],
    correctIndex: 1,
  },
  //question index 1
  {
    Q: "A list of strings or objects in JavaScript is called a(n)...",
    A: ["function", "variable", "array", "index"],
    correctIndex: 2,
  },
  //question index 2
  {
    Q:
      "A good way of describing the role of JavaScript in Web Development is to call JS the ________ of the website",
    A: ["bones", "muscle", "mouth", "clothing"],
    correctIndex: 1,
  },
  //question index 3
  {
    Q: "I am going to pass and graduate from this COding Bootcamp",
    A: ["true", "false"],
    correctIndex: 0,
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
  takeQuiz();
}

function takeQuiz() {
  qTitle.textContent = questions[0].Q;

  hidden.style.display = "block";
  //display first question
  currentQuestion.style.display = "block";
  //create for loop
  var i;
  for (i = 0; i < questions.length; i++) {
    text += questions[i] + "<br>";
  }
  //move to the next question
  currentQuestion++;

  if (questions.length === currentQuestion) {
    //log results and compare to correct answer
    //if answer is correct add 25 points to score
    //   if correctIndex = (true) {
    //       15++
  }
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
      // Set the `textContent` of `clock` to show the remaining seconds
      clock.textContent = seconds + " seconds remaining";
      // Decrement `seconds` by 1
      seconds--;
    } 
     else if (seconds === 1) {
      // When `seconds` is equal to 1, rename to 'second' instead of 'seconds'
      clock.textContent = seconds + " second remaining";
      seconds--;
    } 
    else {
      // Once `seconds` gets to 0, set `clock` to an empty string
      clock.textContent = "";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage("Times UP!");
    }
  }, 1000);
}
