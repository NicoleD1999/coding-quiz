
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
var finalScore = 100;
var timeInterval;

timer.setAttribute("style", "text-align: right;  margin-top:-35px;")
initalSection.setAttribute("style", "text-align: center;")
buttonDiv.setAttribute("style", "display:flex; justify-content:center; align-items:center;" )

function startTime() {
    timeInterval = setInterval(function(){
    timeLeft--;
    finalScore--;
    timer.textContent= "Time Left " + timeLeft;
   }, 1000);
}

button.addEventListener ('click', function() {
    startTime();
    initalSection.setAttribute("style","display: none;");
    section1.setAttribute("style", "display;");
    showQuestionOne(questionOne);

})
highscores.addEventListener ('click', function(){
    finalScreen.removeAttribute("class")
    finalScreen.setAttribute("style", "margin-left:700px;")
    initalSection.setAttribute ("style", "display: none;")
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
                showQuestionTwo(questionTwo);
            } 
            else {
                var wrong = document.querySelector("#right-wrong");
                wrong.textContent = "Wrong!"
                timeLeft=timeLeft-10;
                timer.textContent=timeLeft;
                finalScore=finalScore-10;
                console.log(finalScore);
                showQuestionTwo(questionTwo);
            }

        });
    });

};

var questionTwo = {
    title: "The condition in an if / else statement is enclosed within ________.",
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
                showQuestionThree(questionThree);
                var right = document.querySelector("#right-wrong");
                right.textContent = "Correct!"
                console.log("Correct Answer!");
            } 
            else {
                showQuestionThree(questionThree);
                var wrong = document.querySelector("#right-wrong");
                wrong.textContent = "Wrong!"
                console.log ("Wrong Answer!");
            }

        });
    });

}

var questionThree = {
    title: "Arrays in JavaScript can be used to store ______.",
    alternatives: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    rightAnswer: 3
};


function showQuestionThree (q) {
    
    var titleDiv = document.querySelector("#first-question")
    titleDiv.textContent = q.title;

    var answers = document.querySelectorAll(".button-answers");
    answers.forEach(function(element, index){
        element.textContent=q.alternatives[index];

        element.addEventListener('click', function(){
            if (q.rightAnswer === index ) {
                var right = document.querySelector("#right-wrong");
                right.textContent = "Correct!"
                showQuestionFour(questionFour);
                console.log("Correct Answer!");
            } 
            else {
                var wrong = document.querySelector("#right-wrong");
                wrong.textContent = "Wrong!"
                showQuestionFour(questionFour);
                console.log ("Wrong Answer!");
            }

        });
    });

}

var questionFour = {
    title: "String values must be enclosed within ______ when being assigned to variables.",
    alternatives: ["commas", "curly brackets", "quotes", "parentheses"],
    rightAnswer: 1
};


function showQuestionFour (q) {
    
    var titleDiv = document.querySelector("#first-question")
    titleDiv.textContent = q.title;

    var answers = document.querySelectorAll(".button-answers");
    answers.forEach(function(element, index){
        element.textContent=q.alternatives[index];

        element.addEventListener('click', function(){
            if (q.rightAnswer === index ) {
                showQuestionFive(questionFive);
                var right = document.querySelector("#right-wrong");
                right.textContent = "Correct!"
                console.log("Correct Answer!");
            } 
            else {
                showQuestionFive(questionFive);
                var wrong = document.querySelector("#right-wrong");
                wrong.textContent = "Wrong!"
                console.log ("Wrong Answer!");
            }

        });
    });

}

var questionFive = {
    title: "A very useful tool used during development and debugging for printing content to the debugger is",
    alternatives: ["JavaScript", "Terminal/Bash", "for loops", "console.log"],
    rightAnswer: 3
};
var form = document.querySelector("#form-submit");
form.setAttribute("style", "display: none;");

function showQuestionFive (q) {
    
    var titleDiv = document.querySelector("#first-question")
    titleDiv.textContent = q.title;
    var result = document.querySelector('#final-score');
    var answers = document.querySelectorAll(".button-answers");
    answers.forEach(function(element, index){
        element.textContent=q.alternatives[index];

        element.addEventListener('click', function(){
            if (q.rightAnswer === index ) {
                var right = document.querySelector("#right-wrong");
                right.textContent = "Correct!"
                form.setAttribute("style", "display;")
                section1.setAttribute("style", "display: none;")
                result.textContent = 'Your score is ' + finalScore;
                console.log("Correct Answer!");
                clearInterval(timeInterval);
            } 
            else {
                var wrong = document.querySelector("#right-wrong");
                wrong.textContent = "Wrong!"
                form.setAttribute("style", "display;")
                section1.setAttribute("style", "display: none;")
                result.textContent = 'Your score is ' + finalScore;
                console.log ("Wrong Answer!");
                clearInterval(timeInterval);
            }

        });
    });

}
var initialsInput = document.querySelector("#input");
var finalScreen = document.querySelector("#final-screen");
var scoreListItem = document.createElement("li")

function submitScore (){
 var getScores= JSON.parse(localStorage.getItem("highscores")) || []
 var scoreModel = {
     initials: initialsInput.value, 
     score: finalScore,

 }
 getScores.push(scoreModel)
 window.localStorage.setItem("highscores", JSON.stringify(getScores))
 form.setAttribute("style", "display: none;");
 finalScreen.removeAttribute("class");
 finalScreen.setAttribute("style", "margin-left:700px;")
}
function showScores(){
    var getScores= JSON.parse(localStorage.getItem("highscores")) || []
    getScores.forEach(function(showScore){
        var scoreListItem = document.createElement("li")
        scoreListItem.textContent = showScore.initials;
        var listDiv= document.getElementById("scores")
        listDiv.append(scoreListItem)
    })
}
showScores();
var submitEl = document.querySelector("#submit");
submitEl.onclick=submitScore
var goBack = document.querySelector("#go-back")

goBack.addEventListener('click', function(){
window.location.reload();
})
var clearHighscores = document.querySelector("#clear-highscores")


// function getUserInput() {
    
//     if (input.length > 3) {
//         result.textContent = 'Your score is ' + finalScore;
//         //alert('Username must contain at least 3 characters');
//     } else {
//         result.textContent = 'Your score is ' + finalScore;
//         //alert(nameField);
//     }
//     }

// submitEl.addEventListener('click', function(){
//     event.preventDefault();
//     getUserInput();
    
// });




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



