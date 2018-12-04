var array = ['Cardinals', 'Falcons', 'Ravens', 'Bills', 'Panthers', 'Bears', 'Bengals', 'Browns', 'Cowboys', 'Broncos', 'Lions', 'Packers', 'Texans', 'Colts', 'Jaguars', 'Chiefs', 'Dolphins', 'Vikings', 'Patriots', 'Saints', 'Giants', 'Jets', 'Raiders', 'Eagles', 'Steelers', 'Chargers', 'Seahawks', 'Rams', 'Buccaneers', 'Titans', 'Redskins']
var guessedLetters =[];
var guessingWord = [];
var wins = 0; 
var guesses = 0; 
var gameOver = true;
var compChoice; 
var winnerAudio = document.getElementById("winnerAudio");
var loserAudio = document.getElementById('loserAudio');


function winnerSound()
{
    winnerAudio.loop = false; 
    winnerAudio.play();

}
function loserSound()
{
    loserAudio.loop = false; 
    loserAudio.play();

}
function newGame() {
    guesses = 0;
    gameOver = false;
    compChoice = array[Math.floor(Math.random() * array.length)].toLowerCase();
    guessingWord = [];
    guessedLetters = [];

    for(var i=0; i<compChoice.length; i++)
    {
        guessingWord.push("_");
    }
    replaceHTML();
    console.log(compChoice);
}

function replaceHTML(){
    userGuess.textContent="Enter a letter to guess!";
    currentString.textContent= "Updated String: ";
    for(var i = 0; i < guessingWord.length; i++){
        currentString.textContent += guessingWord[i];
    } 
    userGuesses.textContent = "You have guessed the following letters: "
    for(var i = 0; i < guessedLetters.length; i++){
        document.getElementById("userGuesses").textContent += guessedLetters[i];
    } 
    totalGuesses.textContent="You have guessed incorrectly " + guesses + " times.";
    if(10-guesses > 0){
        guessesRemaining.textContent = "You have " + (10 - guesses) + " incorrect guesses remaining.";
    }
    else
    {
        userGuess.textContent="YOU LOSE!";
        userGuesses.textContent = "Enter a new letter to start a new game!";
        currentString.textContent = "The word was: " + compChoice;
        loserSound();
        gameOver = true;

    }
}


document.onkeyup = function(event) {
    var userChoice = event.key.toLowerCase();
    var keyCode = event.keyCode;
    if(keyCode >= 64 && keyCode < 91){
            
            if(gameOver === true)
            {
                newGame();

            }

        if (gameOver === false)
        {
    
            if(guessedLetters.indexOf(userChoice) === -1)
                {
                    guessedLetters.push(userChoice); 
                    if (compChoice.indexOf(userChoice) === -1)
                {   
                            guesses = guesses + 1 ; 
                            replaceHTML();
                }
                else{
                        for (var i = 0; i < compChoice.length; i++) 
                        {
                             if(compChoice[i] === userChoice) 
                                {
                                     guessingWord[i] = userChoice;
                                     replaceHTML();
                                }
                        
                        }
                    }
                }
            else if(guessedLetters.indexOf(userChoice) >-1)
                {
                    alert("Select a letter you havent chosen before!");
                }    
    



        
        }
    else
    {
        newGame();
    }

    if(guessingWord.indexOf("_") === -1)
        {
            
            userGuess.textContent="YOU WIN!";
            userGuesses.textContent = "Enter a new letter to start a new game!";
            winnerAudio.play();
            gameOver = true;
            
        }
    }
    else{
        alert("You must enter a letter key!");
    }
    
}