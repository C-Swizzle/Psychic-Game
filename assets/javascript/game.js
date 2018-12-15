
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
console.log(randLetter);

document.onkeyup = function(event) {
    var userLetter = event.key;
    if (userLetter===randLetter) {
        win++;
    } else {
        guessLeft--;
    }
    winNum.textContent = win;
    guessLeftNum.textContent = guessLeft;
}
var something = function(event){
if (guessLeft<=0) {
    guessLeft += 9 ;
    guessLeftNum.textContent = guessLeft;
    lose++;
    loseNum.textContent = lose;
} else{

}
}
console.log("linked");