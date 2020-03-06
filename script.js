var timeLeft = document.querySelector("time-left");
var questDisplay = document.querySelector("question") //Assigns question variable to question div on webpage
var mainEl = document.getElementById("main");


//var questArray = ["What does HTML stand for?", "What are the 3 building blocks of the web?", "What building block is responsible for a webpage's appearance?]

//Start Div Variables 
var startScreen = document.getElementById("startDiv")

//Question and Button variables + Added event listeners
var question = document.getElementById("#question").addEventListener("click", displayDate);
var choiceA = document.getElementById("#choiceA").addEventListener("click", displayDate);
var choiceB = document.getElementById("#choiceB").addEventListener("click", displayDate);
var choiceC = document.getElementById("#choiceC").addEventListener("click", displayDate);
var choiceD = document.getElementById("#choiceD").addEventListener("click", displayDate);


//Score Variables 
var score = 0 

function displayQuestion(); {
  //Function Variables 
 var choiceA = document.getElementById("#choiceA").innerHTML
 var choiceB = document.getElementById("#choiceB").innerHTML
 var choiceC = document.getElementById("#choiceC").innerHTML
 var choiceD =document.getElementById("#choiceA").innerHTML


   let questions = [
    {
    question: "What does HTML stand for?",
    choiceA: "Hypotext Marking Language",
    choiceB: "Hypertext Marker Language", 
    choiceC: "Hypertext Markup Language", 
    choiceD: "Hypotext Makeup Language",  
    correct: "C"
    },//End Question 1 
    {
    question: "What are the 3 building blocks of the web?",
    choiceA: "HTML, CSS, JavaScript",
    choiceB: "React, Angular, CSS", 
    choiceC: "Hypertext Markup Language", 
    choiceD: "HTML, Cobol, CSS",  
    correct: "A"
    },//End Question 2
    {
    question: "What building block is responsible for a webpage's styling?",
    choiceA: "HTML",
    choiceB: "BootStrap", 
    choiceC: "JavaScript", 
    choiceD: "CSS",  
    correct: "D"
    },//End Question 3
  ]; 

  if choiceA 


}

function answerIsCorrect()


function answerIsWrong()





var secondsLeft = 20;     //Quiz time 


var startButton = document.querySelector("#start");   //Start Button Connect to HTML













//Timer Function and Variables 
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();