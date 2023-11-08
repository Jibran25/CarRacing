var redCar =  document.getElementById("redcar");
var yellowCar =  document.getElementById("yellowcar");
var result =  document.getElementById("result");
var score =  document.getElementById("score");
var game =  document.getElementById("game");
var counter = 0;



redCar.addEventListener("animationiteration",  function(){
    var randomLeft = Math.floor(Math.random() * 3) * 130;
    redCar.style.left = randomLeft + "px";
    counter++;
})