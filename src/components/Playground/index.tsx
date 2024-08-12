import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { ShaderMaterial, Vector2 } from "three";
import fragment from "./shaders/fragment.glsl?raw";

export function Playground() {
  const canvas = useThree((state) => state.gl.domElement);
  const material = useRef<ShaderMaterial>(null);

  useFrame(({ gl }) => {
    if (!material.current) return;

    gl.getSize(material.current.uniforms.resolution.value).multiplyScalar(
      gl.getPixelRatio()
    );
  });

  return (
    <mesh>
      <planeGeometry args={[canvas.clientWidth, canvas.clientHeight]} />
      <shaderMaterial
        ref={material}
        fragmentShader={fragment}
        uniforms={{
          resolution: { value: new Vector2() },
        }}
      />
    </mesh>
  );
}
