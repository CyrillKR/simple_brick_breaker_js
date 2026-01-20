import Brick from "./brick.js";
import { BRICK_CONFIG } from "./config.js";

export function generateLevel(game, level) {
  const brickOffsetX = 16;
  const brickWidth = brickOffsetX + BRICK_CONFIG.WIDTH;
  const brickHeight = BRICK_CONFIG.HEIGHT;
  let bricks = [];

  for (let i = 0; i < level.length; i++) {
    let currentHeight = brickHeight * i;
    for (let j = 0; j < level[i].length; j++) {
      bricks.push(new Brick(game, { x: brickWidth * j, y: currentHeight }));
    }
  }

  return bricks;
}

export const level1 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
