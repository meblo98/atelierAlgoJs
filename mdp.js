const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

rl.question('Entrez un mot de passe : ', (password) => {
  if (passwordRegex.test(password)) {
    console.log('Mot de passe valide !');
  } else {
    console.log('Mot de passe trop faible. Il doit contenir au moins 8 caractères, une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial.');
  }
  rl.close();
});