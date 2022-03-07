firstButton = document.querySelector("#circle1");
secondButton = document.querySelector("#circle2");
thirdButton = document.querySelector("#circle3");
startButton = document.querySelector(".start");
endButton = document.querySelector(".end");
overlay = document.querySelector(".overlay");

// let container = document.querySelector(".circleContainer");
// console.log(container);

//WORKING Shows default 0 score
const scoreText = document.querySelector("score").textContent;

const circles = document.querySelectorAll(".circle");

let active = 0;
let score = 0;
let pace = 1000;
let timer;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

circles.forEach((circle, i) =>
  circle.addEventListener("click", () => clickedCircle(i))
);

const clickedCircle = (i) => {
  i += 1;
  console.log("clicked circle was:", i);

  if (i !== active) {
    endGame();
  } else {
    score++;
    scoreText.textContent = score;
  }
};

const startGame = () => {
  console.log("Game Started");

  let nextActive = pickNew(active);

  circles[nextActive].classList.toggle("active");
  circles[active].classList.remove("active");

  active = nextActive;

  console.log("active circle:", active);

  timer = setTimeout(startGame, pace);
  pace = pace - 10;

  function pickNew(active) {
    let nextActive = getRndInteger(0, 3);

    if (nextActive != active) {
      return nextActive;
    } else {
      return pickNew(active);
    }
  }

  //   function correct () {

  //   }
};

const endGame = () => {
  console.log("Game ended");
  clearTimeout(timer);
  overlay.style.visibility = "visible";
  resultText.textContent = `Your final score was ${score}`;
};

const reloadGame = () => {
  window.location.reload();
};

startButton.addEventListener("click", startGame);
endButton.addEventListener("click", endGame);

////////////////////////////////////////////////////////////////

//WORKING Number of elements (3)
// let numCircle = document.querySelector(".circleContainer").childElementCount;

// for (let i = 0; i < numCircle; i++) {
//   console.log(container.children[i]);
// }

// firstButton.addEventListener("click", () => {
//   console.log("1 pressed");
// });

// secondButton.addEventListener("click", () => {
//   console.log("2 pressed");
// });

// thirdButton.addEventListener("click", () => {
//   console.log("3 pressed");
// });
