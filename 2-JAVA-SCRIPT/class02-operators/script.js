let num1 = 2;
let num2 = 3;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(81 ** (1 / 2));
console.log("---------------------");

// assigment atribuição
num1 = 10;
num2 = num2 + 2;
num1 = num1 - 6;

num1 += 4;

console.log(num1);
console.log(num2);
console.log("---------------------");

// comparison (comparação)()
console.log(10 == 10);
console.log(10 != 10);
console.log(10 > 10);
console.log(9 < 10);
console.log(9 <= 10);
console.log(9 >= 10);
console.log(10 === 10); // extremamente iguais
console.log(10 === "10"); // extremamente iguais
console.log("---------------------");

// logical (logicos: && ||)

const card = true;
const credit = false;
const cash = true;

console.log(credit && card); // && Se os dois forem verdade
console.log(credit || cash); // || Se uma for verdadeira
