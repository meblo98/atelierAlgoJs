const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Entrez une phrase : ', (phrase) => {
  rl.question('Entrez l\'élément à chercher : ', (element) => {
    const count = phrase.split(element).length - 1;
    console.log(`L'élément "${element}" apparait ${count} fois dans la phrase.`);
    rl.close();
  });
});

rl.on('close', () => {
  process.exit(0);
});