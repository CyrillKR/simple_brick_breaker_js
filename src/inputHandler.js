export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          paddle.moveLeft();
          break;
        case "a":
          paddle.moveLeft();
          break;
        case "ArrowRight":
          paddle.moveRight();
          break;
        case "d":
          paddle.moveRight();
          break;
      }
    });

    document.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          if (paddle.speed < 0) paddle.stop();
          break;
        case "a":
          if (paddle.speed < 0) paddle.stop();
          break;
        case "ArrowRight":
          if (paddle.speed > 0) paddle.stop();
          break;
        case "d":
          if (paddle.speed > 0) paddle.stop();
          break;
      }
    });
  }
}
