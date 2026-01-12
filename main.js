import Game from "./src/game.js";

const fpsCount = document.querySelector("#fps");
const gameScreen = document.querySelector("#screen");
const ctx = gameScreen.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let lastTime = 0;
let fps = 0;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

function clearScreen(ctx) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
}

function gameLoop(timestamp) {
  // Time keeping
  const deltaTime = timestamp - lastTime;
  fps = 1000 / deltaTime;
  fpsCount.textContent = Math.round(fps);
  lastTime = timestamp;

  // Game loop
  clearScreen(ctx);

  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
