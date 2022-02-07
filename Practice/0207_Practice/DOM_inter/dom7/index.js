const getDivElements = () => {
  return document.querySelector("div").textContent;
};

const getFooterLinks = () => {
  return document.querySelector("#footer-wrapper").textContent;
};

const getAboutLinks = () => {
  return document.querySelectorAll("a.about").textContent;
};

// Sample usage - do not modify
console.log(getDivElements());
console.log(getFooterLinks());
console.log(getAboutLinks());
