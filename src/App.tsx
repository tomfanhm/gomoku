import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Gomoku from "./components/Gomoku";
import Lighting from "./components/Lighting";
import Table from "./components/Table";

function App() {
  return (
    <>
      <div className="canvas-container">
        <Canvas
          shadows
          gl={{
            alpha: true,
            antialias: true,
          }}
        >
          <color args={[0, 0, 0]} attach="background" />
          <PerspectiveCamera position={[0, 15, 10]} fov={75} makeDefault />
          <OrbitControls makeDefault maxPolarAngle={1.5} />
          <ambientLight intensity={0.5} />
          <gridHelper args={[14, 14]} />
          <Gomoku />
          <Lighting />
          <Table />
        </Canvas>
      </div>
    </>
  );
}

export default App;
