import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

const CYAN = '#22d3ee';

const rackFrameGeo = new THREE.BoxGeometry(2.2, 2.8, 1.4);
const serverUnitGeo = new THREE.BoxGeometry(1.8, 0.32, 1.0);
const dbGeo = new THREE.CylinderGeometry(0.45, 0.45, 1.2, 20);
const gatewayGeo = new THREE.BoxGeometry(0.55, 0.38, 0.55);
const shellGeo = new THREE.IcosahedronGeometry(2.9, 1);
const ringGeo = new THREE.TorusGeometry(3.2, 0.012, 8, 64);

function WireEdges({
  geometry,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  opacity = 0.22,
}: {
  geometry: THREE.BufferGeometry;
  position?: [number, number, number];
  rotation?: [number, number, number];
  opacity?: number;
}) {
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);

  return (
    <lineSegments geometry={edges} position={position} rotation={rotation}>
      <lineBasicMaterial color={CYAN} transparent opacity={opacity} />
    </lineSegments>
  );
}

function ConnectionLines() {
  const lines: [THREE.Vector3, THREE.Vector3][] = [
    [new THREE.Vector3(0.95, 0.15, 0.55), new THREE.Vector3(1.55, 0.3, 0)],
    [new THREE.Vector3(0.95, 0.15, 0.55), new THREE.Vector3(0, 0.6, 0)],
    [new THREE.Vector3(0.95, 0.15, 0.55), new THREE.Vector3(0, 0, 0)],
    [new THREE.Vector3(0.95, 0.15, 0.55), new THREE.Vector3(0, -0.6, 0)],
    [new THREE.Vector3(1.55, 0.3, 0), new THREE.Vector3(0, 0, 0)],
  ];

  return (
    <>
      {lines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color={CYAN}
          transparent
          opacity={0.18}
          lineWidth={1}
        />
      ))}
    </>
  );
}

function SchematicAssembly() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;

    group.rotation.y += delta * 0.1;
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, mouse.current.y * 0.07, 0.04);
    group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, -mouse.current.x * 0.04, 0.04);
  });

  return (
    <group ref={groupRef} position={[0.4, -0.15, 0]}>
      <WireEdges geometry={shellGeo} opacity={0.07} />
      <WireEdges geometry={rackFrameGeo} opacity={0.2} />

      <WireEdges geometry={serverUnitGeo} position={[0, 0.72, 0]} opacity={0.28} />
      <WireEdges geometry={serverUnitGeo} position={[0, 0.08, 0]} opacity={0.28} />
      <WireEdges geometry={serverUnitGeo} position={[0, -0.56, 0]} opacity={0.28} />

      <WireEdges geometry={dbGeo} position={[1.65, 0.25, 0]} opacity={0.26} />
      <WireEdges geometry={gatewayGeo} position={[0.95, 0.15, 0.55]} opacity={0.32} />

      <mesh geometry={ringGeo} rotation={[Math.PI / 2, 0, 0]} position={[0, -1.55, 0]}>
        <meshBasicMaterial color={CYAN} transparent opacity={0.08} wireframe />
      </mesh>

      <ConnectionLines />
    </group>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <SchematicAssembly />
    </>
  );
}

export default function WireframeSchematicScene() {
  const [frameloop, setFrameloop] = useState<'always' | 'never'>('always');

  useEffect(() => {
    const onVisibility = () => {
      setFrameloop(document.hidden ? 'never' : 'always');
    };

    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  return (
    <Canvas
      className="absolute inset-0 pointer-events-none"
      dpr={[1, 1.5]}
      frameloop={frameloop}
      gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      camera={{ position: [4.8, 3.4, 5.8], fov: 38, near: 0.1, far: 50 }}
      style={{ background: 'transparent' }}
    >
      <SceneContent />
    </Canvas>
  );
}
