// TODO: clicking on 'Toggle dark mode' should add/remove 'dark' class on <html>

let darkButton = document.querySelector("#theme-btn");

darkButton.addEventListener("click", () => {
  document.querySelector("html").classList.add("dark");
});

// darkButton.addEventListener("click", () => {
//   document.querySelector("html").classList.remove("dark");
// });
