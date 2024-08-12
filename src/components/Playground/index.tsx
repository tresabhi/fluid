import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, ShaderMaterial, Vector2 } from "three";
import fragment from "./shaders/fragment.glsl?raw";

export function Playground() {
  const canvas = useThree((state) => state.gl.domElement);
  const mesh = useRef<Mesh>(null);
  const material = useRef<ShaderMaterial>(null);

  useFrame(({ gl }) => {
    if (!material.current || !mesh.current) return;

    gl.getSize(material.current.uniforms.resolution.value).multiplyScalar(
      gl.getPixelRatio()
    );
    mesh.current.scale.set(
      material.current.uniforms.resolution.value.x,
      material.current.uniforms.resolution.value.y,
      1
    );
  });

  return (
    <mesh ref={mesh} scale={[canvas.clientWidth, canvas.clientHeight, 1]}>
      <planeGeometry args={[1, 1]} />
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
