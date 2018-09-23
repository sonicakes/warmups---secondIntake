// Serge Says
// Serge answers 'Sure.' if you ask him a question.

// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).

// He says 'Fine. Be that way!' if you address him without actually saying anything.

// He answers 'Whatever.' to anything else.

// Create a function that takes an input and returns Serge's response.

const sergeSays = function(output){
    let answer = '';
    //check if the output is a question
    if(output[output.length - 1] === "?"){
        answer = "Sure."
}

    //check if the output is all caps
    if(output == output.toUpperCase()){
        answer = "Woah, chill out!";
    }
    //check if the output is empty
    if(output == ""){
        answer = "Fine! Be that way.";
    }
 
    //check if the output is anything else
    if(answer == ""){
        answer = "Whatever!";
    }
    return answer;
}
console.log(sergeSays("What is your name?"));
console.log(sergeSays("HELLO GEORGE"));
console.log(sergeSays("Close, but no cigar"));
console.log(sergeSays(""));
console.log(sergeSays("Hedgehogs are the cutest animals in the world"));
 