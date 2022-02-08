const emptyUserName = () => {
  const value = document.querySelector("user-name").value;
  return value;
};

// Sample usage - do not modify
document.querySelector("#empty-btn").addEventListener("click", () => {
  emptyUserName();
});
