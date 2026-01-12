export default class Ball {
  constructor(gameWidth, gameHeight) {
    this.image = document.querySelector("#game-ball");
    this.size = 30;

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.speed = {
      x: 4,
      y: 2,
    };

    this.position = {
      x: 10,
      y: 10,
    };
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if (
      this.position.x + this.size / 2 > this.gameWidth ||
      this.position.x + this.size / 2 - 1 < 0
    ) {
      this.speed.x = -this.speed.x;
    }
    if (
      this.position.y + this.size / 2 > this.gameHeight ||
      this.position.y + this.size / 3 < 0
    ) {
      this.speed.y = -this.speed.y;
    }
  }
}
