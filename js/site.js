// Obtain users input
function getValue() {
    let word = document.getElementById("userInput").value;
    //let results = document.getElementById("msg");
    let returnMSG = isPalindrome(word);
    showResults(returnMSG);
}

// Determine if input is a palindrome
function isPalindrome(word) {
 if(word.length > 4) {
     showResults(word)
 } else {
     console.log("Not good");
 }
}

//Display results
function showResults() {
    console.log(word);
}