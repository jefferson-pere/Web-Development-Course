function control(temp) {
  console.log(temp);
}
control(17);

//OPP
class Control {
  constructor(temp, color) {
    this.color = color; //atributos
    this.temp = temp;
    this.isOn = true;
  }
  power() {
    //controle
    this.isOn = !this.isOn; // nega
    return "Plin!";
  }
  upper() {
    // this.temp += 1;
    // this.temp = this.temp + 1;
    if (this.temp < 30) {
      // até 30
      ++this.temp; // aumemta 1
    }
    return this.temp;
  }
  down() {
    if (this.temp > 16) {
      // até 16
      this.temp--;
    }
    return this.temp;
  }
}

const control1 = new Control(17, "Branco");
const control2 = new Control(20, "Preto");

console.log(control1.temp);
console.log(control1.color);
console.log(control2.color);
console.log(control1.isOn);
console.log(control1.power());
console.log(control1.isOn);
console.log(control1.upper());
console.log(control1.down());

//controle
const powerButton = document.querySelector(".power");
const upButton = document.querySelector(".up");
const downButton = document.querySelector(".down");
const displayValeu = document.querySelector(".display");

const airButton = new Control(17, "Cinza");

powerButton.addEventListener("click", () => {
  airButton.power();
  displayValeu.innerHTML = airButton.isOn ? `${airButton.temp}ºc` : "";
});

upButton.addEventListener("click", () => {
  displayValeu.innerHTML = `${airButton.upper()}ºc`;
});

downButton.addEventListener("click", () => {
  displayValeu.innerHTML = `${airButton.down()}ºc`;
});
