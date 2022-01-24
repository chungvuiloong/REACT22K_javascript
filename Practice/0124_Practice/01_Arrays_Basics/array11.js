"use strict";

/**
Complete the function sumOddNumbers such that it returns the sum of all the odd numbers
from the numbers parameter it receives.

/**
 * @param {number[]} numbers
 */
function sumOddNumbers(numbers) {
  let result = numbers.filter(function filterOddNum(number) {
    return number % 2;
  });

  //In the new array, it is sum
  const sum = result.reduce(function (a, b) {
    return a + b;
  }, 0);

  return sum;
}

// Sample usage - do not modify
console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
