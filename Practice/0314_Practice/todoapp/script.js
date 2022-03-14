const form      = document.querySelector("form");
const ul        = document.querySelector("ul");
const button    = document.querySelector("button");
const input     = document.getElementById("item");

let itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

const listMaker = (text) => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();



    listMaker(input.value);
    input.value = "";
});