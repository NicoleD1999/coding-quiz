
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

var timeLeft = 80;


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
    initalSection.setAttribute("style","display: none;");
    section1.setAttribute("style", "display;");
    showQuestionOne(questionOne);

})

//---------------------------------------------^Inital Screen^------------------------------------------------------------------------------------------
//---------------------------------------------Second Screen--------------------------------------------------------------------------------------
var section1 = document.querySelector("#section-1");
section1.setAttribute("style", "display: none;")
var questionOne = {
    title: "Commonly used data types DO NOT include",
    alternatives: ["strings", "booleans", "alerts", "numbers"],
    rightAnswer: 1
};
function showQuestionOne (q) {
    
    var titleDiv = document.querySelector("#first-question")
    titleDiv.textContent = q.title;

    var answers = document.querySelectorAll(".button-answers");
    answers.forEach(function(element, index){
        element.textContent=q.alternatives[index];

        element.addEventListener('click', function(){
            if (q.rightAnswer === index ) {
                var right = document.querySelector("#right-wrong");
                right.textContent = "Correct!"
                showQuestionOne(questionTwo);
            } 
            else {
                var wrong = document.querySelector("#right-wrong");
                wrong.textContent = "Wrong!"
                showQuestionOne(questionTwo);
            }

        });
    });

}


var questionTwo = {
    title: "The condition in an if / else statement is enclosed within _____.",
    alternatives: ["quotes", "curly brackets", "parentheses", "square brackets"],
    rightAnswer: 2
};
function showQuestionTwo (q) {
    
    var titleDiv = document.querySelector("#first-question")
    titleDiv.textContent = q.title;

    var answers = document.querySelectorAll(".button-answers");
    answers.forEach(function(element, index){
        element.textContent=q.alternatives[index];

        element.addEventListener('click', function(){
            if (q.rightAnswer === index ) {
                console.log("Correct Answer!");
            } 
            else {
                console.log ("Wrong Answer!");
            }

        });
    });

}






// var section1 = document.querySelector("#section-1");
// var firstQuestion = document.queryCommandValue("#first-question");
// var buttonAnswersDiv1 = document.querySelector("#button-answers-div-1");
// var buttonAnswers = document.querySelector(".button-answers-1");

// buttonAnswers = true;

// var userAnswersFirst;

// section1.setAttribute("style", "display:none;");

// function firstAnswers() {
//     if (buttonAnswers=true) {
//         console.log ("nice!")

//     }
// }



