/**
 * @param {string} name
 */
const setWelcomeMessage = (name) => {
  const element = document.querySelector("#welcome-message");
  const message = "Hello " + "<strong> " + name + " </strong>";
  return (element.innerHTML = message);
};

// Sample usage - do not modify
setWelcomeMessage("Sam");
setWelcomeMessage("Alex");
