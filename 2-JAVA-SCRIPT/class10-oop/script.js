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
console.log(control1.upper());
console.log(control1.down());
