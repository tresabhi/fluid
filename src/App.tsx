import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {
  return (
    <div id="canvas-wrapper">
      <Canvas id="canvas">
        <mesh>
          <boxGeometry />
          <meshBasicMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
