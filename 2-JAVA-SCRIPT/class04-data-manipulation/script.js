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

const times = [
  "Corinthians",
  "Flamengo",
  "Vasco",
  "Fortaleza",
  "Ceará",
  "São Paulo",
];

const randomNumber = Math.floor(Math.random() * times.length);
console.log(times[randomNumber]);

// manipulação Arrey

const crush = [
  "Tiazinha",
  "Rambo",
  "Bozo",
  "Paola Oliveira",
  "Maria Rui Barbosa",
];
console.log(crush.length);
console.log(crush[1]);
crush[0] = "Feiticeira"; // substituir
console.log(crush);

let a = "Jeff";
a[1] = "M"; // String não muda(permanece a primeira)
console.log(a);

console.log(crush.join()); // separa os valores por virgula ou definir um separador
console.log("Bem vindo".replace(" ", "-")); //substitue um carac por outro(espaço por -)
console.log("Bem vindo a aula".replaceAll(" ", "-")); //substitue todos

console.log(crush.includes("Jeff")); // procura se o caractere está na lista
console.log(crush.includes("Rambo")); // procura se o caractere está na lista

console.log("jefferson Pereira Silva".split(" ")); // fragmenta o texto elimina o caract
console.log("jefferson Pereira Silva".split(" ")[0]); // fragmenta o texto e paga o caract

console.log(crush.reverse()); // reverte a lista
console.log("Jefferson".split("").reverse().join("")); // separa, reverte e junta

//função para contar quantas palavras tem
function wordCount(text) {
  const count = text.split(" ").length;
  return count;
}

const text =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, dignissimos eligendi culpa quaerat libero minima sint ipsam dolore optio qui, deleniti error eius explicabo maxime tempore illo! Illo, saepe tenetur!";
console.log(wordCount(text));

// console.log(
//   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, dignissimos eligendi culpa quaerat libero minima sint ipsam dolore optio qui, deleniti error eius explicabo maxime tempore illo! Illo, saepe tenetur!".split(" ").length);

const tvPrograms = ["Domingo Legal", "Fantastico", "Domingão do huck"];

//LIFO (pilha)

tvPrograms.pop(); // tirar um carac (sempre o ultimo)
tvPrograms.push("Bom dia e Cia"); // adciona um carac (ultimo)
tvPrograms.push("Tv Globinho"); // adciona um carac

//FIFO (Fila)

tvPrograms.unshift("TV Cruj"); //trocar o carac (inicio)
tvPrograms.unshift("Castelo Ratimbum"); //trocar o carac (inicio)
tvPrograms.shift(); //Apaga ou retira o carac (inicio)

tvPrograms.splice(0, 1); // Apagar (0 onde começa) (1 quantidade de carac apagados)
tvPrograms.splice(0, 1, "TV teste"); // apaga e adciona (0 onde começa) (1 quantidade de carac apagados) ("Tv teste" adcionado)

console.log(tvPrograms);

// DATE

const dateNow = new Date();
console.log(dateNow);
console.log(dateNow.toLocaleString("pt-BR")); // data e hora
console.log(dateNow.toLocaleDateString("pt-BR")); // data
console.log(dateNow.toLocaleTimeString("pt-BR")); // hora

console.log(
  dateNow.toLocaleString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
);

const birthday = new Date("1994-11-06 00:00:00");

console.log(birthday);
console.log((dateNow - birthday) / 1000 / 60 / 60 / 24 / 365.25);

console.log(dateNow.getFullYear());
console.log(birthday.getFullYear());
console.log(dateNow.getFullYear() - birthday.getFullYear());
