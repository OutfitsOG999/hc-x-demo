import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GOLD = "#D4AF37";

function Rings() {
  const group = useRef();
  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.1;
  });
  return (
    <group ref={group} position={[0.4, 0.1, -1]}>
      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.1, 0.02, 16, 96]} />
        <meshStandardMaterial color={GOLD} metalness={0.9} roughness={0.25} />
      </mesh>
      <mesh rotation={[Math.PI / 1.8, 0.4, 0]}>
        <torusGeometry args={[2.6, 0.012, 12, 80]} />
        <meshStandardMaterial color={GOLD} metalness={0.9} roughness={0.3} />
      </mesh>
    </group>
  );
}

function Particles({ count = 40 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.025;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color={GOLD} transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 4]} intensity={0.9} />
      <Rings />
      <Particles />
    </>
  );
}

export default function HeroScene() {
  const wrapRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;

    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "80px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0">
      {active && (
        <Canvas
          data-testid="hero-3d-canvas"
          camera={{ position: [0, 0, 7], fov: 40 }}
          dpr={1}
          frameloop="always"
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: "low-power",
            stencil: false,
            depth: true,
          }}
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
          onCreated={({ gl }) => {
            gl.setClearColor(new THREE.Color(0x000000), 0);
          }}
        >
          <Scene />
        </Canvas>
      )}
    </div>
  );
}
