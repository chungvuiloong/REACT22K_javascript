const getShortTextParagraphs = () => {
  let getPara = document.querySelectorAll("p");
  return [...getPara]
    .filter((p) => p.textContent.length < 10)
    .map((p) => p.textContent);
};

////Ottos solutions
// const getShortTextParagraphs = () => {
//   return [...document.querySelectorAll("p")]
//     .filter((p) => p.textContent.length < 10)
//     .map((p) => p.textContent);
// };

// Sample usage - do not modify
console.log(getShortTextParagraphs());
