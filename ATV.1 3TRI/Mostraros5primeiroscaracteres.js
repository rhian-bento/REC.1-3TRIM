const prompt = require("prompt-sync")();

const frase = prompt("Digite uma frase: ");

if (frase.length >= 5) {
    console.log("Primeiros 5 caracteres:", frase.substring(0, 5));
} else {
    console.log("A frase tem menos de 5 caracteres.");
}
