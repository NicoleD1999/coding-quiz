
var body = document.body;
//text in header is going to be highscore & timer that stays there even if user clicks button
//----------------------------------------------Inital Screen-------------------------------------------------------------------------------------------
var nav = document.querySelector("#initial-nav");
var div = document.querySelector("#h1-div");
var highscores = document.querySelector ("#p-highscores");
var timer = document.querySelector("#p-time-left");
var initalSection = document.querySelector ("#initial-screen");
var h1El = document.querySelector("#initial-h1");
var para = document.querySelector("#initial-p");
var buttonDiv = document.querySelector ("#initial-button-div");
var button = document.querySelector("#initial-button");

var timeLeft = 5;


timer.setAttribute("style", "text-align: right;  margin-top:-35px;")
initalSection.setAttribute("style", "text-align: center;")
buttonDiv.setAttribute("style", "display:flex; justify-content:center; align-items:center;" )

function startTime() {
    var timeInterval = setInterval(function(){
    timeLeft--;
    timer.textContent= "Time Left " + timeLeft;
   }, 1000);
}

button.addEventListener ('click', function() {
    startTime();
    initalSection.setAttribute("style","display:none;");
    section1.setAttribute("style","display;");

})

//---------------------------------------------^Inital Screen^------------------------------------------------------------------------------------------
//---------------------------------------------Second Screen--------------------------------------------------------------------------------------
var section1 = document.querySelector("#section-1");
var firstQuestion = document.queryCommandValue("#first-question");
var buttonAnswersDiv1 = document.querySelector("#button-answers-div-1");
var buttonAnswers = document.querySelector(".button-answers-1");

section1.setAttribute("style", "display:none;");

function firstAnswers() {
    if (x) {

    }
}



