"use strict";

/**
Complete the function sumGrades such that it returns the sum of all the grades
it receives as a parameter.

/**
 * @param {number[]} grades
 */

//First Algorithm (Reduce function) WORKS
function sumGrades(grades) {
  const sum = grades.reduce(function (a, b) {
    return a + b;
  }, 0);

  return sum;
}

//Second Algorithm (For function) WORKS
function sumGrades(grades) {
  for (
    var i = 0, // The iterator
      length = grades.length, // Cache the array length
      sum = 0; // The total amount
    i < length; // The "for"-loop condition
    sum += grades[i++] // Add number on each iteration
  );
  return sum;
}

// Third Algorithm using eval WORKS BUT DONT USE IT
function sumGrades(grades) {
  return eval(grades.join(`+`));
}

// Sample usage - do not modify
console.log(sumGrades([15, 5, 10])); // 30
console.log(sumGrades([12, 10, 13, 19])); // 54
