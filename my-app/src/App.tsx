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
            preserveDrawingBuffer: true,
          }}
        >
          <PerspectiveCamera position={[0, 50, 50]} fov={75} makeDefault />
          <OrbitControls makeDefault />
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
