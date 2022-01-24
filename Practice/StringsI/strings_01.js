'use strict';

/**
Complete the function getCharCount such that it returns the number of
characters in the str parameter that it receives.

Test:
returns a number
returns the correct length

 * @param {string} str
 */


var sentence = "testing";
var myName = "Jere";

function getCharCount (str) {
    return str.length;
}

console.log("The number of characters " +  getCharCount(sentence));

// Sample usage - do not modify
console.log(getCharCount("Sam")); // 3
console.log(getCharCount("Alex 123")); // 8
console.log(getCharCount("Charley is here")); // 15
