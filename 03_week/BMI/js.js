calculateBMI = () => {
  let height = document.querySelector("#height").value;
  let heightSquare = height * height;
  let weight = document.querySelector("#weight").value;

  let BMI = ((weight / heightSquare) * 10000).toFixed(1);

  let text;

  BMI > 30
    ? (text = `My BMI is ${BMI}. You are obese! You need to layoff the burgers`)
    : 29.9 < BMI && BMI > 25
    ? (text = `My BMI is ${BMI}. You are pre-obese! You need to eat less`)
    : 24.9 < BMI && BMI > 18.5
    ? (text = `My BMI is ${BMI}. You are boring! So normal....`)
    : BMI < 18.5
    ? (text = `My BMI is ${BMI}. You need to eat more!`)
    : `N/A`;

  document.querySelector("#answer").innerHTML = text;
};
