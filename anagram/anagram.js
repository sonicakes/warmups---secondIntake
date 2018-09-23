console.log("connected to anagram");
const anagram = function (word, arr) {
for (let el of arr){
    if(word.split('').sort().join('') === el.split('').sort().join('')){
        console.log(`${el} is an anagram of ${word}`);
   
}
}
}
//     let newArr;
//     let splitWord = word.split('');
//     splitWord.sort().toString();
//     console.log(splitWord.toString());

//     //check if the word had the same number of letters, i.e. the same length
//     for (i = 0; i < arr.length; i++) {
//         if (word.length === arr[i].length) {
//             console.log("this might be the word: " + arr[i]);
//             newArr = arr[i].split('');
//             //sort alphabetically
//             newArr.sort().toString();
//             console.log(newArr.toString());
        //  }//else{
        //     return;
        // }
        //check if the array letters of word includes the letters of those words 
        // if (splitWord.toString() === newArr.toString()) {
        //     console.log("this is anagram of " + word + ": " + newArr);

        //     return newArr;
        // } else {
        //     return "this never executes";
        // }
//     }

// }


anagram("listen", ["enlists", "banana", "google", "inlets"]);