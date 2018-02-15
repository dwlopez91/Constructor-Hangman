var Word = require("/Word.js");
var inquirer = require("inquirer"); 

var random = Words[Math.floor(Math.random() * Words.length)];

var hangman = {
    wordToGuess: random,
    guessesRemaining: random.length,
    guessedLetters: [],
};

inquirer
    .prompt([
        {
        name: "start", 
        type: "list",
        message: "Do you want to play?",
        choices: ["Yes", "No"],
        }
    ]).then(function(){
        if (choices === "Yes") {
            startGame();
        }
        else {
            console.log("Bye!")
        }
    
    });

    function startGame() {
        inquirer
            prompt.apply([
                {
                    name: "chosenLetter",
                    type: "input",
                    message: "Choose a letter",
                }
            ]).then(guessedLetters.push(chosenLetter))
    }