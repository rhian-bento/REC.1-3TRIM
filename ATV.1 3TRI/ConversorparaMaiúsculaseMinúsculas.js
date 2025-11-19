const prompt = require("prompt-sync")();

const texto = prompt("Digite uma palavra ou frase: ");

console.log("Maiúsculas:", texto.toUpperCase());
console.log("Minúsculas:", texto.toLowerCase());
