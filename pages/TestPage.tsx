import Model from "../components/WebGLComponents/webgl_deps/Test-gltf-scene";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Layout from "../components/Layout";
function TestPage() {
    return (
        <Layout>
            <Canvas
                gl={{ alpha: false, antialias: true }}
                style={{
                    height: " 100vh",
                    width: "100%",
                    background: "black",
                }}
            >
                <Model />
                <pointLight
                    castShadow
                    intensity={4}
                    color="white"
                    position={[0, 5, -15]}
                />
                <OrbitControls />
            </Canvas>
        </Layout>
    );
}

export default TestPage;
