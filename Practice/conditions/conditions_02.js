/**
Complete the function getNextAge such that it 
    - returns the age next year (by adding 1 to the current age).
    Note that the age is provided by the user in a text box (which you can try in the browser tab).
    
    - when the text box is empty, the function returns NaN. 
    We need to fix that and make it show 0 instead of NaN.

Tests:
Implements getNextAge()
Handles empty text box

 * @param {string} age
 */

function getNextAge(age) {
  if (age) {
    return age + 1;
  } else if (" ") {
    return 0;
  } else {
    return "Default";
  }
}

console.log(getNextAge());
