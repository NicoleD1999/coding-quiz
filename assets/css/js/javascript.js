var body = document.body;
//text in header is going to be highscore & timer that stays there even if user clicks button
var header = document.createElement("header")
var highscores = document.createElement ("h4")
var timer = document.createElement("h4")
var h1El = document.createElement("h1");
var para = document.createElement("p")
var button = document.createElement("button")

highscores.textContent = "View Highscores"
timer.textContent = "Time Left"
h1El.textContent = "Coding Quiz Challenge!🔥"
para.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorret answers will penalize your score AND time by ten seconds!"
button.textContent = "Let's Go!"

body.appendChild(header);
body.appendChild(h1El);
body.appendChild(para)
body.appendChild (button)
header.appendChild(highscores);
header.appendChild(timer);
//--------------- ^ First Screen ^ --------------------------------------
