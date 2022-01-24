'use strict';

/**
Complete the function getFirstCharacter such that it returns
the first character of the name parameter it receives.

Tests: returns a string
returns first character

 * @param {string} name
 */

var sentence = "testing";
var myName = "Jere";

function getFirstCharacter (name) {
    return name.charAt(0);
}
console.log("My first character is " +  getFirstCharacter(myName));


// Sample usage - do not modify
console.log(getFirstCharacter("Amsterdam")); // "A"
console.log(getFirstCharacter("Japan")); // "J"
