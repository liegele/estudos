import * as THREE from 'three';
// import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'lil-gui';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const imageSource = '/image.png';

//Color parameter
const parameters = {
  color: 0xffffff,
  /* spin: () => {
    gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + Math.PI * 2 });
  }, */
};

//Scene
const scene = new THREE.Scene();
// scene.background = new THREE.Color('rgb(33, 42, 49)');
scene.background = new THREE.Color('rgb(20, 20, 20)');

//Debug UI
// const gui = new dat.GUI();

//Axes helper
// const axesHelper = new THREE.AxesHelper(2);
// scene.add(axesHelper);

//Getting canvas element in HTML
const canvas = document.querySelector('canvas.webgl');

//Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1.3);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(0, 3, 4);
light.target.position.set(-4, 0, -3);
scene.add(light);
scene.add(light.target);

// //LoadingManager and TextureLoader
// const loadingManager = new THREE.LoadingManager();
// const textureLoader = new THREE.TextureLoader();
// const texture = textureLoader.load('/textures/door/color.jpg');

// const doorColorTexture = textureLoader.load('/textures/door/color.jpg');
// // const colorTexture = textureLoader.load('/textures/checkerboard-8x8.png');
// /* const colorTexture = textureLoader.load('/textures/minecraft.png');
// colorTexture.wrapS = THREE.RepeatWrapping;
// colorTexture.wrapT = THREE.RepeatWrapping;
//  */
// // colorTexture.minFilter = THREE.NearestFilter;
// // colorTexture.magFilter = THREE.LinearFilter;
// /* colorTexture.generateMipmaps = false;
// colorTexture.magFilter = THREE.NearestFilter; */

// // colorTexture.offset.y = 0.5;
// // colorTexture.wrapS = THREE.MirroredRepeatWrapping;
// // colorTexture.wrapT = THREE.MirroredRepeatWrapping;

// // colorTexture.rotation = Math.PI * 0.25;
// // colorTexture.center.x = 0.5;
// // colorTexture.center.y = 0.5;

// const alphaTexture = textureLoader.load('/textures/door/alpha.jpg');
// const heightTexture = textureLoader.load('/textures/door/height.jpg');
// const normalTexture = textureLoader.load('/textures/door/normal.jpg');
// const ambientOcclusionTexture = textureLoader.load(
//   '/textures/door/ambientOcclusion.jpg'
// );
// const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg');
// const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg');
// const matcapTexture = textureLoader.load('/textures/matcaps/3.png');
// const gradientTexture = textureLoader.load('/textures/gradients/5.jpg');

// const file = '1';
// const cubeTextureLoader = new THREE.CubeTextureLoader();
// const environmentMapTexture = cubeTextureLoader.load([
//   `textures/environmentMaps/${file}/px.jpg`,
//   `textures/environmentMaps/${file}/nx.jpg`,
//   `textures/environmentMaps/${file}/py.jpg`,
//   `textures/environmentMaps/${file}/ny.jpg`,
//   `textures/environmentMaps/${file}/pz.jpg`,
//   `textures/environmentMaps/${file}/nz.jpg`,
// ]);

//Object

const material = new THREE.MeshStandardMaterial();
// const material = new THREE.MeshStandardMaterial();
// const material = new THREE.MeshPhongMaterial();
// const material = new THREE.MeshLambertMaterial();
// const material = new THREE.MeshMatcapMaterial();
// material.map = doorColorTexture;
// material.color = new THREE.Color(0xff0000);
// material.wireframe = true;
// material.transparent = true;
// material.alphaMap = doorColorTexture;
// material.opacity = 0.5;
// material.side = THREE.DoubleSide;
// material.matcap = matcapTexture;
// material.shininess = 100;
// material.specular = new THREE.Color(0x118811);
// material.gradientMap = gradientTexture;
// gradientTexture.minFilter = THREE.NearestFilter;
// gradientTexture.magFilter = THREE.NearestFilter;
// gradientTexture.generateMipmaps = false;

// material.map = doorColorTexture;
// material.aoMap = ambientOcclusionTexture;
// material.aoMapIntensity = 1;
// material.displacementMap = heightTexture;
// material.displacementScale = 0.05;
// material.metalnessMap = metalnessTexture;
// material.roughnessMap = roughnessTexture;
// material.metalness = 0;
// material.roughness = 1;
// material.normalMap = normalTexture;
// material.normalScale.set(0.5, 0.5);
// material.transparent = true;
// material.alphaMap = alphaTexture;
// material.flatShading = true;
// material.metalness = 0.5;
// material.roughness = 0.45;
// material.envMap = environmentMapTexture;

/* const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 64, 64), material);
sphere.position.x = -1.5;

const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 100, 100), material);

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(0.3, 0.2, 64, 128),
  material
);
torus.position.x = 1.5;

sphere.geometry.setAttribute(
  'uv2',
  new THREE.BufferAttribute(sphere.geometry.attributes.uv.array, 2)
);
plane.geometry.setAttribute(
  'uv2',
  new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2)
);
torus.geometry.setAttribute(
  'uv2',
  new THREE.BufferAttribute(torus.geometry.attributes.uv.array, 2)
);

scene.add(sphere, plane, torus); */

/* const geometry = new THREE.BoxGeometry(1, 1, 1);
// const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({
  map: colorTexture,
  // color: parameters.color,
  wireframe: false,
});
const mesh = new THREE.Mesh(geometry, material);

//Adding object to the scene
scene.add(mesh);
 */
/* //Creating 3 Objects and putting all in a Group.
const group = new THREE.Group();
group.scale.y = 1;
group.rotation.z = 0.25;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube1.position.x = -1.5;
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube2.position.x = 0;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube3.position.x = 1.5;
group.add(cube3); */

//Models

const loader = new GLTFLoader();
loader.load(
  '/models/robot.glb',
  (gltf) => {
    const model = gltf.scene;
    scene.add(model);
    model.position.y = -0.3;
  },
  undefined,
  (error) => {
    console.log(error);
  }
);
//Fonts

/* const fontLoader = new FontLoader();
fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
  const textGeometry = new TextGeometry('liegele.dev', {
    font: font,
    size: 0.4,
    height: 0.1,
    curveSegments: 24,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 5,
  });
  // const textMaterial = new THREE.MeshBasicMaterial();
  const text = new THREE.Mesh(textGeometry, material);
  text.position.y = 1.2;
  textGeometry.computeBoundingBox();
  textGeometry.center();
  scene.add(text);

    const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);

  for (let i = 0; i < 400; i++) {
    const donut = new THREE.Mesh(donutGeometry, material);
    donut.position.x = (Math.random() - 0.5) * 30;
    donut.position.y = (Math.random() - 0.5) * 30;
    donut.position.z = (Math.random() - 0.5) * 30;
    donut.rotation.x = Math.random() * Math.PI;
    donut.rotation.y = Math.random() * Math.PI;
    const scale = Math.random();
    donut.scale.set(scale, scale, scale);
    scene.add(donut);
  }
}); */

//Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

//Handle resizing screen
window.addEventListener('resize', () => {
  //Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  //Upate camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  //Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//Handle fullscreen
window.addEventListener('dblclick', () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});

//Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);

// console.log(window.devicePixelRatio);

/* const aspectRatio = sizes.width / sizes.height;
const camera = new THREE.OrthographicCamera(
  -1 * aspectRatio,
  1 * aspectRatio,
  1,
  -1,
  0.1,
  100
); */
// /*
camera.position.set(0, 0.6, 2.5);

camera.lookAt(light.target);
scene.add(camera);

//Cursor

/* const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener('mousemove', (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = -(event.clientY / sizes.height - 0.5);
  console.log(cursor.x, cursor.y);
}); */

//Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);

let clock = new THREE.Clock();

//Debug UI elements

/* gui.add(mesh.position, 'x', -3, 3, 0.01);
gui.add(mesh.position, 'y', -3, 3, 0.01);
gui.add(mesh.position, 'z', -3, 3, 0.01);

gui.add(mesh, 'visible');
gui.add(material, 'wireframe');

gui.addColor(parameters, 'color').onChange(() => {
  material.color.set(parameters.color);
});

gui.add(parameters, 'spin');
gui.add(colorTexture.offset, 'x').name('offset x').min(-1).max(1).step(0.01);
gui.add(colorTexture.offset, 'y').name('offset y').min(-1).max(1).step(0.01);
gui.add(colorTexture.repeat, 'x').name('repeat x').min(1).max(10).step(1);
gui.add(colorTexture.repeat, 'y').name('repeat y').min(1).max(10).step(1); */

// gui.add(material, 'metalness').min(0).max(1).step(0.0001);
// gui.add(material, 'roughness').min(0).max(1).step(0.0001);

// gui.add(light, 'intensity', 0, 3, 0.01);
// gui.add(light.target.position, 'x', -10, 10);
// gui.add(light.target.position, 'z', -10, 10);
// gui.add(light.target.position, 'y', 0, 10);

//Animate

// gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });

const tick = () => {
  //Time
  const elapseTime = clock.getElapsedTime();

  //Update object rotation
  /*   mesh.position.x = Math.cos(elapseTime);
  mesh.position.y = Math.sin(elapseTime);
  camera.lookAt(mesh.position); */

  /* //Update camera
  camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
  camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
  camera.position.y = cursor.y * 3; */
  // camera.position.x = cursor.x * 5;
  // camera.position.y = cursor.y * 5;
  // camera.lookAt(mesh.position);

  /* //Redefining Target property
  controls.target.y = -2;
  controls.update(); */

  /* sphere.rotation.y = 0.1 * elapseTime;
  plane.rotation.y = 0.1 * elapseTime;
  torus.rotation.y = 0.1 * elapseTime;

  sphere.rotation.x = 0.1 * elapseTime;
  plane.rotation.x = 0.1 * elapseTime;
  torus.rotation.x = 0.1 * elapseTime; */

  controls.update();

  //Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
