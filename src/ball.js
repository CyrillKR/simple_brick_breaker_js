export default class Ball {
  constructor(game) {
    this.image = document.querySelector("#game-ball");
    this.size = 30;

    this.game = game;

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.speed = {
      x: 4,
      y: 2,
    };

    this.position = {
      x: 10,
      y: 10,
    };
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // Collision LEFT/RIGHT
    if (
      this.position.x + this.size / 2 > this.gameWidth ||
      this.position.x + this.size / 2 - 1 < 0
    ) {
      this.speed.x = -this.speed.x;
    }

    // Collision TOP/BOTTOM
    if (
      this.position.y + this.size / 2 > this.gameHeight ||
      this.position.y + this.size / 3 < 0
    ) {
      this.speed.y = -this.speed.y;
    }

    // Collision PADDLE
    let bottomOfBall = this.position.y + this.size;
    let topOfPaddle = this.game.paddle.position.y;

    let leftSideOfPaddle = this.game.paddle.position.x;
    let rightSideOfPaddle =
      this.game.paddle.position.x + this.game.paddle.width;

    if (
      bottomOfBall >= topOfPaddle &&
      this.position.x >= leftSideOfPaddle &&
      this.position.x <= rightSideOfPaddle
    ) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
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
}
