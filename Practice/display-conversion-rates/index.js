
let baseCurrency = document.querySelector("#base-currency"); // The value is always 1
let targetCurrency = document.querySelector("#target-currency"); // Always changing

let input = document.querySelector("input");
let conversionResults = document.querySelector("#conversion-result"); // Always changing
let secondConversion = document.querySelector("#conversion-results"); // Converts based on inputs
// baseCurrency.selectedIndex

function getConversionRates () {

  fetch("https://v6.exchangerate-api.com/v6/27f485a6f4826176bdcb3490/latest/" + baseCurrency.value) //USD
  .then(response => response.json())
  .then(currency => {
    
    // Base value for the currency
    let rate = currency.conversion_rates[targetCurrency.value];

    // Shows the base value via conversion results & 
    // rounded two decimal places
    conversionResults.textContent = `${rate.toFixed(2)}`;

    //Inputted value and converted
    // rounded two decimal places
    secondConversion.textContent = (Number(rate) * input.value).toFixed(2);
  });

};

// getConversionRates(); WORKS
baseCurrency.addEventListener("change", getConversionRates);
targetCurrency.addEventListener("change", getConversionRates);
input.addEventListener("change", getConversionRates);
input.addEventListener("submit", getConversionRates);




