import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";

import Model from "./YulaGLTFModel";
import { Suspense } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
  Glitch,
} from "@react-three/postprocessing";

const tjsc = new THREE.Color("#7e7e7e");

const YulaLogoModelContainer = () => {
  return (
    <div>
      <Flex alignSelf="center" className="container">
        <Canvas
          gl={{ alpha: false, antialias: true }}
          style={{
            height: " 100vh",
            width: "100%",
            background: "rgb(12,12,12)",
          }}
        >
          <color attach="background" args={["black"]} />
          <fog color={tjsc} attach="fog" near={8} far={30} />
          <pointLight color="yellow" position={[5, 5, 5]} />
          <rectAreaLight position={[1.3, 1, 0.8]} />

          <Suspense fallback={<Html center>Loading</Html>}>
            <Model />
          </Suspense>

          <EffectComposer>
            <Glitch
              strength={new THREE.Vector2(0.001, 1)}
              duration={new THREE.Vector2(0.2)}
            />
            <Noise opacity={0.025} />
            <Bloom
              luminanceThreshold={0.01}
              luminanceSmoothing={1}
              height={800}
              opacity={0.5}
            />
            <Vignette eskil={false} offset={0} darkness={1.1} />
          </EffectComposer>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Flex>
    </div>
  );
};

export default YulaLogoModelContainer;
