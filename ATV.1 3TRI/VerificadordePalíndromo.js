const prompt = require("prompt-sync")();

const palavra = prompt("Digite uma palavra: ");

const invertida = palavra.split("").reverse().join("");

if (palavra === invertida) {
    console.log("É um palíndromo!");
} else {
    console.log("Não é um palíndromo.");
}
