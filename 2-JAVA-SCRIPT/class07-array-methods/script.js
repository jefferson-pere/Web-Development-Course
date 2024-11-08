//
/// MAP (immutable) não muda valor original
//
const numbers = [10, 20, 30];
console.log(numbers.map((num) => num + 10));

// const devs = [
//   { name: "Nereu", salary: 6500 },
//   { name: "Fred", salary: 5800 },
//   { name: "Neemias", salary: 7000 },
// ];

// console.log(
//   devs.map((dev) => {
//     return dev;
//   })
// );

const devs = [
  { name: "Nereu", salary: 6500 },
  { name: "Fred", salary: 5800 },
  { name: "Neemias", salary: 7000 },
];

//com aumento
console.log(devs.map((dev) => dev.salary * 1.1));

// const resp = prompt("Digite o nome: ").toLocaleLowerCase();
// const resultFilter = devs.filter((dev) => dev.name.toLocaleLowerCase().includes(resp));

// console.log(resultFilter);

// sort
const numbers2 = [
  33,
  1,
  3,
  "Zebra",
  "a",
  "A",
  6,
  2,
  11,
  "Emanuel",
  "emanuel",
  "Antônio",
];

console.log(numbers2);
numbers2.sort();
numbers2.sort((a, b) => a - b);

console.log(numbers2);

numbers2.sort((a, b) => {
  if (typeof a == "string" && typeof b == "string") {
    a = String(a).toLocaleLowerCase();
    b = String(b).toLocaleLowerCase();
  }

  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log(numbers2);

// reduce
const expenses = [20, 32, 38, 220, 50, 100];
const total = expenses.reduce((a, b) => a + b, 1000);
console.log(total);
