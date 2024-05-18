import React from "react";
import { useTexture } from "@react-three/drei";

const Table: React.FC = () => {
  const texture = useTexture("./plywood_rough_1k.jpg");
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1.26, 0]}
      receiveShadow
    >
      <boxGeometry args={[18, 18, 2.5]} />
      <meshStandardMaterial
        map={texture}
        color={0x966f33}
        metalness={1}
        roughness={0.5}
      />
    </mesh>
  );
};

export default Table;
