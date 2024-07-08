const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Entrez un nombre : ', (number) => {
  const num = parseInt(number, 10);
  if (isNaN(num)) {
    console.log('Erreur : veuillez entrer un nombre valide.');
    rl.close();
    return;
  }

  console.log(`Table de multiplication de ${num} :`);
  for (let i = 0; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }

  rl.close();
});