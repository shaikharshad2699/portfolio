import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, Torus, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGeometry({ position, geometry, color, speed = 1, distort = 0.3 }: {
  position: [number, number, number];
  geometry: 'sphere' | 'box' | 'torus' | 'icosahedron';
  color: string;
  speed?: number;
  distort?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  const GeometryComponent = {
    sphere: Sphere,
    box: Box,
    torus: Torus,
    icosahedron: Icosahedron,
  }[geometry];

  const args = geometry === 'torus' ? [0.8, 0.3, 16, 32] : geometry === 'icosahedron' ? [1, 0] : [1, 32, 32];

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <GeometryComponent ref={meshRef} args={args as any} position={position} scale={0.8}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </GeometryComponent>
    </Float>
  );
}

function Particles({ count = 500 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00d4ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    const lineData = [];
    for (let i = 0; i < 8; i++) {
      const points = [];
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      points.push(start, end);
      lineData.push(points);
    }
    return lineData;
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={linesRef}>
      {lines.map((points, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([...points[0].toArray(), ...points[1].toArray()])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#00d4ff" transparent opacity={0.15} />
        </line>
      ))}
    </group>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#ffb347" />
        <pointLight position={[10, -10, 5]} intensity={0.3} color="#00d4ff" />

        <FloatingGeometry position={[-4, 2, -2]} geometry="icosahedron" color="#00d4ff" speed={0.5} distort={0.4} />
        <FloatingGeometry position={[4, -1, -3]} geometry="torus" color="#ffb347" speed={0.7} distort={0.2} />
        <FloatingGeometry position={[-3, -2, -1]} geometry="box" color="#00d4ff" speed={0.6} distort={0.3} />
        <FloatingGeometry position={[3, 2, -4]} geometry="sphere" color="#ffb347" speed={0.4} distort={0.5} />

        <Particles count={400} />
        <ConnectionLines />
      </Canvas>
    </div>
  );
}