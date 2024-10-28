//string

console.log("test");

let concept = "prototyp (chain)";
let myName = "Jeff Pereira";

console.log(myName.__proto__);
console.log(myName.toLocaleLowerCase()); //tranforma em minusculo
console.log(myName.toLocaleUpperCase()); //tranforma em Maiusculo

console.log(myName.slice(1)); // corta a quantidade de letras (1)
console.log(myName.slice(0, -7)); // corta a quantidade de letras começo e final

console.log(concept.length); // quantidade de caracteres ou nomes
console.log(concept.indexOf("c")); // indica onde o caractere está

// mumbers

let num1 = 123456789;
let num2 = 5.4321;

console.log(String(num1).length); // quantidade de caract(se for numere colocar "string")
console.log(num2.toFixed(2)); //colocar casas decimais(2) (vira String)

console.log(Math.sqrt(81)); // fazer calculos
console.log(Math.pow(2, 10)); // potenciação
console.log(Math.abs(num2)); // quanto distancia de zero

console.log(Math.trunc(num2)); // deixa o número cheio sem decimal
console.log(Math.trunc(num2)); // deixa o número cheio sem decimal

//mais utilizados
console.log(Math.round(5.5)); // arredonda o número (0/4 para baixo) (5/9 para cima)
console.log(Math.ceil(5.1)); // arredonda o número sempre para cima
console.log(Math.floor(5.9)); // arredonda o número sempre para baixo

console.log(Math.random()); // cria números aleatórios entre 0 e 1
console.log(Math.ceil(Math.random() * 10)); // cria números aleatórios entre 1 e 10
console.log(Math.floor(Math.random() * 10)); // cria números aleatórios entre 0 e 9
console.log(Math.round(Math.random() * 10)); // cria números aleatórios entre 0 e 10

const times = ["Corinthians", "Flamengo", "Vasco", "Fortaleza", "Ceará", "São Paulo"];

const randomNumber = Math.floor(Math.random() * times.length);
console.log(times[randomNumber]);
