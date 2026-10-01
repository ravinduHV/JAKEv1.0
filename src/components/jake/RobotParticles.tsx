import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const DESKTOP_PARTICLES = 140;
const MOBILE_PARTICLES = 78;

function seededValue(index: number, channel: number) {
  const value = Math.sin(index * 127.1 + channel * 311.7) * 43758.5453;
  return value - Math.floor(value);
}

function ParticleCloud({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      values[index * 3] = (seededValue(index, 1) - 0.5) * 8.5;
      values[index * 3 + 1] = (seededValue(index, 2) - 0.5) * 9;
      values[index * 3 + 2] = (seededValue(index, 3) - 0.5) * 3.5;
    }
    return values;
  }, [count]);

  useFrame(({ clock }, rawDelta) => {
    const points = pointsRef.current;
    if (!points) return;
    const delta = Math.min(rawDelta, 0.05);
    points.rotation.y += delta * 0.025;
    points.rotation.z = Math.sin(clock.elapsedTime * 0.08) * 0.035;
    points.position.y = Math.sin(clock.elapsedTime * 0.16) * 0.09;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#5684ff"
        size={0.045}
        sizeAttenuation
        transparent
        opacity={0.68}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function RobotParticles() {
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(DESKTOP_PARTICLES);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 767px)");
    const update = () => {
      setMounted(!reducedMotion.matches);
      setCount(mobile.matches ? MOBILE_PARTICLES : DESKTOP_PARTICLES);
    };
    update();
    reducedMotion.addEventListener("change", update);
    mobile.addEventListener("change", update);
    return () => {
      reducedMotion.removeEventListener("change", update);
      mobile.removeEventListener("change", update);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="robot-particles" aria-hidden="true">
      <Canvas dpr={1} camera={{ position: [0, 0, 6.5], fov: 52 }} gl={{ alpha: true, antialias: false }}>
        <ParticleCloud count={count} />
      </Canvas>
    </div>
  );
}