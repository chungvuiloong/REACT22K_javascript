// TODO: The user can select a currency by clicking on it (add the class `active`). However, only one currency can be chosen at a time.

// const currencyButtons = document.querySelectorAll("button");

// currencyButtons.forEach((currencyButton) => {
//   currencyButton.addEventListener("click", (event) => {
//     // console.log(currencyButton.textContent);
//     // currencyButton?.classList?.contains("active").remove("active");
//     // currencyButton?.classList?.toggle("active");
//   });
// });

const buttons = document.querySelectorAll(".card");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    event.currentTarget.classList.toggle("active");
  });
});
