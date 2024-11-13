const box = document.querySelector(".box");
const title = document.querySelector("h1");
console.log(box);
console.log(title.innerHTML);

box.innerHTML = "text"; // add text na div
box.innerHTML = "<p>Parágrafo</p>"; // add html

title.style.color = "red";

///cal
const calculator = document.querySelector(".calculator");

for (let i = 0; i < 10; i++) {
  console.log(i);
  box.innerHTML += `<button class="btn">${i}</button>`;
}

const buttonsCalc = document.querySelectorAll(".btn");
buttonsCalc.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.innerHTML);
    num1 = Number(button.innerHTML);
    if (num1) {
      num2 = Number(button.innerHTML);
    } else {
      num1 = Number(button.innerHTML);
    }
  });
});

let num1;
let num2;

function basic() {
  console.log(num1 + num2);
  num1 = null;
  num2 = null;
}



//ao passar o mouse
title.addEventListener("mouseenter", () => {
  console.log("title");
});
