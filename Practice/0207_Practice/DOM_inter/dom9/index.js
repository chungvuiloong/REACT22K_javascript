const logLinksTexts = () => {
  const links = document.querySelectorAll("a");
  return [...links].forEach((link) => link.textContent);
};

// Sample usage - do not modify
logLinksTexts();
