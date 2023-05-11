import * as THREE from 'three';
import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'lil-gui';

const imageSource = '/image.png';

//Color parameter
const parameters = {
  color: 0xff0000,
  spin: () => {
    gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + Math.PI * 2 });
  },
};

//Scene
const scene = new THREE.Scene();

//Debug UI
const gui = new dat.GUI();

//Axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

//Getting canvas element in HTML
const canvas = document.querySelector('canvas.webgl');

//LoadingManager and TextureLoader
const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader();
// const texture = textureLoader.load('/textures/door/color.jpg');

const colorTexture = textureLoader.load('/textures/door/color.jpg');
const alphaTexture = textureLoader.load('/textures/door/alpha.jpg');
const heightTexture = textureLoader.load('/textures/door/height.jpg');
const normalTexture = textureLoader.load('/textures/door/normal.jpg');
const ambientOcclusionTexture = textureLoader.load(
  '/textures/door/ambientOcclusion.jpg'
);
const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg');
const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg');

//Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
// const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({
  map: colorTexture,
  // color: parameters.color,
  wireframe: false,
});
const mesh = new THREE.Mesh(geometry, material);

//Adding object to the scene
scene.add(mesh);

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
camera.position.z = 3;
camera.lookAt(mesh.position);
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
});
renderer.setSize(sizes.width, sizes.height);

let clock = new THREE.Clock();

//Debug UI elements

gui.add(mesh.position, 'x', -3, 3, 0.01);
gui.add(mesh.position, 'y', -3, 3, 0.01);
gui.add(mesh.position, 'z', -3, 3, 0.01);

gui.add(mesh, 'visible');
gui.add(material, 'wireframe');

gui.addColor(parameters, 'color').onChange(() => {
  material.color.set(parameters.color);
});

gui.add(parameters, 'spin');

//Animate

// gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });

const tick = () => {
  //Time
  const elapseTime = clock.getElapsedTime();

  /* //Update object rotation
  mesh.position.x = Math.cos(elapseTime);
  mesh.position.y = Math.sin(elapseTime); */
  // camera.lookAt(mesh.position);

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

  controls.update();

  //Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
