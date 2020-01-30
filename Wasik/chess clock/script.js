var timer = document.querySelector(".time");
var darkSquare = {
    second : 0,
    minute  : 0
}
var lightSquare = {
    second : 0,
    minute  : 0
}
var timerRunning = 0;
var timeLimit = 10;
var reset = document.querySelector("#reset");
var blackPieceTimer = document.querySelector(".black .time");
var whitePieceTimer = document.querySelector(".white .time");

function clock(){
    if(timerRunning === 1){
        whitePieceTimer.textContent  = lightSquare.minute + ":" + lightSquare.second;
        lightSquare.second++;
        if(lightSquare.second > 60){
            lightSquare.minute++;
            lightSquare.second = 0;
        }
        if(lightSquare.minute === timeLimit){
             lightSquare.minute = 0;
             lightSquare.second = 0;   
            alert("times up black wins")}
    }else if(timerRunning === 2){
        blackPieceTimer.textContent  = darkSquare.minute + ":" + darkSquare.second;
        darkSquare.second++;
        if(darkSquare.second > 60){
            darkSquare.minute++;
            darkSquare.second = 0;
        }
        if(darkSquare.minute === 1){
            darkSquare.minute = 0;
            darkSquare.second = 0;
            alert("times up white wins")}

    }
}
document.body.addEventListener("keyup",function(e){
    if(e.keyCode === 32){
        if(timerRunning === 1){timerRunning=2}
        else if(timerRunning === 2){timerRunning = 1}
        else if(timerRunning === 0){timerRunning = 2}
    }
})
reset.addEventListener("click",function(e){
    darkSquare = {
        second : 0,
        minute  : 0
    }
    lightSquare = {
        second : 0,
        minute  : 0
    }
    blackPieceTimer.textContent  = darkSquare.minute + ":" + darkSquare.second;
    whitePieceTimer.textContent  = lightSquare.minute + ":" +lightSquare.second;
    timerRunning = 0;
})
setInterval(clock,1000)