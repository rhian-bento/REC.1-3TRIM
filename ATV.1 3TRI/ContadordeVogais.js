const prompt = require("prompt-sync")();

const frase = prompt("Digite uma frase: ").toLowerCase();
let contador = 0;

for (let c of frase) {
    if ("aeiou".includes(c)) {
        contador++;
    }
}

console.log("Total de vogais:", contador);
