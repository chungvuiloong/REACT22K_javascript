// Animation for hero banner

let darkSky = document.querySelector("#darkSky");
let stars = document.querySelector("#stars");
let moon = document.querySelector("#whiteMoon");
// let blackMoon = document.querySelector("#moonHighlight");
let meteor = document.querySelector("#meteor");

let backMountains = document.querySelector("#backMountains");
let bottomCloud = document.querySelector("#bottomCloud");

let innerTentacles = document.querySelector("#innerTentacles");
let middleTentacles = document.querySelector("#middleTentacles");
let outerTentacles = document.querySelector("#outerTentacles");

// let stars = document.querySelector("#stars");
// let stars = document.querySelector("#stars");
// let stars = document.querySelector("#stars");

window.addEventListener("scroll", () => {
  let yPosition = window.scrollY;

  stars.style.left = yPosition * 0.05 + "px";
  stars.style.top = yPosition * 0.25 + "px";

  meteor.style.left = yPosition * 1 + "px";
  meteor.style.top = yPosition * 1 + "px";

  //   blackMoon.style.marginTop = yPosition * 0.6 + "px";
  moon.style.marginTop = yPosition * 1.25 + "px";
  bottomCloud.style.top = yPosition * 0.25 + "px";
  backMountains.style.top = yPosition * 0.1 + "px";

  // Moving Tentacles
  // innerTentacles.style.top = yPosition * 1 + "px";
  // middleTentacles.style.top = yPosition * 0.05 + "px";
  // outerTentacles.style.top = yPosition * 0.06 + "px";
});

let footer = document.querySelector("footer");

footer.addEventListener("scroll", () => {
  let yPosition = footer.scrollY;

  innerTentacles.style.top = yPosition * 1 + "px";
  middleTentacles.style.top = yPosition * 0.05 + "px";
  outerTentacles.style.top = yPosition * 0.06 + "px";
});

var rellax = new Rellax(".rellax");
