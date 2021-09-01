import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import {
    Html,
    Stars,
    OrbitControls,
    PerspectiveCamera,
    CameraShake,
} from "@react-three/drei";

import Model from "./YulaGLTFModel";
import { Suspense } from "react";
import { Flex } from "@chakra-ui/react";
import {
    Bloom,
    EffectComposer,
    Noise,
    Vignette,
    Glitch,
    ChromaticAberration,
} from "@react-three/postprocessing";

const tjsc = new THREE.Color("#010101");
const chromaOffset = new THREE.Vector2(0.001, 0.0012);

const config = {
    maxYaw: 0.04, // Max amount camera can yaw in either direction
    maxPitch: 0.1, // Max amount camera can pitch in either direction
    maxRoll: 0.1, // Max amount camera can roll in either direction
    yawFrequency: 1, // Frequency of the the yaw rotation
    pitchFrequency: 1, // Frequency of the pitch rotation
    rollFrequency: 1, // Frequency of the roll rotation
    intensity: 0.2, // initial intensity of the shake
    decay: false, // should the intensity decay over time
    decayRate: 0.65, // if decay = true this is the rate at which intensity will reduce at
    additive: true, // this should be used when your scene has orbit controls
};

const YulaLogoModelContainer = () => {
    return (
        <div>
            <Flex alignSelf="center" className="container">
                <Canvas
                    gl={{ alpha: false, antialias: true }}
                    style={{
                        height: " 100vh",
                        width: "100%",
                        background: "black",
                    }}
                >
                    <color attach="background" args={["black"]} />
                    <fog color={tjsc} attach="fog" near={8} far={30} />
                    <pointLight
                        intensity={4}
                        color="yellow"
                        position={[5, 5, 5]}
                    />
                    <rectAreaLight position={[1.3, 1, 0.8]} />

                    <Suspense fallback={<Html>Loading</Html>}>
                        <Model />
                    </Suspense>

                    <EffectComposer>
                        <Glitch
                            strength={new THREE.Vector2(0.001, 0.1)}
                            duration={new THREE.Vector2(0.2)}
                        />
                        <ChromaticAberration offset={chromaOffset} />
                        <Bloom
                            luminanceThreshold={0.01}
                            luminanceSmoothing={1}
                            height={800}
                            opacity={0.3}
                        />
                        <Stars radius={100} saturation={1} count={1000} />
                        <Vignette eskil={false} offset={0} darkness={1.4} />
                    </EffectComposer>

                    <OrbitControls
                        autoRotate
                        autoRotateSpeed={0.1}
                        enableZoom={false}
                    ></OrbitControls>
                    {/* <CameraShake {...config} /> */}
                </Canvas>
            </Flex>
        </div>
    );
};

export default YulaLogoModelContainer;
