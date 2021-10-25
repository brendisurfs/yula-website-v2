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
    Vignette,
    ChromaticAberration,
} from "@react-three/postprocessing";
import { Vector3 } from "three";

const tjsc = new THREE.Color("#010101");
const chromaOffset = new THREE.Vector2(0.0007, 0.0015);

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
                        intensity={10}
                        color="yellow"
                        position={[5, 5, 5]}
                    />
                    <rectAreaLight intensity={10} position={[1.3, 1, 0.8]} />

                    <Suspense fallback={<Html>Loading</Html>}>
                        <Model />
                    </Suspense>

                    <EffectComposer>
                        <ChromaticAberration offset={chromaOffset} />
                        <Bloom
                            luminanceThreshold={0.01}
                            luminanceSmoothing={1}
                            height={800}
                            opacity={0.3}
                        />
                        <Stars radius={100} saturation={1} count={3000} />
                        <Vignette eskil={false} offset={0} darkness={1.4} />
                    </EffectComposer>

                    <OrbitControls
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={0.4}
                        enableZoom={false}
                    ></OrbitControls>
                </Canvas>
            </Flex>
        </div>
    );
};

export default YulaLogoModelContainer;
