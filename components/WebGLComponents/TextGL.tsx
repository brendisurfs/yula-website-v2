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

//INTERFACES AND TYPES
//	|
//	v
interface ReactChildType {
    children: ReactElement | ReactElement[] | string;
}

const lightPosition = new THREE.Vector3(0, 3, 0);

function TextGL({ children }: ReactChildType) {
    return (
        <Canvas
            gl={{ alpha: false, antialias: true }}
            style={{
                height: " 100vh",
                width: "100%",
                background: "black",
            }}
        >
            <Text
                fontSize={12}
                maxWidth={240}
                lineHeight={1}
                letterSpacing={0.04}
                textAlign={"center"}
                color="white"
                scale={0.02}
                // anchorX="center"
                // anchorY="middle"
            >
                {children}
            </Text>
            <pointLight intensity={1} position={lightPosition}></pointLight>

            <Stars radius={100} saturation={1} count={1000} />
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
            {/* change this material */}
            <Model scale={4} position={new THREE.Vector3(0, 0, -1.5)} />
            {/* <Plane scale={5} position={new THREE.Vector3(0, 0, -0.9)} /> */}
        </Canvas>
    );
}

export default TextGL;
