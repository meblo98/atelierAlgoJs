const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Définition des devises et du taux de change
const EUR_TO_FCFA = 650; // 1 EUR = 650 FCFA
const FCFA_TO_EUR = 1 / EUR_TO_FCFA; 

// Fonction de conversion
function convertCurrency(montant, fromCurrency, toCurrency) {
  if (fromCurrency === "EUR" && toCurrency === "FCFA") {
    return montant * EUR_TO_FCFA;
  } else if (fromCurrency === "FCFA" && toCurrency === "EUR") {
    return montant * FCFA_TO_EUR;
  } else {
    throw new Error(`Conversion from ${fromCurrency} to ${toCurrency} not supported`);
  }
}

// Demander à l'utilisateur de saisir la somme, la devise de départ et la devise cible
rl.question('Veuillez saisir le montant à convertir : ', (amountInput) => {
  const montant = parseFloat(amountInput);

  if (isNaN(montant)) {
    console.log('Montant invalide. Veuillez entrer un nombre.');
    rl.close();
    return;
  }

  rl.question('Veuillez saisir la devise de départ (EUR ou FCFA) : ', (fromCurrency) => {
    rl.question('Veuillez saisir la devise cible (EUR ou FCFA) : ', (toCurrency) => {
      try {
        const convertedAmount = convertCurrency(montant, fromCurrency.toUpperCase(), toCurrency.toUpperCase());
        console.log(`${montant} ${fromCurrency.toUpperCase()} = ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`);
      } catch (error) {
        console.error(error.message);
      } finally {
        rl.close();
      }
    });
  });
});
