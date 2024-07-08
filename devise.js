// Définition des devises et du taux de change
const EUR_TO_FCFA = 650; // 1 EUR = 650 FCFA
const FCFA_TO_EUR = 1 / EUR_TO_FCFA; 

// Fonction de conversion
function convertCurrency(amount, fromCurrency, toCurrency) {
  if (fromCurrency === "EUR" && toCurrency === "FCFA") {
    return amount * EUR_TO_FCFA;
  } else if (fromCurrency === "FCFA" && toCurrency === "EUR") {
    return amount * FCFA_TO_EUR;
  } else {
    throw new Error(`Conversion from ${fromCurrency} to ${toCurrency} not supported`);
  }
}

// Exemple d'utilisation
const amount = 100; // 100 EUR
const fromCurrency = "EUR";
const toCurrency = "FCFA";

const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
console.log(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);