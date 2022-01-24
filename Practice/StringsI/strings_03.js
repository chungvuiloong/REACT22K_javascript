'use strict';
/**
Complete the function lowerName such that it returns
the name parameter it receives all in lower case.

Tests: returns a string
makes string lowercase

 * @param {string} name
 */

var sentence = "testing";
var myName = "Jere";

function lowerName (name) {
    return name.toLowerCase();
}
console.log("My name is " +  lowerName(myName));

// Sample usage - do not modify
console.log(lowerName("Sam")); // "sam"
console.log(lowerName("ALEX")); // "alex"
