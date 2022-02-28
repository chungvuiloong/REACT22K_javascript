"use strict";

/**
Implement a function wait(milliseconds) that returns a promise and fulfills after milliseconds have elapsed.
Look at the sample usage to see how the function is being used.*/

const waitOneSecond = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      //   console.log("waiting");
    }, 1000);

    // resolve(console.log("resolved"));
  });
};

// const wait = () => {
//   return new Promise((resolve) => {
//     resolve(console.log("resolved"));
//   });
// };

// Sample usage - do not modify
waitOneSecond().then(() => {
  console.log("Done waiting.");
});
