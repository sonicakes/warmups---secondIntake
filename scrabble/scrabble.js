console.log("connected to scrabble");
// Write a program that, given a word, computes the scrabble score for that word.

// scrabble("cabbage")
// # => 14
// Letter Values
// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10

const scrabbleScore = function(word){

    let sum = 0;
    let val;
    //turning a string into array to check each element's value
    let splitWord = word.split('');
    console.log(splitWord);
    //switch statements to check multiple conditions at once
    for (let index = 0; index < splitWord.length; index++) {
    
        switch(splitWord[index]){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "l":
            case "n":
            case "r":
            case "s":
            case "t":
                val = 1;
                console.log(val);
                break;
            case "d":
            case "g": 
                val = 2;
                console.log(val);
                break;
            case "b":
            case "c":
            case "m":
            case "p": 
                val = 3;
                console.log(val);
                break;
            case "f":
            case "h":
            case "v":
            case "w":
            case "y":
                val = 4;
                console.log(val);
                break;
            case "k":
                val = 5;
                console.log(val);
                break;
            case "j":
            case "x":
                val = 8;
                console.log(val);
                break;
            case "q":
            case "z":
                val = 10;
                console.log(val);
                break;
        }
        //finding the sum of all values
        sum +=val;
     
        
    }
    console.log(`the sum of the word ${word} is ${sum}`);
    
}
scrabbleScore("cabbage");
scrabbleScore("bridge");
scrabbleScore("zebra");
scrabbleScore("chameleon");


