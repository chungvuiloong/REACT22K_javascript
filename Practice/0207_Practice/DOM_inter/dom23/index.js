const initGetWeather = () => {
  let button = document.querySelector("#my-button");

  button.addEventListener("click", () => {
    button.textContent = "Loading...";
  });
};

// Sample usage - do not modify
initGetWeather();
