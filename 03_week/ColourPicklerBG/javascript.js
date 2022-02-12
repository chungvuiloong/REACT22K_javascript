let form = document.querySelector("form");
let section = document.querySelector("button");

let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");

let direction = document.querySelectorAll('input[name="direction"]');

// Margits solution
const setGradient = () => {
  console.log(color1.value);
  console.log(color2.value);

  let selectedValue;

  for (const sel of direction) {
    if (sel.checked) {
      selectedValue = sel.value;
    }
  }

  //  for (const sel of direction) {
  //    if (sel.checked) {
  //      selectedValue = sel.value;
  //    }
  //  }

  console.log(selectedValue);

  document.body.style.backgroundImage = `linear-gradient(${selectedValue},${color1.value},${color2.value})`;
};

form.addEventListener("change", setGradient);

// Click Counter
let clicks = 0;
document.addEventListener("click", (event) => {
  clicks++;

  if (clicks > 1) {
    console.log(` ${clicks} clicks` + direction.value);
  } else {
    console.log(` ${clicks} click` + direction.value);
  }
});
