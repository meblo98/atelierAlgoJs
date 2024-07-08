const readline = require("readline");

let nombre = [];
let sum = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt('Saisir un nombre (ou "quitter" pour calculer la moyenne): ');
rl.prompt();

rl.on("line", (line) => {
  if (line.trim() === "quitter") {
    rl.close();
  } else {
    let num = parseFloat(line);
    if (isNaN(num)) {
      console.log("Entrée invalide. Veuillez saisir un nombre.");
    } else {
      nombre.push(num);
      sum += num;
    }
    rl.prompt();
  }
});

rl.on("close", () => {
  if (nombre.length === 0) {
    console.log("Vous n'avez pas saisi de nombre.");
  } else {
    let moyenne = sum / nombre.length;
    console.log(`La moyenne des nombres est ${moyenne}`);
  }
  process.exit(0);
});
