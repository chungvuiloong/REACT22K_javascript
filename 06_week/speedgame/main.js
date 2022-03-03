let score = 0;

let container = document.querySelector(".circleContainer");
let circleButton = container.querySelector(".class");
console.log(container.children[0]);

//WORKING Shows default 0 score
document.querySelector("score").textContent = score;

//WORKING Number of elements (3)
let numCircle = document.querySelector(".circleContainer").childElementCount;

for (let i = 1; i < numCircle; i++) {
  console.log(container.children[i]);
}
