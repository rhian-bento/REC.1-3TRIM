const prompt = require("prompt-sync")();

const frase = prompt("Digite uma frase: ");

const modificada = frase.replace(/a/gi, "e");

console.log("Frase modificada:", modificada);
