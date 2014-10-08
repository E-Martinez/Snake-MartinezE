var snake;

var context;
var screenWidth;
var screenHeight;

gameDraw();

function gameIntialize() {
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.height = screenHeight;
}

function gameLoop() {
    
}

function gameDraw() {
    context.fillStyle = "rgb(228, 240, 7)";
    context.fillRect(0, 0, screenWidth, screenHeight);
}