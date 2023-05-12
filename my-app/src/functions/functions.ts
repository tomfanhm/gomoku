import { z } from "zod";
import * as THREE from "three";

export const GomokuSchema = z
  .union([z.literal("black"), z.literal("white"), z.literal("")])
  .array()
  .length(15)
  .array()
  .length(15);

export type GomokuSchema = z.infer<typeof GomokuSchema>;

export function generatePositions() {
  const stack: THREE.Vector3[] = [];
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      stack.push(new THREE.Vector3(i, 0, j));
    }
  }
  return stack;
}

export function generatePlayfield(): GomokuSchema {
  return Array.from({ length: 15 }, () => Array.from({ length: 15 }, () => ""));
}

export function fiveConsecutive(
  playfield: GomokuSchema,
  row: number,
  col: number
): boolean {
  const color = playfield[row][col];
  if (color === "") return false;

  const directions = [
    { x: 0, y: 1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: -1 },
  ];
  for (const direction of directions) {
    let count = 1;

    // Check forward direction
    for (let i = 1; i < 5; i++) {
      const newRow = row + direction.x * i;
      const newCol = col + direction.y * i;
      if (
        newRow >= 0 &&
        newRow < 15 &&
        newCol >= 0 &&
        newCol < 15 &&
        playfield[newRow][newCol] === color
      ) {
        count++;
      } else {
        break;
      }
    }

    // Check reverse direction
    for (let i = 1; i < 5; i++) {
      const newRow = row - direction.x * i;
      const newCol = col - direction.y * i;
      if (
        newRow >= 0 &&
        newRow < 15 &&
        newCol >= 0 &&
        newCol < 15 &&
        playfield[newRow][newCol] === color
      ) {
        count++;
      } else {
        break;
      }
    }

    if (count >= 5) {
      return true;
    }
  }

  return false;
}
