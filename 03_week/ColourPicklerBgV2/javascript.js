let form = document.querySelector("form");
let html = document.querySelector("html");
let selectedValue = ``;
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");

let buttons = document.querySelectorAll("Button");

// let direction = document.querySelectorAll('button[name="direction"]');

const setGradient = () => {
  console.log(color1.value);
  console.log(color2.value);

  document.querySelector("#left").onclick = () => {
    selectedValue = document.querySelector("#left").value;
    console.log(selectedValue); // works
  };

  document.querySelector("#right").onclick = () => {
    selectedValue = document.querySelector("#right").value;
    console.log(selectedValue); // works
  };

  html.style.backgroundImage = `linear-gradient(${selectedValue},${color1.value},${color2.value})`;
};

form.addEventListener("click", setGradient);
