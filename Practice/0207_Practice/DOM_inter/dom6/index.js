const getAllLinks = () => {
  const aLink = [...document.querySelectorAll("a")];

  return aLink;
};

// Sample usage - do not modify
console.log(getAllLinks());
