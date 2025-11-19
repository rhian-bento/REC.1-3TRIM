const prompt = require("prompt-sync")();

const frase = prompt("Digite uma frase: ");
const palavra = prompt("Digite uma palavra para buscar: ");

if (frase.includes(palavra)) {
    console.log("A palavra está na frase.");
} else {
    console.log("A palavra NÃO está na frase.");
}
