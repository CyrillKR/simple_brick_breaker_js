import Ball from "./ball.js";
import Paddle from "./paddle.js";
import { flattenArray } from "./utils.js";
import InputHandler from "./inputHandler.js";
import { level1, generateLevel } from "./levels.js";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);

    let bricks = generateLevel(this, level1);
    console.log(bricks);

    this.gameObjects = [this.ball, this.paddle, ...bricks];

    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.gameObjects.forEach((gameObject) => gameObject.update(deltaTime));
  }

  draw(ctx) {
    this.gameObjects.forEach((gameObject) => gameObject.draw(ctx));
  }
}
