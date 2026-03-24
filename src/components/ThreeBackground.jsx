import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
// import { Points } from "@react-three/drei";
// import * as THREE from "three";

function Particles({ count = 1200 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 40; // spread
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.08;
    if (ref.current) {
      ref.current.rotation.y = t * 0.2;
      ref.current.rotation.x = Math.sin(t * 0.3) * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
      </bufferGeometry>
    <pointsMaterial size={0.05} sizeAttenuation color={"#37c6f4"} opacity={0.7} />

    </points>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
     <Canvas
  style={{ width: "1200px", height: "1200px" }}
  camera={{ position: [0, 0, 30], fov: 50 }}
>
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.3} position={[5, 5, 5]} />
        <Particles count={900} />
      </Canvas>
    </div>
  );
}
