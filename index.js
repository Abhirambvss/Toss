
document.querySelector("button").addEventListener("click",randomNumberGenerator);

function randomNumberGenerator(){
var randomNumber;
randomNumber=Math.random();
randomNumber=Math.floor(randomNumber*6)+1;
var randomImage="images/dice"+randomNumber+".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);


var randomNumber2;
randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
var randomImage2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);

function playSound(name){
  var sound = new Audio("sounds/"+name+".mp3");
  sound.play();
}
if(randomNumber>randomNumber2)
{
  document.querySelector(".result").innerHTML = "🚩Player 1 Wins";
  playSound("tom-1");
}
else if (randomNumber2>randomNumber) {
    document.querySelector(".result").innerHTML = "Player 2 Wins🚩";
    playSound("tom-2");
}
else  {
  document.querySelector(".result").innerHTML = "🚩Draw🚩";
  playSound("crash");
}
}
