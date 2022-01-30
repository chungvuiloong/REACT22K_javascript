// Loop Assignments (Don’t use arrays)

// 1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 1) console.log(i);
}

// 2. Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 …

for (i = 2; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i, 100 - i);
  }
}

// 3. Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

while (true) {
  let distance = prompt("Enter distance in km (Enter 0 to quit):");
  if (distance === 0) break;
  let time = prompt("Enter time in h:");
  console.log("Average speed is " + distance / time);
}

// 4. Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.

let evenCount = 0;
let numCount = 0;

do {
  value = prompt(`Whats your number?`);
  numCount++;

  if (value % 2 == 1) {
    evenCount++;
  }
} while (numCount != 4);

console.log(evenCount);

// 5. Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

let numCount = -1;
let sum = 0;
let average = 0;

do {
  value = parseInt(prompt("Enter number "));

  sum += value;

  numCount++;

  average = sum / numCount;
} while (value != 0);

console.log(average);

// 6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

let numCount = -1;
let sum = 0;
let average = 0;

do {
  value = parseInt(prompt("Enter number "));

  sum += value;

  numCount++;

  average = sum / numCount;
} while (numCount != 25);

console.log(average);

// 7. Make a program that ask first one number from the user. - After that the program asks: ”Do you want to continue giving numbers?(y/n)”.
//   - If user answers y, the program continues to ask another number.
//   - If user answers n, program ends.
//   - In the end program prints out average of the numbers.

// 8. Make a program that asks first how many numbers user wants to give to the program.
// - After that program asks those numbers.
// - In the end program prints out the smallest number that user gave.

// 9. Make a program that asks ten numbers and in the end prints out two biggest numbers.

// 10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.
