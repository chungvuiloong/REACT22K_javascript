let form = document.querySelector("form");

let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");

let up = document.querySelector("#top");
let right = document.querySelector("#right");
let bottom = document.querySelector("#bottom");
let left = document.querySelector("#left");
let direction;

// let direction = document.querySelectorAll('input[name="direction"]');

// const setGradient = () => {
//   console.log(color1.value);
//   console.log(color2.value);

//   let selectedValue;

//   for (const sel of direction) {
//     if (sel.checked) {
//       selectedValue = sel.value;
//     }
//   }

//   console.log(selectedValue);

//   document.body.style.backgroundImage = `linear-gradient(${selectedValue},${color1.value},${color2.value})`;
// };

const setGradient = () => {
  console.log(color1.value);
  console.log(color2.value);

  document.body.style.backgroundImage = `linear-gradient(${direction},${color1.value},${color2.value})`;
};

form.addEventListener("change", setGradient);
