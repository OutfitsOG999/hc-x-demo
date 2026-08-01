import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";

const GOLD = "#D4AF37";

function Rings() {
  const group = useRef();
  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = Math.sin(Date.now() * 0.0002) * 0.15;
  });
  return (
    <group ref={group}>
      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.2, 0.025, 32, 160]} />
        <meshStandardMaterial color={GOLD} metalness={1} roughness={0.18} />
      </mesh>
      <mesh rotation={[Math.PI / 1.8, 0.4, 0]}>
        <torusGeometry args={[2.7, 0.015, 32, 160]} />
        <meshStandardMaterial color={GOLD} metalness={1} roughness={0.22} />
      </mesh>
    </group>
  );
}

function Bottle() {
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <group position={[1.6, -0.4, 0]}>
        <mesh>
          <cylinderGeometry args={[0.32, 0.36, 1.25, 48]} />
          <meshPhysicalMaterial
            color="#f3e9d2"
            transmission={0.85}
            thickness={0.6}
            roughness={0.12}
            ior={1.4}
          />
        </mesh>
        <mesh position={[0, 0.78, 0]}>
          <cylinderGeometry args={[0.14, 0.14, 0.32, 32]} />
          <meshStandardMaterial color={GOLD} metalness={1} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

function Particles({ count = 90 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, [count]);
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color={GOLD} transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      data-testid="hero-3d-canvas"
      camera={{ position: [0, 0, 7], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 4]} intensity={1.1} />
      <Rings />
      <Bottle />
      <Particles />
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={3} position={[0, 5, -9]} scale={[10, 10, 1]} />
        <Lightformer form="rect" intensity={2} position={[-5, 1, -1]} scale={[4, 6, 1]} />
        <Lightformer form="rect" intensity={1.6} position={[5, -1, -1]} scale={[4, 6, 1]} />
      </Environment>
    </Canvas>
  );
}
