import React, { useEffect, useState } from "react";
import * as THREE from "three";

type ButtonProps = {
  position: THREE.Vector3;
  index: number;
  handleMove: (index: number) => boolean;
  reset: boolean;
};

const Button: React.FC<ButtonProps> = ({
  position,
  index,
  handleMove,
  reset,
}) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);
  const handlePointerOver = () => {
    setHovered(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
  };

  const handleClick = () => {
    const result = handleMove(index);
    if (result) setSelected(true);
  };

  useEffect(() => {
    setSelected(false);
  }, [reset]);

  return (
    <mesh
      position={position}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <circleGeometry args={[0.45, 32]} />
      <meshBasicMaterial
        side={THREE.DoubleSide}
        color={hovered ? 0x90ee90 : 0xffffff}
        transparent
        opacity={selected ? 0 : hovered ? 1 : 0}
      />
    </mesh>
  );
};

export default Button;
