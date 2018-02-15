var Word = require("/Word.js");
var inquirer = require("inquirer"); 

var hangman = {
    guessesRemaining: 10,
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
                    name: "Choose",
                    type: "input",
                    message: "Choose a letter",

                }
            ])
    }