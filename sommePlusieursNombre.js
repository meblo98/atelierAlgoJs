const readline = require('readline');

let sum = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('Entrez un nombre (ou 0 pour terminer) : ');
rl.prompt();

rl.on('line', (line) => {
  const num = parseInt(line, 10);
  if (num === 0) {
    console.log(`La somme des nombres saisis est : ${sum}`);
    rl.close();
  } else {
    sum += num;
    rl.prompt();
  }
});

rl.on('close', () => {
  process.exit(0);
});