const form      = document.getquerySelector("form");
const ul        = document.getquerySelector("ul");
const button    = document.getquerySelector("button");
const input     = document.getquerySelector("#item");

const listMaker = () => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

})