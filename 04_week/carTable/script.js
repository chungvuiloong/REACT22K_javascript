// let submitButton = document.querySelector("#submit");

// class Car {
//   constructor() {
//     this.license = license;
//     this.maker = maker;
//     // this.model = model;
//     // this.owner = owner;
//     // this.price = price;
//     // this.color = color;
//   }
// }

// const carArrays = [];

// const addCar = (e) => {
//   e.preventDefault();

//   let license = document.querySelector("#licenseInput").value;
//   let maker = document.querySelector("#makerInput").value;
//   // let model = document.querySelector("#modelInput").value;
//   // let color = document.querySelector("#colorInput").value;
//   // let price = document.querySelector("#priceInput").value;
//   // let owner = document.querySelector("#ownerInput").value;

//   // let newCar = new Car(license, maker, model, color, price, owner);
//   let newCar = new Car(license, maker);

//   carArr.push(newCar);

//   submitButton.addEventListener("click", addCar);

// };

class Car {
  constructor(license, maker, model, color, price, owner) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}

let carArr = [];

submit = (e) => {
  e.preventDefault();
  let license = document.querySelector("#licenseInput").value;
  let maker = document.querySelector("#makerInput").value;

  let newCar = new Car(license, maker);

  carArr.push(newCar);
  console.log("Pressed submit button");
};

document.querySelector("#submit").addEventListener("click", submit);
