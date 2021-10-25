import {
    Stage,
    PerspectiveCamera,
    Plane,
    Text,
    OrbitControls,
    Reflector,
    Stars,
} from "@react-three/drei";
import React, { ReactElement } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Model from "../YulaGLTFModel";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";

//INTERFACES AND TYPES
//	|
//	v
interface ReactChildType {
    children: ReactElement | ReactElement[] | string;
}

function TextGL({ children }: ReactChildType) {
    return (
        <Canvas
            gl={{ alpha: false, antialias: true }}
            style={{
                height: " 80vh",
                width: "100%",
                background: "black",
            }}
        >
            <Text
                fontSize={12}
                maxWidth={260}
                lineHeight={1}
                letterSpacing={0.04}
                textAlign={"left"}
                color="white"
                scale={0.02}
                // anchorX="center"
                // anchorY="middle"
            >
                {children}
            </Text>

            <Stars radius={100} saturation={0.5} count={3000} />
            <OrbitControls
                minPolarAngle={Math.PI / 2.5}
                maxPolarAngle={Math.PI / 1.7}
                minAzimuthAngle={-Math.PI / 4}
                maxAzimuthAngle={Math.PI / 4}
                enableZoom={false}
                enablePan={false}
            />
            <pointLight intensity={4} color="yellow" position={[5, 5, 5]} />
            <rectAreaLight position={[1.3, 1, 0.8]} />

            {/* MODEL HERE */}
            <Model scale={4} position={new THREE.Vector3(0, 0, -1.5)} />

            {/* <Plane scale={5} position={new THREE.Vector3(0, 0, -0.9)} /> */}

            {/* EFFECTS HERE */}
            <EffectComposer>
                {/* <ChromaticAberration offset={chromaOffset} /> */}
                <Bloom
                    luminanceThreshold={0.01}
                    luminanceSmoothing={1}
                    height={800}
                    opacity={0.3}
                />
                <Vignette eskil={false} offset={0} darkness={1.4} />
            </EffectComposer>
        </Canvas>
    );
}

export default TextGL;
