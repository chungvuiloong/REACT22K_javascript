"use strict";

/**
Write a function named pluralize that:
takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".

/**
 * @param {string}
 */

function pluralize(noun, number) {
  // If value is 0
  if (number === 0) {
    return `no ${noun}s`;
  }

  //If value is 1
  else if (number === 1) {
    return `${number} ${noun}`;
  }

  // If value is more than 1
  else if (number > 1) {
    //If value is special, GOOSE
    if (noun == "goose") {
      return `${number} geese`;
    }

    //If value is special, SHEEP
    else if (noun == "sheep") {
      return `${number} sheep`;
    }

    //If value is regular, just add s
    else {
      return `${number} ${noun}s`;
    }
  }
}

console.log("I have " + pluralize("cat", 0));
console.log("I have " + pluralize("cat", 1));
console.log("I have " + pluralize("sheep", 2));
