calculateBMI = () => {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;
  let result = ([weight / (height * height)] * 10000).toFixed(1); // works
  let diagnosis;

  if (result > 30) {
    diagnosis = `Your BMI is ${result}. You are obese! You need to layoff the burgers`;
  } else if (29.9 < result || result > 25) {
    diagnosis = `Your BMI is ${result}. You are pre-obese! You need to eat less`;
  } else if (24.9 < result || result > 18.5) {
    diagnosis = `Your BMI is ${result}. You are boring! So normal....`;
  } else if (result < 18.5) {
    diagnosis = `Your BMI is ${result}. You need to eat more!`;
  } else {
    diagnosis = `Something is wrong`;
  }

  document.querySelector("#answer").textContent = diagnosis;
  console.log(result, diagnosis);
};
