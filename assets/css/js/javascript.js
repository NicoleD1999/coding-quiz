var body = document.body;
//text in header is going to be highscore & timer that stays there even if user clicks button
//----------------------------------------------Inital Screen-------------------------------------------------------------------------------------------
var nav = document.createElement("nav")
var div = document.createElement("div")
var highscores = document.createElement ("p")
var timer = document.createElement("p")
var initalSection = document.createElement ("section")
var h1El = document.createElement("h1");
var para = document.createElement("p")
var buttonDiv = document.createElement ("div")
var button = document.createElement("button")

var timeLeft = 5;

highscores.textContent = "View Highscores"
timer.textContent = "Time Left"
h1El.textContent = "Coding Quiz Challenge!🔥"
para.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorret answers will penalize your score AND time by ten seconds!"
button.textContent = "Let's Go!"

body.appendChild(nav);
body.appendChild(initalSection)
initalSection.appendChild(h1El);
initalSection.appendChild(para)
initalSection.appendChild(buttonDiv)
buttonDiv.appendChild (button)
nav.appendChild(div);
div.appendChild(highscores);
div.appendChild(timer);


timer.setAttribute("style", "text-align: right;  margin-top:-35px;")
h1El.setAttribute ("style", "text-align:center;")
para.setAttribute ("style", "text-align:center;")
buttonDiv.setAttribute("style", "display:flex; justify-content:center; align-items:center;" )

function startTime() {
    var timeInterval = setInterval(function(){
    timeLeft--;
    timer.textContent= "Time Left " + timeLeft;
    console.log (timeLeft);
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
section1.setAttribute("style", "display:none;");



