const prompt = require("prompt-sync")();

const nome1 = prompt("Digite o primeiro nome: ");
const nome2 = prompt("Digite o segundo nome: ");

if (nome1 === nome2) {
    console.log("Os nomes são iguais");
} else {
    console.log("Os nomes são diferentes");
}
