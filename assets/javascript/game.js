
var win =0;
var lose=0;
var guessLeft=9;
var guessSoFar=0;
var compLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var alphabetLength = compLetters.length;
var winNum = document.getElementById("win");
var loseNum = document.getElementById("lose");
var guessLeftNum = document.getElementById("guess-left");
var wrongGuess = document.getElementById("guess-wrong");
var randNum = Math.floor(Math.random() * alphabetLength);
var randLetter = compLetters[randNum];
var theirGuessArray = []
console.log(randLetter);

document.onkeyup = function(event) {
    
    var userLetter = event.key;
    theirGuessArray.push(userLetter);
    if (userLetter===randLetter) {
        win++;
        randLetter = compLetters[Math.floor(Math.random() * alphabetLength)];
        console.log(randLetter);
        theirGuessArray = [];
        guessLeft = 9;
        newFunction(); 
    } else {
        guessLeft--;
        newFunction(); 
    }
    winNum.textContent = win;
    guessLeftNum.textContent = guessLeft;
    console.log(theirGuessArray);
    writeArray(theirGuessArray);
    wrongGuess.textContent = theirGuessArray;
    
};


function newFunction() {
    if (guessLeft <= 0) {
        guessLeft = 9;
        guessLeftNum.textContent = guessLeft;
        lose++;
        loseNum.textContent = lose;
        theirGuessArray =[];
        randLetter = compLetters[Math.floor(Math.random() * alphabetLength)];
        console.log(randLetter);
    }
};

function writeArray(arr) {
    for (i=0; i<arr.length; i++) {
        arr[i];
    }

};