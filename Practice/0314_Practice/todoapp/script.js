const form      = document.querySelector("form");
const ul        = document.querySelector("ul");
const button    = document.querySelector("button");
const input     = document.getElementById("item");

let itemsArray = localStorage.getItem("items")
? JSON.parse(localStorage.getItem("items"))
: [];

//saving it locally
localStorage.setItem("items", JSON.stringify(itemsArray));

//getting it from local storage
const data = JSON.parse(localStorage.getItem("items"));

const listMaker = (text) => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    itemsArray.push(input.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    listMaker(input.value);
    input.value = "";
});

button.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    localStorage.removeItem("items", JSON.stringify(itemsArray));

});

data.forEach((item) => {
    listMaker(item);
});