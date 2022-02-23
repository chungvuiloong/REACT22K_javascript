// Animation for hero banner

let darkSky = document.querySelector("#darkSky");
let stars = document.querySelector("#stars");
let moon = document.querySelector("#whiteMoon");
let meteor = document.querySelector("#meteor");

let backMountains = document.querySelector("#backMountains");

// let stars = document.querySelector("#stars");
// let stars = document.querySelector("#stars");
// let stars = document.querySelector("#stars");

window.addEventListener("scroll", () => {
  let yPosition = window.scrollY;

  stars.style.left = yPosition * 0.25 + "px";
  stars.style.top = yPosition * 0.25 + "px";

  meteor.style.left = yPosition * 1 + "px";
  meteor.style.top = yPosition * 1 + "px";

  moon.style.marginTop = yPosition * 1.25 + "px";

  backMountains.style.top = yPosition * 0.1 + "px";
});
