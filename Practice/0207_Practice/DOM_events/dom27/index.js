// TODO: log the button's textContent when it's clicked

const button = document.querySelector("#my-button");

button.addEventListener("click", (event) => {
  console.log(button.textContent);
});
