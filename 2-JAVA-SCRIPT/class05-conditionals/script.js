// IF - ELSE

const age = 29;
const CNH = true;

if (age >= 18 && CNH) {
  // && precisa ser as duas verdadeiras
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}

//
console.log(1 > 2 > 3); // falso

if (3 > 2 && 2 > 1) {
  //correta
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// CHAVES OU BOTOES

const option = 5;

//botão
switch (option) {
  case 1: // caso
    console.log("Docinho");
    break;
  case 2: // caso
    console.log("Barra de chocolate");
    break;
  case 3: // caso
    console.log("Latinha de refrigerane");
    break;
  default: // não escolheu o item
    console.log("Por favor, Escolher um item");
    break;
}
//
//
const num2 = 2;
const isAdmin = true;

try {
  // tenta
  if (isAdmin) {
    console.log("Ver relatório: " + num2);
  } else {
    throw new Error("Sem autorização");
  }
} catch (error) {
  console.error(error);
} finally {
  console.log("Sempre executa!");
}

document.write("App is Online");

const n1 = 7;
const n2 = 7;
const n3 = 8;

const average = (n1 + n2 + n3) / 3;
console.log(average);
if (average >= 7) {
  console.log("Aprovado por média");
} else if (average >= 3) {
  console.log("Aluno em recuperação");
} else {
  console.log("Aluno Reprovado!");
}
