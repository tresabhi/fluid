import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Playground } from "./components/Playground";

function App() {
  return (
    <div id="canvas-wrapper">
      <Canvas id="canvas" orthographic>
        <OrbitControls />
        <Playground />
      </Canvas>
    </div>
  );
}

export default App;
