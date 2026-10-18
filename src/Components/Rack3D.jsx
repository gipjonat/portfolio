import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  PresentationControls,
  Environment,
  Lightformer,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";
import { RACK_MODULES } from "../rackModules";

// Loaded lazily from RackViewer, so three.js stays out of the main bundle.

export const MODEL_URL = "/models/controllogix-rack.glb";
const MODULE_IDS = new Set(RACK_MODULES.map((m) => m.id));
const HIGHLIGHT = new THREE.Color("#4fd1c5");
const POP = 0.09; // how far the active module slides forward (scene units)

const moduleOf = (name = "") => name.split("__")[0];
const isLed = (name = "") => /__(led_|display)/.test(name);

function Rack({ active, onHover, onSelect, reducedMotion }) {
  const { scene } = useGLTF(MODEL_URL, false, true);
  const sway = useRef();

  // Clone so each mesh owns its material (materials are shared in the file),
  // and remember each mesh's resting position for the slide-out animation.
  const root = useMemo(() => {
    const root = scene.clone(true);
    root.traverse((o) => {
      if (!o.isMesh) return;
      o.material = o.material.clone();
      o.userData.module = moduleOf(o.name);
      o.userData.baseZ = o.position.z;
      o.userData.led = isLed(o.name);
    });
    return root;
  }, [scene]);

  useEffect(
    () => () => root.traverse((o) => o.isMesh && o.material.dispose()),
    [root],
  );

  useFrame((state, delta) => {
    const k = 1 - Math.exp(-delta * 10);
    const group = sway.current;
    if (!group) return;
    group.traverse((m) => {
      if (!m.isMesh) return;
      const on = m.userData.module === active;
      const targetZ = m.userData.baseZ + (on ? POP : 0);
      m.position.z += (targetZ - m.position.z) * k;
      if (!m.userData.led && m.material.emissive) {
        const target = on ? 0.11 : 0;
        const cur = m.material.userData.glow ?? 0;
        const next = cur + (target - cur) * k;
        m.material.userData.glow = next;
        m.material.emissive.copy(HIGHLIGHT).multiplyScalar(next);
      }
    });
    if (!reducedMotion) {
      group.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.12;
    }
  });

  const pick = (e) => {
    const id = moduleOf(e.object.name);
    return MODULE_IDS.has(id) ? id : null;
  };

  return (
    <group ref={sway}>
      <primitive
        object={root}
        onPointerMove={(e) => {
          e.stopPropagation();
          const id = pick(e);
          document.body.style.cursor = id ? "pointer" : "";
          if (id && id !== active) onHover(id);
        }}
        onPointerOut={() => (document.body.style.cursor = "")}
        onClick={(e) => {
          e.stopPropagation();
          const id = pick(e);
          if (id) onSelect(id);
        }}
      />
    </group>
  );
}

export default function Rack3D({ active, onHover, onSelect, reducedMotion }) {
  useEffect(() => () => (document.body.style.cursor = ""), []);

  return (
    <Canvas
      camera={{ position: [0, 0.9, 7.4], fov: 27 }}
      dpr={[1, 2]}
      gl={{ antialias: true, powerPreference: "low-power" }}
      // Let vertical swipes scroll the page on phones; horizontal drags rotate.
      style={{ touchAction: "pan-y" }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[-3, 4, 5]} intensity={1.6} />
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
        rotation={[0.1, -0.42, 0]}
        polar={[-0.15, 0.25]}
        azimuth={[-0.75, 0.75]}
      >
        <Rack
          active={active}
          onHover={onHover}
          onSelect={onSelect}
          reducedMotion={reducedMotion}
        />
      </PresentationControls>

      <ContactShadows position={[0, -1.15, 0]} opacity={0.45} scale={6} blur={2.6} far={2} />
    </Canvas>
  );
}

useGLTF.preload(MODEL_URL, false, true);
