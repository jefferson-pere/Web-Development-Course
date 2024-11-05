//
/// MAP () não muda valor original
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
