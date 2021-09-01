import {
    Stage,
    PerspectiveCamera,
    Plane,
    Text,
    OrbitControls,
} from "@react-three/drei";
import React, { ReactElement } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
interface ReactChildType {
    children: ReactElement | ReactElement[] | string;
}

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
            <OrbitControls
                minPolarAngle={Math.PI / 2.5}
                maxPolarAngle={Math.PI / 1.7}
                minAzimuthAngle={-Math.PI / 4}
                maxAzimuthAngle={Math.PI / 4}
                enableZoom={false}
            />
        </Canvas>
    );
}

export default TextGL;
