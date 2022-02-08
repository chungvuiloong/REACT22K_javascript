const emptyUserName = () => {
  const arrNames = [];
  const value = arrNames.push(document.querySelector("#user-name").value);
  return arrNames;
};

// Sample usage - do not modify
document.querySelector("#empty-btn").addEventListener("click", () => {
  emptyUserName();
});
