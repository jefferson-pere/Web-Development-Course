// ENQUANTO FOR
// while (true) {
//   console.log("AAA");
// }

let count = 0;
while (count < 10) {
  count += 1;

  if (count >= 3 && count <= 7) {
    continue;
    // break;
  }

  if (count % 2 == 0) {
    console.log(count);
  }
}
console.log("end");

// for = para cada
for (let count = 0; count < 10; count += 1) {
  console.log(count);
}
console.log("end");

////
const students = [
  { name: "Pelé", n1: 7, n2: 8 },
  { name: "Vinícius Jr", n1: 8, n2: 6 },
  { name: "Mané Garrincha", n1: 5, n2: 6 },
  { name: "Kroos", n1: 6, n2: 6 },
];

for (let i = 0; i < students.length; i++) {
  const avg = (students[i].n1 + students[i].n1) / 2;

  if (avg >= 7) {
    console.log(`${students[i].name}, Aprovado com média: ${avg}`);
  } else {
    console.log(`${students[i].name}, Reprovado com média: ${avg}`);
  }
}

// sorteio de 6 numeros
const numbers = [];

while (numbers.length < 6) {
  const draw = Math.ceil(Math.random() * 60);
  const numerFormatted = String(draw).padStart(2, 0);

  if (numbers.includes(numerFormatted)) {
    continue;
  } else {
    numbers.push(numerFormatted);
  }
}
console.log(numbers.sort((a, b) => a - b).join("-"));
