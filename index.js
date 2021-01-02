console.log("index.js loaded");

// Choose random numbers 1-6
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomNumber3 = Math.floor((Math.random() * 6) + 1);
var randomNumber4 = Math.floor((Math.random() * 6) + 1);

// Print in console to check
console.log("User 1 - Die 1 : " + randomNumber1);
console.log("User 1 - Die 2 : " + randomNumber3);
console.log("User 2 - Die 1 : " + randomNumber2);
console.log("User 2 - Die 2 : " + randomNumber4);

// Assign dice names with random number
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomDiceImage3 = "dice" + randomNumber3 + ".png";
var randomDiceImage4 = "dice" + randomNumber4 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1; // images/dice1.png - images/dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; // images/dice1.png - images/dice6.png
var randomImageSource3 = "images/" + randomDiceImage3; // images/dice1.png - images/dice6.png
var randomImageSource4 = "images/" + randomDiceImage4; // images/dice1.png - images/dice6.png

// Select image from html
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
var image3 = document.querySelectorAll("img")[2];
var image4 = document.querySelectorAll("img")[3];

// Set Source 
image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);
image3.setAttribute("src", randomImageSource3);
image4.setAttribute("src", randomImageSource4);

// Add Each User's Dice and print in Console
var userOneTotal = randomNumber1 + randomNumber3;
console.log("User One Total: " + userOneTotal);
var userTwoTotal = randomNumber2 + randomNumber4;
console.log("User Two Total: " + userTwoTotal);


// Else/If to display winner
if (userOneTotal > userTwoTotal) {
    document.querySelector("h1").innerHTML = "User 1 Wins!";
}

else if (userTwoTotal > userOneTotal) {
    document.querySelector("h1").innerHTML = "User 2 Wins!";
}

else {
    document.querySelector("h1").innerHTML = "Draw: Roll Again";
}

