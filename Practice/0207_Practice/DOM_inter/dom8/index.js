const getNumberOfLinks = () => {
  return document.querySelector("a").textContent.length;
};

// Sample usage - do not modify
console.log(getNumberOfLinks()); // 5
