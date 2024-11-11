//
// TIMEOUT AND INTERVAL
console.log("antes");

// execuda com intervalos(varias vezes)
setInterval(() => {
  console.log("Interval");
}, 10000); //ms

//
// executa ao acabar o tempo (uma vez)
setTimeout(() => {
  console.log("Timeout");
}, 5000); //ms

//relogio
setInterval(() => {
  const clock = new Date();
  console.log(clock.toLocaleTimeString());
}, 100000); //ms

//promises

const urlAPI = "https://jsonplaceholder.typicode.com";

fetch(urlAPI + "/users")
  .then((Response) => Response.json()) //(then = se deu certo...)
  .then((data) => console.log(data));

console.log("final");
