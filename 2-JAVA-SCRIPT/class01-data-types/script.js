let myName = "Jefferson"; // string
let age = 22; // mumber
const cpf = "222-222-222-22"; // string
let isAdmin = true; // boolean
// const = não muda | let = pode variar

myName = "Jefferson Pereira";
// cpf = "dasasd";

console.log(myName);
console.log(cpf);
console.log(isAdmin);

console.log(typeof myName);
console.log(typeof age);
console.log(typeof cpf);
console.log(typeof isAdmin);

console.log("jefferson" + " " + "Pereira" + " " + "Silva");
document.write("Bem-vindo, " + myName);
console.log(age + 1 - 1); //type cohesion para juntar
console.log(Number("2") + 3); // type conversion // converter

// templete literals - String
console.log(`Meu nome é ${myName} e voto ${age}!`);

// array (vector or list) = []
const filmList = ["Matrix", "Interestellar", "Shrek", "Get Out", "Split"];

console.log(filmList);
console.log(typeof filmList);

console.log(filmList[0]);
console.log(filmList[-1]);

console.log(filmList[1]);
console.log(filmList[2]);
console.log(filmList[3]);
// N.A.N

const pokedex = [
  { name: "Charmander", level: 6 },
  { name: "Bulbasour", level: 5 },
  { name: "Squirtle", level: 4 },
];

console.log(pokedex);
console.log(typeof pokedex);
console.log(pokedex[0]);
console.log(pokedex[2]);
console.log(pokedex[0].name);
console.log(pokedex[0].level);
console.log(pokedex[-1]);

console.log(person);
console.log(typeof person);
console.log(person.name);
console.log(person.age);
console.log(person["profession"]);

console.log(`O ${pokedex[0].name} está no level ${pokedex[0].level}`);
