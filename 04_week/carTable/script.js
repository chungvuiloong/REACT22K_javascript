class Car {
  constructor(license, maker, model, color, owner, price, discount) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.color = color;
    this.owner = owner;
    this.price = price;
    this.discount = discount;
  }
}

const carArr = [
  {
    license: "",
    maker: "",
    model: "",
    color: "",
    owner: "",
    price: "",
    discount: "",
  },
];

searchCar = (e) => {
  // e.preventDefault();
  let search = document.querySelector("#search").value; // works

  let rows = document.querySelector("#table").querySelectorAll("tr");

  // console.log(rows[0]);
  console.log(rows[1]);
  console.log(rows[2]);

  for (var i = 0; i < rows.length; i++) {
    // var column = rows[i].querySelectorAll("td");
    // result = column[0].innerHTML.toUpperCase();
    console.log(rows.length);
  }
};

resetCar = (e) => {
  e.preventDefault();
  document.querySelector("#licenseInput").value = "";
  document.querySelector("#makerInput").value = "";
  document.querySelector("#modelInput").value = "";
  document.querySelector("#colorInput").value = "";
  document.querySelector("#ownerInput").value = "";
  document.querySelector("#priceInput").value = "";
};

submitCar = (e) => {
  e.preventDefault();
  let license = document.querySelector("#licenseInput").value;
  let maker = document.querySelector("#makerInput").value;
  let model = document.querySelector("#modelInput").value;
  let color = document.querySelector("#colorInput").value;
  let owner = document.querySelector("#ownerInput").value;
  let price = Number(document.querySelector("#priceInput").value);
  // let discount = (price) => price / 100; test algorithm

  let discount = (price) => {
    if (price > 20000) {
      return price * 0.75;
    } else if (price <= 4999) {
      return price * 0.9;
    } else {
      return price * 0.85;
    }
  };

  let newCar = new Car(
    license,
    maker,
    model,
    color,
    owner,
    price,
    discount(price)
  );

  carArr.push(newCar);

  // Creates a table and inserts the new row
  const table = document.querySelector("#table");
  const row = table.insertRow(1); //this insets new row

  const licenseRow = row.insertCell(0);
  const makerRow = row.insertCell(1);
  const modelRow = row.insertCell(2);
  const colorRow = row.insertCell(3);
  const ownerRow = row.insertCell(4);
  const priceRow = row.insertCell(5);
  const discountRow = row.insertCell(6);

  // collects the data from array and appends to the table
  licenseRow.textContent = newCar.license;
  makerRow.textContent = newCar.maker;
  modelRow.textContent = newCar.model;
  colorRow.textContent = newCar.color;
  ownerRow.textContent = newCar.owner;
  priceRow.textContent = newCar.price;
  discountRow.textContent = newCar.discount;
};

document.querySelector("#submit").addEventListener("click", submitCar);
document.querySelector("#reset").addEventListener("click", resetCar);
document.querySelector("#searchButton").addEventListener("click", searchCar);
