// WEEK 4 intro to JavaScript

//Output Js

document.getElementById("WEEK4").innerHTML = "WEEK 4: Introduction to JavaScript";


// Pop out Alert 

function MyFunction() {
    alert("Hello and Welcome to WEEK 4 of the course!");
}

//comfirm alert
function confirmFunction() {
    var result = confirm("Are you sure you want to continue?");
    if (result) {
        alert("You pressed OK!");
    } else {
        alert("You pressed Cancel!");
    }
    document.getElementById("confirm").innerHTML = result ? "You pressed OK!" : "You pressed Cancel!";
}


//prompt alert
function promptFunction() {
    var userInput = prompt("Please enter your name:");
    if (userInput) {
        alert("Hello, " + userInput + "!");
    } else {
        alert("You didn't enter your name.");
    }
    document.getElementById("prompt").innerHTML = userInput ? "Hello, " + userInput + "!" : "You didn't enter your name.";
}
// console log with function
function consoleFunction() {
    console.log("This is a message logged to the console.");
    document.getElementById("console").innerHTML = "Welcome to WEEK 4 Paw Paw!";
}

// variables and data types



//function

function showMessage() {
    document.getElementById("output").textContent = "🎉 Great job! You just ran JavaScript!";
  }

  //confitt
  function launchConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}
function MyFunction() {
    var x = 5; // Declare a variable
    var y = 10; // Declare another variable
    var z = x + y; // Add the two variables
    alert("The sum of x and y is: " + z); // Show the result in an alert box
}