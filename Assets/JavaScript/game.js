var array = ['Cardinals', 'Falcons', 'Ravens', 'Bills', 'Panthers', 'Bears', 'Bengals', 'Browns', 'Cowboys', 'Broncos', 'Lions', 'Packers', 'Texans', 'Colts', 'Jaguars', 'Chiefs', 'Dolphins', 'Vikings', 'Patriots', 'Saints', 'Giants', 'Jets', 'Raiders', 'Eagles', 'Steelers', 'Chargers', '49ers', 'Seahawks', 'Rams', 'TBuccaneers', 'Titans', 'Redskins']
var guessedLetters =[];
var guessingWord = [];
var wins = 0; 
var guesses = 0; 
var gameOver = true;
var compChoice; 

function newGame() {
    gameOver === false;
    compChoice = array[Math.floor(Math.random() * array.length)].toLowerCase();
    guessingWord = [];
    guessedLetters = [];

    for(var i=0; i<compChoice.length; i++)
    {
        guessingWord.push("_");
    }
    replaceHTML();
}

function replaceHTML(){
    currentString.textContent= "Updated String: "
    for(var i = 0; i < guessingWord.length; i++){
        currentString.textContent += guessingWord[i];
    } 
    userGuesses.textContent = "You have guessed the following letters: "
    for(var i = 0; i < guessedLetters.length; i++){
        document.getElementById("userGuesses").textContent += guessedLetters[i];
    } 
    totalGuesses.textContent="You have guessed " + guesses + " times.";
    if(10-guesses > 0){
        guessesRemaining.textContent="You have " + 10-guesses + " guesses remaining.";
    }
    else
    {
        userGuess.textContent="YOU LOSE!";
        gameOver = true;
    }
}


document.onkeyup = function(event) {
    var userChoice = event.key.toLowerCase();
    console.log(userChoice);
    if (gameOver === false)
    {
        if(guessedLetters.indexOf(userChoice) === -1)
        {
            guessedLetters.push(userChoice); 
            for (var i = 0; i < compChoice.length; i++) {
                if(compChoice[i] === userChoice) 
                {
                    guessingWord[i] = userChoice;
                    replaceHTML();
                }
                else
                {
                    guesses++ ; 
                    replaceHTML();
                }
            }
        }
        else
        {
            alert("Select a letter you havent chosen before!");
        }

        if(guessingWord.indexOf("_") === -1)
        {
            document.getElementById("userGuess").textContent="YOU WIN!";
        }
    }
    else
    {
        console.log("In the else String");
        newGame();
    }
    
}