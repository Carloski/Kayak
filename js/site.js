// get Values from user input
function getValue() {
    //add "invisable" class to alert container.
    document.getElementById('alert').classList.add('invisible');

    //get user string from the page
    let userInput = document.getElementById('userInput').value;

    //check if string is palindrome
    let returnObj = checkPalindrome(userInput);

    //display our message to the screen
    displayMessage(returnObj);
}

//Check for a palindrome
function checkPalindrome(userInput) {
    userInput = userInput.toLowerCase();

    //use a regex to remove spaces and special characters
    let regex = /[^a-z0-9]/gi; //this will only return a through z and 0 through 9.
    userInput = userInput.replace(regex,''); //anything that's not in this match, replace it with an empty string

    //Use Object to store return message.
    let revString = [];
    let returnObj = {};

    //for loop to reverse the string
    for (let i = userInput.length - 1; i >= 0; i--) {
        revString += userInput[i];
    }

    //conditional statement to check if reversed string is equal to original string
    if (revString == userInput) {
        returnObj.msg = "YES! You've entered a Palindrome!"
    } else {
        returnObj.msg = "Opps, This isn't a palindrome :("
    }

    returnObj.reversed = revString;
    return returnObj;
}

//display a message to the DOM.
function displayMessage(returnObj) {
    document.getElementById("alert-heading").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reverse is: <strong><h3>${returnObj.reversed}</h3></strong> `;
    document.getElementById("alert").classList.remove('invisible');
}