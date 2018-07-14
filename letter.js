

function letter(chLetter) {
    this.trueLetter = chLetter.toUpperCase();
    
    this.guess = false;
    this.display = function () {
        if (this.guess) {
            return this.trueLetter;
        }
        else {
            return "_";
            
        }
    }
    this.guessFunc = function (userLetter){
        if (userLetter.toUpperCase() === this.trueLetter){
            
            this.guess = true;
         
          

        }
        else {
            
        this.guess = false;
        

            
          
        }
    }

}




// var test = new letter("t")
// test.guessFunc("l");
// console.log(test.display());



module.exports = letter;
