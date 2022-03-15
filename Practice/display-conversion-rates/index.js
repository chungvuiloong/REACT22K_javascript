
let baseCurrency = document.querySelector("#base-currency"); // The value is always 1
let results = document.querySelector(".result");

let targetCurrency = document.querySelector("#target-currency"); // Always changing
let conversionResults = document.querySelector("#conversion-result");

let input = document.querySelector("input");
let secondConversion = document.querySelector("#conversion-results");
// baseCurrency.selectedIndex

// ${baseCurrency.value}
function getConversionRates () {

  fetch("https://v6.exchangerate-api.com/v6/27f485a6f4826176bdcb3490/latest/" + baseCurrency.value) //USD
  .then(response => response.json())
  .then(currency => {

    let rate = currency.conversion_rates[targetCurrency.value];

    conversionResults.textContent = `${rate.toFixed(2)}`;
    secondConversion.textContent = Number(rate).toFixed(2) * input.value;
  });

};

// getConversionRates(); WORKS
baseCurrency.addEventListener("change", getConversionRates);
targetCurrency.addEventListener("change", getConversionRates);
input.addEventListener("change", getConversionRates);
input.addEventListener("submit", getConversionRates);




