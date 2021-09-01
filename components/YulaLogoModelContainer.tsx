import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Html, OrbitControls } from "@react-three/drei";

import Model from "./YulaGLTFModel";
import { Suspense } from "react";
import { Flex } from "@chakra-ui/react";
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
  Glitch,
} from "@react-three/postprocessing";

const tjsc = new THREE.Color("#010101");

const YulaLogoModelContainer = () => {
  return (
    <div>
      <Flex alignSelf="center" className="container">
        <Canvas
          gl={{ alpha: false, antialias: true }}
          style={{
            height: " 100vh",
            width: "100%",
            background: "#202020",
          }}
        >
          <color attach="background" args={[tjsc]} />
          <fog color={tjsc} attach="fog" near={8} far={30} />
          <pointLight color="yellow" position={[5, 5, 5]} />
          <rectAreaLight position={[1.3, 1, 0.8]} />

          <Suspense fallback={<Html>Loading</Html>}>
            <Model />
          </Suspense>

          <EffectComposer>
            <Glitch
              strength={new THREE.Vector2(0.001, 0.1)}
              duration={new THREE.Vector2(0.2)}
            />
            <Noise opacity={0.025} />
            <Bloom
              luminanceThreshold={0.01}
              luminanceSmoothing={1}
              height={800}
              opacity={0.3}
            />
            <Vignette eskil={false} offset={0} darkness={1.4} />
          </EffectComposer>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Flex>
    </div>
  );
};

export default YulaLogoModelContainer;
