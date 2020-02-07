var p1btn = document.querySelector("#p1");
var p2btn = document.getElementById("p2");
var resetbtn = document.getElementById("reset");
var p1display = document.querySelector("#p1score");
var p2display = document.querySelector("#p2score");
var numInput = document.querySelector("input");
var victoryScoreDisplay = document.querySelector(" p span");
var p1score = 0;
var p2score = 0;
var gameEnd = false;
var victoryScore = 5;

p1btn.addEventListener("click", function(){
    if(!gameEnd){
        p1score++;
        if(p1score === victoryScore) {
            p1display.classList.add("winner");
            gameEnd= true;
        }
        p1display.textContent = p1score;
    }
});

p2btn.addEventListener("click", function(){
    if(!gameEnd){
        p2score++;
        if(p2score === victoryScore) {
            p2display.classList.add("winner");
            gameEnd= true;
        }
        p2display.textContent = p2score;
    }
});

function reset(){
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameEnd = false;
}

resetbtn.addEventListener("click", function() {
    reset();
});


numInput.addEventListener("change", function(){
    victoryScoreDisplay.textContent = this.value;
    victoryScore = Number(this.value);
    reset();
});