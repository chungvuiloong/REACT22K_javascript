'use strict';

/**
Complete the function shoutMyName such that it returns the name parameter
it receives all in upper case.

Tests:returns a string
makes string uppercase

 * @param {string} name
 */

var sentence = "testing";
var myName = "Jere";

function shoutMyName (name) {
    return name.toUpperCase();
}


// Sample usage - do not modify
console.log(shoutMyName("Sam")); // "SAM"
console.log(shoutMyName("Charley")); // "CHARLEY"
console.log(shoutMyName("alex")); // "ALEX"
