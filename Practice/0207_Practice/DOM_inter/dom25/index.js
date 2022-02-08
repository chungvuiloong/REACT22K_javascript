// TODO: clicking on 'Toggle dark mode' should add/remove 'dark' class on <html>

let darkButton = document.querySelector("#theme-btn");

darkButton.addEventListener("click", (event) => {
  document.querySelector("html").classList.toggle("dark");
});
