//função
// function addNumbers() {
//   let num1 = 225;
//   let num2 = 376;
//   const result = num1 + num2;
//   return result;
// }
// const resultSum = addNumbers();
// console.log(resultSum);
//
//
// codigo reduzido
function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(225, 376));
//
//
//
//função de calcular media de aluno
function calcAvg(n1, n2) {
  const avg = (n1 + n2) / 2;
  return avg;
}

console.log(calcAvg(7, 8));
console.log(calcAvg(8, 8));
console.log(calcAvg(4, 10));
//
//
//
//

//const text = prompt(); //cmd de entrada
//alert(text); //cmd de saida

const myName = prompt("Digite seu nome:"); //cmd de entrada
const grande1 = Number(prompt("Nota 1: "));
const grande2 = Number(prompt("Nota 1: "));
const studentAvg = calcAvg(grande1, grande2);
const sumGrades = addNumbers(grande1, grande2);

alert(
  `oi, ${myName}, seja bem-vindo! A soma das notas é ${sumGrades} e sua media é: ${studentAvg}`
); //cmd de saida
