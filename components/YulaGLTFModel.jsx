/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  // useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  const group = useRef();
  const { nodes, materials } = useGLTF("/testing_yulaLogo.gltf");
  useFrame((state, delta) => (group.current.rotation.y += 0.0025));
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        scale={5}
        rotation={[0, 1, 0]}
        geometry={nodes.geo1.geometry}
        material={materials.gltf_yula_shiny}
      />
    </group>
  );
}

useGLTF.preload("/testing_yulaLogo.gltf");
