const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome completo: ");

console.log("Nome limpo:", nome.trim());
