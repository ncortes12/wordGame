var Word = require("./word");
var inquirer = require('inquirer')

var makeWord = ["CROW", "KHALEESI", "MAESTER", "RAVEN" , "WINTER", "DRAGON" , "THRONE"]
var gameWord = "";
var wins = 0;
var loses = 0;
var count = 0;
var turns = 10;
var checkWord = "";


function game() {

    var randWord = Math.floor((Math.random() * makeWord.length));
    // console.log(randWord);
    gameWord = new Word(makeWord[randWord]);
    checkWord = makeWord[randWord];
    //    console.log(gameWord);

    gameWord.wordLetter();
    playGame();



}
function playGame() {
    
        inquirer.prompt([
            {
                type: "input",
                message: "Pick a letter",
                name: "userLetter"
            }
        ])
        .then(function (guessedLetter) {
            var userGuessedLetter = guessedLetter.userLetter;
            
            gameWord.guessLetter(userGuessedLetter);
            count ++;
            turns --;
            console.log("You have " + turns + " turns left.")
            
            
            console.log(gameWord.strArr.join(" "));
            
            var gameWordCheck = gameWord.strArr.join("");
           
            if (gameWordCheck === checkWord) {
                    wins ++;
                  console.log("you win!" + "\nWins: " + wins + "\nLoses: " + loses)
                  playAgain();
            }
            else if (turns === 0){
                        looses ++;
                console.log("ahh sorry you lose" + + "\nWins: " + wins + "\nLoses: " + loses)
                playAgain();
            }
            else if (count < 10){
                    playGame();
                }
            
            })
    }

function playAgain (){
    inquirer.prompt([
        {type:"confirm",
        message: "Would you like to play again?",
        name: "confirm",
        default: true
    }])
    .then(function(inquirerResponse){
        turns = 10;
        count = 0;
        if (inquirerResponse.confirm){
            game();
        }
        else{console.log ("Cool, have a nice day!")}
    })
    

    
}


game();



