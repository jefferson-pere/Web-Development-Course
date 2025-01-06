const spaceContainer = document.querySelector(".spaceContainer");
const spaceship = document.querySelector(".spaceship");
const playerName = document.querySelector(".playerName");
const life = document.querySelector(".life");
const score = document.querySelector(".score");
const gammeOverButton = document.querySelector(".gameOver button");
//mover nave
const spaceContainerWidth = spaceContainer.offsetWidth;
const spaceContainerHeight = spaceContainer.offsetHeight;
const spaceshipWidth = spaceship.offsetWidth;
const spaceshipHeight = spaceship.offsetHeight;

// Função para atualizar a posição da nave com base no movimento do mouse
function moveSpaceshipWithMouse(event) {
  // Posição do mouse dentro do contêiner
  const mouseX = event.clientX - spaceContainer.offsetLeft;
  const mouseY = event.clientY - spaceContainer.offsetTop;

  // Limitar a posição da nave dentro do contêiner
  const newLeft = Math.max(
    0,
    Math.min(spaceContainerWidth - spaceshipWidth, mouseX - spaceshipWidth / 2)
  );
  const newBottom = Math.max(
    0,
    Math.min(
      spaceContainerHeight - spaceshipHeight,
      spaceContainerHeight - mouseY - spaceshipHeight / 2
    )
  ); 

  // Atualizar a posição da nave
  spaceship.style.left = newLeft + "px";
  spaceship.style.bottom = newBottom + "px";
}

// Adicionar o evento de movimento do mouse ao contêiner do jogo
spaceContainer.addEventListener("mousemove", moveSpaceshipWithMouse);

function setPlayerName() {
  playerName.innerHTML = localStorage.getItem("@spaceshipGame:playerName");
}
setPlayerName();
spaceshipMove();
