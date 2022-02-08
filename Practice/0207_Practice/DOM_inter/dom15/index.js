/**
 * @param {string} name
 */
const setWelcomeMessage = (name) => {
  const nameSelector = document.querySelector("#name");
  const message = `Hello <strong> ${name} </strong>`;
  return (nameSelector.innerHTML = message);
};

// Sample usage - do not modify
setWelcomeMessage("Sam");
setWelcomeMessage("<h2>You have been hacked</h2>");
