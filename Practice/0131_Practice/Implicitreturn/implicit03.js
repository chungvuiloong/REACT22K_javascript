"use strict";

/**
Complete the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).
Use an arrow function (implicit return is optional).
/**
 * @param {number} value
 */
getPositiveTemperatures = (arrsTem) =>
  arrsTem.filter((positiveTem) => positiveTem > 0);

// Sample usage - do not modify
console.log(getPositiveTemperatures([-5, 12, 3])); // [12,3]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1,4,10]
