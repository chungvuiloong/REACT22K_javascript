'use strict';
/**
Complete the function capitalize such that it capitalizes the name parameter it receives.
There's no capitalize method in JavaScript, so you have to write it yourself.

Look at the sample usage to understand what capitalization means, then look at the hints
if it's still not clear.

Tests:
returns a string
returns capitalized word

 * @param {string} word
 */


function capitalize(word) {
    // First make everything lowercase
    let lowerCase = word.toLowerCase();
    
    // Second make first letter uppercase
    let capitalize = lowerCase[0].toUpperCase() + lowerCase.substring(1, lowerCase.length +1);
    return capitalize;

}

// Sample usage - do not modify
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"
