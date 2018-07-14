
var Letter = require("./letter");


function word(word) {
  this.word = word;
  this.letters = [];
  this.strArr = [];
  this.wordLetter = function () {
    var splitWord = word.split("");
    // console.log(splitWord);
    for (var i = 0; i < splitWord.length; i++) {
      this.letters.push(new Letter(splitWord[i]));
      // console.log(splitWord[i])
      // console.log(this.letters);
      this.strArr.push("_");

    }
    // console.log(this.strArr.join(" "));

  }




  this.guessLetter = function (character) {
    // console.log(character);
    for (w = 0; w < this.letters.length; w++) {
      // console.log(this.letters[w])
      if ("_" === this.strArr[w]) {
        this.letters[w].guessFunc(character);

        this.strArr[w] = this.letters[w].display();
        
        }
     



    }
    this.strArr.join(" ");
  }


}


module.exports = word;
// var testWord = new word("taco");
// testWord.wordLetter();
// testWord.guessLetter("a")



