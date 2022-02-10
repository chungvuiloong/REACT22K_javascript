class Car {
  constructor(license, maker, model, color, price, owner) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.color = color;
    this.price = price;
    this.owner = owner;
  }
}

const carArr = [
  { license: "", maker: "", model: "", color: "", price: "", owner: "" },
];

submit = (e) => {
  e.preventDefault();
  let license = document.querySelector("#licenseInput").value;
  let maker = document.querySelector("#makerInput").value;
  let model = document.querySelector("#modelInput").value;
  let color = document.querySelector("#colorInput").value;
  let price = Number(document.querySelector("#priceInput").value);
  let owner = document.querySelector("#ownerInput").value;

  let newCar = new Car(license, maker, model, color, price, owner);

  carArr.push(newCar);
  console.log("Pressed submit button");
  console.table(carArr);
};

document.querySelector("#submit").addEventListener("click", submit);
