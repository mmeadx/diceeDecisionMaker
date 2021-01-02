console.log("index.js loaded");

// Choose random numbers 1-6
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

// Print in console to check
console.log(randomNumber1);
console.log(randomNumber2);

// Assign dice names with random number
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";


var randomImageSource1 = "images/" + randomDiceImage1; // images/dice1.png - images/dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; // images/dice1.png - images/dice6.png

// Select image from html
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

// Set Source 
image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

// Else/If to display winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "User 1 Wins!";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "User 2 Wins!";
}

else {
    document.querySelector("h1").innerHTML = "Draw: Roll Again";
}

