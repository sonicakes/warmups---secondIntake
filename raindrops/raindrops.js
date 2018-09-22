// Warmup - Raindrops
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc)
// and output the following:

// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
console.log("connected");

const raindrops = function(num){
    //create a variable that holds an empty string so we can attach strings to it later
    let result = '';
    //if number contains 3 as a factor
    if(num % 3 === 0){
        result += "Pling";
    }
    if (num% 5 === 0) {
        result += "Plang";
    }
    if(num % 7 === 0){
        result += "Plong";
    }
    // at this point, if we gone through all the conditions above and there none have been met,
    // it means that result variable will be empty 
    //- hence it's  a number/string that hasnt got the factor of the numbers we need!
    if(result === ""){
        result = num;
    }

        return result;
  
}
console.log(raindrops(28));
console.log(raindrops(1755));
console.log(raindrops(9));
console.log(raindrops(34));


