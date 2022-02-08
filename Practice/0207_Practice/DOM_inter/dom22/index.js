const initClickGreeting = () => {
  let button = document.querySelector("#my-button");

  button.addEventListener("click", () => {
    // callback every time the button is clicked
    console.log("Welcome!");
  });
};

document.addEventListener("copy", () => {
  console.log("D0nt COpy my things!");
});

// Sample usage - do not modify
initClickGreeting();
