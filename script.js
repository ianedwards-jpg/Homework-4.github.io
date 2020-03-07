var timeLeft = document.querySelector("time-left");
var questDisplay = document.querySelector("question") //Assigns question variable to question div on webpage
var mainEl = document.getElementById("main");


//var questArray = ["What does HTML stand for?", "What are the 3 building blocks of the web?", "What building block is responsible for a webpage's appearance?]

//Start Div Variables 
const startQuiz = document.getElementById("startQuiz")

//Question and Button variables + Added event listeners
const quiz = document.getElementById("#quiz") // Question Container 
const question = document.getElementById("#question") // Question Container 
const choiceA = document.getElementById("#choiceA").addEventListener("click", displayQuestion);
const choiceB = document.getElementById("#choiceB").addEventListener("click", displayQuestion);
const choiceC = document.getElementById("#choiceC").addEventListener("click", displayQuestion);
const choiceD = document.getElementById("#choiceD" ).addEventListener("click", displayQuestion);

const totalQuestions = questions.length - 1; //Reduces Questions array value from 7 to 6 

//Questions Array 
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


//Score Variables
var score = 0 

//Timer Variables 
const secondsLeft = 20;     //Quiz time 
let questionCycle = 0 

function displayQuestion(); {
//Function Variables 
let q = questions[questionCycle]
 question.innerHTML = "<p>" + q.question +"</p>";
 choiceA.innerHTML = q.choiceA;
 choiceB.innerHTML = q.choiceB;
 choiceC.innerHTML = q.choiceC;
 choiceD.innerHTML = q.choiceD;
}

function checkAnswer (answer){
  if(answer == question[questionCycle].correct)
  //Increment score by 1 
    score++
  //
  else{
    
  }


}

function answerIsCorrect()


function answerIsWrong()








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