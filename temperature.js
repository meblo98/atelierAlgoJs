const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Entrez une température en degrés Celsius : ", (celsius) => {
  const fahrenheit = (parseFloat(celsius) * 9) / 5 + 32;
  console.log(
    `La température en degrés Fahrenheit est : ${fahrenheit.toFixed(2)}`
  );
  rl.close();
});
