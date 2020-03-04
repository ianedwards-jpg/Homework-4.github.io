var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var startScreen = document.getElementById("startDiv")

var secondsLeft = 10;     //Quiz time 

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