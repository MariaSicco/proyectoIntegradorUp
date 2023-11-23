// Obtener el canvas y su contexto
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Crear un objeto para el coche del jugador
const playerCar = {
  x: canvas.width / 2,
  y: canvas.height - 50,
  width: 50,
  height: 80,
  color: "red",
  speed: 5
};

// Función para dibujar el coche del jugador en el canvas
function drawPlayerCar() {
  ctx.fillStyle = playerCar.color;
  ctx.fillRect(playerCar.x, playerCar.y, playerCar.width, playerCar.height);
}

// Función principal del juego
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawPlayerCar();

  requestAnimationFrame(gameLoop);
}

// Control del teclado para mover el coche del jugador
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft" && playerCar.x > 0) {
    playerCar.x -= playerCar.speed;
  } else if (event.key === "ArrowRight" && playerCar.x < canvas.width - playerCar.width) {
    playerCar.x += playerCar.speed;
  }
});

// Iniciar el juego
gameLoop();
