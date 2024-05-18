import React from "react";

type PromptProps = {
  turn: "black" | "white";
};

const Prompt: React.FC<PromptProps> = ({ turn }) => {
  return (
    <mesh
      position={turn === "black" ? [7.75, 0, 7.75] : [-7.75, 0, -7.75]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[1, 1, 0.3]}
      receiveShadow
      castShadow
    >
      <sphereGeometry args={[0.45, 32]} />
      <meshPhongMaterial color={turn === "black" ? 0x2b2b2b : 0xdedede} />
    </mesh>
  );
};

export default Prompt;
