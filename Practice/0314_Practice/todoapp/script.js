const form      = document.getquerySelector("form");
const ul        = document.getquerySelector("ul");
const button    = document.getquerySelector("button");
const input     = document.getElementById("item");

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