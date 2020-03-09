var timeLeft = document.querySelector("time-left");
var questDisplay = document.querySelector("question") //Assigns question variable to question div on webpage
var startButton = document.querySelector("startQuiz");   //Start Button Connect to HTML
var displayScore = document.getElementById("score")




//Start Div Variables 
const startQuiz = document.getElementById("startQuiz").addEventListener("click", startQuiz);

//Question and Button variables + Added event listeners
const quiz = document.getElementById("#quiz") // Question Container 
const question = document.getElementById("question") // Question Container 
const choiceA = document.getElementById("choiceA").addEventListener("click", checkAnswer);
const choiceB = document.getElementById("choiceB").addEventListener("click", checkAnswer);
const choiceC = document.getElementById("choiceC").addEventListener("click", checkAnswer);
const choiceD = document.getElementById("choiceD" ).addEventListener("click", checkAnswer);

const totalQuestions = questions.length - 1; //Reduces Questions array value from 7 to 6 

// 


//Other Question Array
var questions = ["What does HTML stand for?", "What are the 3 building blocks of the web?", "What building block is responsible for a webpage's styling?"]
var choicesA = ["Hypotext Marking Language", "HTML, CSS, JavaScript", "HTML"]
var choicesB = ["Hypertext Marker Language", "Angular, HTML, JavaScript", "Python"]
var choicesC = ["Python", "HTML, Python, JavaScript", "HTML, Python, JavaScript"]
var choicesD = ["Hypotext Makeup Language", "Cobol, CSS, JavaScript", "CSS"]

//Score Variables
var score = 0; displayScore = score; 

//Timer Variables 
const secondsLeft = 20;     //Quiz time 
let questionCycle = 0 


//Main Function - StartQuiz

function startQuiz (); {


function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeLeft.textContent = secondsLeft + " seconds left";
 
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        //sendMessage();
      }
 
    }, 1000);
  }
 

//Function Variables 
function questionCycle(); {
  for (i = 0; i < questions.length; i++); {
  console.log(list[i]) 
  displayQuestion();
  checkAnswer();

  function displayQuestion(); {
    //Function Variables 
    let q = questions[questionCycle.result]
    document.querySelector("question").innertext =  q.questions[i];
    document.querySelector("choiceA").innerText = q.choicesA[i];
    document.querySelector("choiceB").innerText = q.choicesB[i];
    document.querySelector("choiceC").innerText = q.choicesC[i];
    document.querySelector("choiceD").innerText = q.choicesD[i];
        }

  function checkAnswer (){
    if(answer == question[questionCycle].correct)
    //Increment score by 1 
      score++
    //
    else{
      secondsLeft = (secondsLeft - 5)
        }
      }
    }
  }
//Check Answer
setTime();
}

//var mainEl = document.getElementById("main");
//var questArray = ["What does HTML stand for?", "What are the 3 building blocks of the web?", "What building block is responsible for a webpage's appearance?]

//Questions Array 
// let questions = [
//   {
//   question: "What does HTML stand for?",
//   choiceA: "Hypotext Marking Language",
//   choiceB: "Hypertext Marker Language", 
//   choiceC: "Python", 
//   choiceD: "Hypotext Makeup Language",  
//   correct: "C"
//   },//End Question 1 
//   {
//   question: "What are the 3 building blocks of the web?",
//   choiceA: "HTML, CSS, JavaScript",
//   choiceB: "Angular, HTML, JavaScript", 
//   choiceC: "HTML, Python, JavaScript", 
//   choiceD: "Cobol, CSS, JavaScript",  
//   correct: "A"
//   },//End Question 2
//   {
//   question: "What building block is responsible for a webpage's styling?",
//   choiceA: "HTML",
//   choiceB: "Python", 
//   choiceC: "HTML, Python, JavaScript", 
//   choiceD: "CSS",  
//   correct: "D"
//   },//End Question 3
// ]; 


//function answerIsWrong()

// //Timer Function and Variables 
// var timerEl = document.querySelector("timer");
// var mainEl = document.getElementById("main");
// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeLeft.textContent = secondsLeft + " seconds left";

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }

//   }, 1000);
// }

// function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// setTime();
// End answerIsWrong





//Timer Function and Variables 
//var timerEl = document.querySelector("timer");
 //var mainEl = document.getElementById("main");
 
//  function sendMessage() {
//    timerEl.textContent = " ";

//    var imgEl = document.createElement("img");

//    imgEl.setAttribute("src", "images/image_1.jpg");
   //mainEl.appendChild(imgEl);

 //}

 