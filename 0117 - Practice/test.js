var sentence = "testing";
var myName = "Jere";


//////
function sum (num1, num2){
    return num1 + num2;
}

console.log("The sum is " + sum(1,2));

/////

function multiply (num1, num2) {
   return num1 * num2;
}

console.log("The multiplication is " +  multiply(2,2));

//////

function getCharCount (str) {
    return str.length;
}

console.log("The number of characters " +  getCharCount(sentence));

/////



function shoutMyName (name) {
    return name.toUpperCase();
}
console.log("My name is " +  shoutMyName(myName));

////

function lowerName (name) {
    return name.toLowerCase();
}
console.log("My name is " +  lowerName(myName));

////

function getFirstCharacter (name) {
    return name.charAt(0);
}
console.log("My first character is " +  getFirstCharacter(myName));

///
function getLastCharacter (name) {
    return name.charAt(name.length-1);
}
console.log("My last character is " +  getLastCharacter(myName));

////