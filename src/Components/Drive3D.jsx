import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  PresentationControls,
  Environment,
  Lightformer,
  ContactShadows,
} from "@react-three/drei";
import { toCreasedNormals } from "three/examples/jsm/utils/BufferGeometryUtils.js";

// PowerFlex 525 drive — loaded lazily from ChassisViewer, only when the
// visitor switches to the "PowerFlex 525" tab.
//
// The model ships without normals (dropping them let it compress far
// better), so sharp-edged normals are rebuilt here with a 30° crease angle.

export const DRIVE_URL = "/models/powerflex-525.glb";
const CREASE = Math.PI / 6;

function Drive({ reducedMotion }) {
  const { scene } = useGLTF(DRIVE_URL, false, true);
  const sway = useRef();

  const root = useMemo(() => {
    const root = scene.clone(true);
    root.traverse((o) => {
      if (!o.isMesh) return;
      o.geometry = toCreasedNormals(o.geometry, CREASE);
    });
    return root;
  }, [scene]);

  useEffect(
    () => () => root.traverse((o) => o.isMesh && o.geometry.dispose()),
    [root],
  );

  useFrame((state) => {
    if (sway.current && !reducedMotion) {
      sway.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.15;
    }
  });

  return (
    <group ref={sway}>
      <primitive object={root} scale={1.15} />
    </group>
  );
}

export default function Drive3D({ reducedMotion }) {
  return (
    <Canvas
      camera={{ position: [0, 0.6, 7.4], fov: 27 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "low-power" }}
      style={{ touchAction: "pan-y" }}
    >
      <ambientLight intensity={0.45} />
      <directionalLight position={[-3, 4, 5]} intensity={1.5} />
      <directionalLight position={[4, 2, -3]} intensity={0.6} color="#8de6dd" />
      <Environment resolution={128}>
        <Lightformer form="rect" intensity={1.4} position={[0, 4, 3]} scale={[8, 2, 1]} />
        <Lightformer form="rect" intensity={0.6} position={[-5, 1, 2]} scale={[2, 6, 1]} />
        <Lightformer form="rect" intensity={0.8} color="#f2b33d" position={[5, 0, 1]} scale={[1, 4, 1]} />
      </Environment>

      <PresentationControls
        global={false}
        cursor={false}
        snap
        speed={1.4}
        rotation={[0.08, -0.55, 0]}
        polar={[-0.15, 0.25]}
        azimuth={[-0.9, 0.9]}
      >
        <Drive reducedMotion={reducedMotion} />
      </PresentationControls>

      <ContactShadows position={[0, -1.1, 0]} opacity={0.45} scale={5} blur={2.6} far={2} />
    </Canvas>
  );
}
