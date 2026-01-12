export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 100;
    this.height = 20;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.fillStyle = "blue";

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height * 2,
    };

    this.maxSpeed = 8;
    this.speed = 0;
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }

  update(deltaTime) {
    this.position.x += this.speed;

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.fillStyle;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
