import { BRICK_CONFIG } from "./config.js";

export default class Brick {
  constructor(game, position) {
    this.game = game;

    this.image = document.querySelector("#game-brick");
    this.position = position;
    this.width = BRICK_CONFIG.WIDTH;
    this.height = BRICK_CONFIG.HEIGHT;
  }

  update() {}

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  static getWidth() {
    return this.width;
  }
}
