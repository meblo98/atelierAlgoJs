const readline = require('readline');

const devinette = Math.floor(Math.random() * 100) + 1; // nombre aléatoire entre 1 et 100
let essai = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('Entrez un nombre : ');
rl.prompt();

rl.on('line', (line) => {
  const nombre = parseInt(line.trim());
  essai++;

  if (nombre < devinette) {
    if (essai < 3) {
      console.log('Encore plus haut!');
    } else if (essai < 5) {
      console.log('Vous y êtes presque...');
    } else {
      console.log('C\'est encore un peu plus haut...');
    }
  } else if (nombre > devinette) {
    if (essai < 3) {
      console.log('Encore plus bas!');
    } else if (essai < 5) {
      console.log('Vous y êtes presque...');
    } else {
      console.log('C\'est encore un peu plus bas...');
    }
  } else {
    console.log(`Félicitations! Vous avez trouvé la devinette en ${essai} essai(s)!`);
    rl.close();
  }

  rl.prompt();
}).on('close', () => {
  process.exit(0);
});