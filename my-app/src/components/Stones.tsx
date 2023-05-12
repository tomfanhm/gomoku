import React, { useMemo } from "react";
import { GomokuSchema, generatePositions } from "../functions/functions";
import * as THREE from "three";

type StonesProps = {
  playfield: GomokuSchema;
};

const positions = generatePositions();

const Stones: React.FC<StonesProps> = ({ playfield }) => {
  const stonesNode = useMemo(() => {
    const stack: {
      positions: THREE.Vector3;
      color: 0x2b2b2b | 0xdedede;
    }[] = [];
    for (let i = 0; i < playfield.length; i++) {
      for (let j = 0; j < playfield[i].length; j++) {
        const value = playfield[i][j];
        if (value)
          stack.push({
            positions: positions[i * 15 + j],
            color: value === "black" ? 0x2b2b2b : 0xdedede,
          });
      }
    }
    return stack;
  }, [playfield]);
  return (
    <>
      {stonesNode.map((node, i) => (
        <mesh
          key={i}
          position={node.positions}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1, 0.3]}
          castShadow
          receiveShadow
        >
          <sphereGeometry args={[0.45, 32]} />
          <meshPhongMaterial color={node.color} />
        </mesh>
      ))}
    </>
  );
};

export default Stones;
