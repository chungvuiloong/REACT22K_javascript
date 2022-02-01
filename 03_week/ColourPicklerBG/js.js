let form = document.querySelector("form");

let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");

let direction = document.querySelector("#direction");

const setGradient = () => {
  console.log(color1.value);
  console.log(color2.value);
  document.body.style.backgroundImage = `linear-gradient( ${direction.value}, ${color1.value},${color2.value})`;
};

form.addEventListener("change", setGradient);
