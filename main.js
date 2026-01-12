import Paddle from "./src/paddle.js";
import Ball from "./src/ball.js";
import InputHandler from "./src/inputHandler.js";

const fpsCount = document.querySelector("#fps");
const gameScreen = document.querySelector("#screen");
const ctx = gameScreen.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HIGHT = 600;

let lastTime = 0;
let fps = 0;

let paddle = new Paddle(GAME_WIDTH, GAME_HIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HIGHT);

new InputHandler(paddle);

function clearScreen(ctx) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HIGHT);
}

function gameLoop(timestamp) {
  // Time keeping
  const deltaTime = timestamp - lastTime;
  fps = 1000 / deltaTime;
  fpsCount.textContent = Math.round(fps);
  lastTime = timestamp;

  // Game loop
  clearScreen(ctx);

  paddle.update(deltaTime);
  paddle.draw(ctx);

  ball.update(deltaTime);
  ball.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
