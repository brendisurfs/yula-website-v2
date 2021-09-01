//Camera
//	|
//	v
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// fix camera position
camera.position.z = 5;

// find path to the gltf file.
loader.load(
  "/media/bpws/Project Drive/Dev_Projects/Personal_Dev/YulaWebsite_2021/yula-site-nextts/public/testing_yulaLogo.gltf",
  (gltf) => {
    scene.add(gltf);
  }
),
  undefined,
  (err) => {
    console.error(err);
  };

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
