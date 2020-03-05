

var startScreen = document.getElementById("startDiv")
var secondsLeft = 10;     //Quiz time 


var startButton = document.querySelector("#start");   //Start Button Connect to HTML













//Timer Function and Variables 
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}