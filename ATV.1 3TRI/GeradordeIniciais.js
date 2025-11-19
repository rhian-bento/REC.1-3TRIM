const prompt = require("prompt-sync")();

const nome = prompt("Digite o nome completo: ");

const partes = nome.trim().split(" ");
let iniciais = "";

for (let p of partes) {
    iniciais += p.charAt(0).toUpperCase();
}

console.log("Iniciais:", iniciais);
