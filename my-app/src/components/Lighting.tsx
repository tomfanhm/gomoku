import React from "react";
import * as THREE from "three";

const positions = [
  new THREE.Vector3(50, 50, 0),
  new THREE.Vector3(-50, 50, 50),
  new THREE.Vector3(-50, 50, -50),
];

const Lighting: React.FC = () => {
  return (
    <>
      {positions.map((pos, i) => (
        <spotLight
          key={i}
          intensity={0.5}
          angle={0.7}
          penumbra={0.5}
          position={pos}
        />
      ))}
    </>
  );
};
export default Lighting;
