startButton = document.querySelector("#startbtn")
countDownTimer = document.querySelector("#timer")
var seconds = 60


startButton.addEventListener("click", function(e)) {
    //possible clock solution from Brad
    startButton.style.display = "none";
  clock.textContent = seconds;
  var clockMsg = setInterval(function () {
    time--;
    clock.textContent = time;
    if (time === 0) {
      clearInterval(clockMsg);
    }
  }, 1000);
  7:24
clock.textContent = time;
    if (time === 0) {
      clearInterval(clockMsg);(stops the clock at zero.

}

//Time calculations in seconds
// var seconds = Math.floor((distance % (1000 * 120)) / 1000);

var question1 = {

}
var question2 = {

}

var question3 = {

}

var question4 = {

}


function startQuiz(){
    //unhide the timer
    //begin the takeQuiz function
}

function takeQuiz(){
    //prompt first question
    //log results and prompt next question
    //continue 
}

startQuiz(console.log("take the quiz"))