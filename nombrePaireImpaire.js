const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Entrez une liste d\'entiers séparés par des espaces : ', (input) => {
  const numbers = input.split(' ').map(Number);
  const result = numbers.map((num) => `${num} : ${num % 2 === 0 ? 'Pair' : 'Impair'}`);
  console.log(result.join('\n'));
  rl.close();
});