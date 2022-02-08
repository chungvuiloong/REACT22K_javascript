// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'
let sideBar = document.querySelector("#menu-sidebar");
let appSideBar = document.querySelector("#app-sidebar");

sideBar.addEventListener("click", () => {
  appSideBar.classList.toggle("show");
});
