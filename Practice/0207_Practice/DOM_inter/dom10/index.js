const getSelectedCurrencies = () => {
  let getSelectedCurrencies = document.querySelectorAll(".active");
  return [...getSelectedCurrencies].map((card) => card.textContent);
};

// Sample usage - do not modify
document.querySelectorAll(".cards .card").forEach((card) => {
  card.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
    console.log(getSelectedCurrencies());
  });
});
