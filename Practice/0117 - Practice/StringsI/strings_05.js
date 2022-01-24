'use strict';

/**
Complete the function getLastCharacter such that it returns
the last character of the name parameter it receives.

Tests:
returns a string
returns last character


 * @param {string} name
 */


var sentence = "testing";
var myName = "Jere";

function getLastCharacter (name) {
    return name.charAt(name.length - 1);
}
console.log("My last character is " +  getLastCharacter(myName));

// Sample usage - do not modify
console.log(getLastCharacter("Sam")); // "m"
console.log(getLastCharacter("Alex")); // "x"
console.log(getLastCharacter("Charley")); // "y"
