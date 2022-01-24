'use strict';

/**
Complete the function skipFirstCharacter such that it returns all the characters except
the first one from the text parameter it receives.

Test:
returns a string
skips the first character

 * @param {string} text
 */


var sentence = "testing";
var myName = "Jere";

function skipFirstCharacter (name) {
    return name.substring(1, 4 );
}

console.log(skipFirstCharacter(myName));

// Sample usage - do not modify
console.log(skipFirstCharacter("Xcode")); // "code"
console.log(skipFirstCharacter("Hello")); // "ello"
