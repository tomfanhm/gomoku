import React, { useState } from "react";
import { Html } from "@react-three/drei";

import {
  checkDraw,
  fiveConsecutive,
  generatePlayfield,
  generatePositions,
  GomokuSchema,
} from "../functions/functions";
import Button from "./Button";
import Prompt from "./Prompt";
import Stones from "./Stones";

const positions = generatePositions();

const Gomoku: React.FC = () => {
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [draw, setDraw] = useState<boolean>(false);
  const [turn, setTurn] = useState<"black" | "white">("black");
  const [reset, setReset] = useState<boolean>(false);
  const [playfield, setPlayfield] = useState<GomokuSchema>(generatePlayfield());
  const [loading] = useState<boolean>(false);

  const handleMove = (index: number): boolean => {
    if (gameOver) return false;
    if (draw) return false;
    const row = Math.floor(index / 15);
    const col = index % 15;
    const value = playfield[row][col];
    if (value !== "") return false; // Selected
    const clone = [...playfield];
    clone[row][col] = turn;
    setPlayfield(clone);
    setTurn((prev) => (prev === "black" ? "white" : "black"));
    const hasFiveConsecutive = fiveConsecutive(clone, row, col); // Check game win
    if (hasFiveConsecutive) setGameOver(true);
    const gameDraw = checkDraw(playfield); // Check game draw
    if (gameDraw) setDraw(true);
    return true;
  };

  function handleReset() {
    setGameOver(false);
    setTurn("black");
    setPlayfield(generatePlayfield());
    setReset((prev) => !prev);
  }

  return (
    <group>
      <group position={[-7, 0.01, -7]}>
        {positions.map((position, i) => (
          <Button
            key={i}
            index={i}
            position={position}
            handleMove={handleMove}
            reset={reset}
          />
        ))}
      </group>
      <group position={[-7, 0.135, -7]}>
        <Stones playfield={playfield} />
      </group>
      <group position={[0, 0.135, 0]}>
        <Prompt turn={turn} />
      </group>
      <Html fullscreen>
        {loading && <div className="spinner"></div>}
        {gameOver && (
          <div className="text-container">
            <h1>Game Over</h1>
            <p className="japanese-text">ゲームオーバー</p>
            <button onClick={handleReset}>Play again</button>
          </div>
        )}
        {draw && (
          <div className="text-container">
            <h1>Draw</h1>
            <p className="japanese-text">引き分け</p>
            <button onClick={handleReset}>Play again</button>
          </div>
        )}
      </Html>
    </group>
  );
};

export default Gomoku;
